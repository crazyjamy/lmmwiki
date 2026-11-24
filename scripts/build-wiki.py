"""Render the Markdown wiki and its story review as a static site."""
import html
import json
import os
from pathlib import Path
import shutil
import subprocess
from urllib.parse import quote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'docs'
STORY = Path('raw/2026-11-24-story-review/star-stories-revised.html')
SOURCES = sorted((ROOT / 'wiki').glob('*.md')) + [ROOT / 'README.md', ROOT / 'AGENTS.md']
REPO = 'https://github.com/crazyjamy/lmmwiki'

def output_path(source):
    if source == Path('wiki/index.md'):
        return OUTPUT / 'index.html'
    return (OUTPUT / source).with_suffix('.html')

def render(source):
    document = json.loads(subprocess.check_output(
        ['pandoc', '-f', 'gfm', '-t', 'json', str(ROOT / source)]
    ))
    destination = output_path(source)

    def relative(target):
        return Path(os.path.relpath(target, destination.parent)).as_posix()

    def rewrite(node):
        if isinstance(node, list):
            for child in node:
                rewrite(child)
        elif isinstance(node, dict):
            if node.get('t') in ('Link', 'Image'):
                address = node['c'][-1]
                url = urlsplit(address[0])
                if not url.scheme and not url.netloc and url.path:
                    target = (ROOT / source.parent / url.path).resolve().relative_to(ROOT)
                    if target == STORY:
                        address[0] = relative(OUTPUT / 'stories.html')
                    elif ROOT / target in SOURCES:
                        address[0] = relative(output_path(target))
                    else:
                        kind = 'tree' if (ROOT / target).is_dir() else 'blob'
                        address[0] = f'{REPO}/{kind}/main/{quote(target.as_posix())}'
                    if url.fragment:
                        address[0] += '#' + url.fragment
            for child in node.values():
                rewrite(child)

    rewrite(document)
    content = subprocess.check_output(
        ['pandoc', '-f', 'json', '-t', 'html5'],
        input=json.dumps(document, ensure_ascii=False), text=True
    )
    title = html.escape((ROOT / source).read_text().splitlines()[0].removeprefix('# '))
    home = relative(OUTPUT / 'index.html')
    story = relative(OUTPUT / 'stories.html')
    css = relative(OUTPUT / 'wiki.css')
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(f'''<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title} · 별이 머무는 곳</title>
<link rel="stylesheet" href="{css}">
</head>
<body>
<header><nav aria-label="위키 메뉴">
<a href="{home}">먼지 위키</a>
<a href="{story}">캐릭터 이야기</a>
<a href="{REPO}">GitHub</a>
</nav></header>
<main>{content}</main>
</body></html>
''', encoding='utf-8')

for source in SOURCES:
    render(source.relative_to(ROOT))
shutil.copyfile(ROOT / STORY, OUTPUT / 'stories.html')
(OUTPUT / '.nojekyll').touch()
