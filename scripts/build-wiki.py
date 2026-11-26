"""Render the Markdown wiki and its story review as a static site."""
import html
import json
import os
import re
from pathlib import Path
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

def relative_url(destination, target):
    return Path(os.path.relpath(target, destination.parent)).as_posix()


def page_header(destination):
    links = [
        (OUTPUT / 'index.html', '별이 머무는 곳', ' class="wiki-brand"'),
        (OUTPUT / 'wiki/design-guide.html', '디자인 가이드', ''),
        (OUTPUT / 'stories.html', '캐릭터 이야기', ''),
    ]
    navigation = []
    for target, label, css_class in links:
        href = relative_url(destination, target)
        current = ' aria-current="page"' if destination == target else ''
        navigation.append(f'<a href="{href}"{css_class}{current}>{label}</a>')
    navigation.append(f'<a href="{REPO}">GitHub</a>')
    return (
        '<header class="site-header"><nav class="site-nav" aria-label="위키 메뉴">\n'
        + '\n'.join(navigation) + '\n</nav></header>'
    )


def render(source):
    document = json.loads(subprocess.check_output(
        ['pandoc', '-f', 'gfm', '-t', 'json', str(ROOT / source)]
    ))
    destination = output_path(source)

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
                        address[0] = relative_url(destination, OUTPUT / 'stories.html')
                    elif ROOT / target in SOURCES:
                        address[0] = relative_url(destination, output_path(target))
                    elif (ROOT / target).is_relative_to(OUTPUT) and (ROOT / target).is_file():
                        address[0] = relative_url(destination, ROOT / target)
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
    if source == Path('wiki/monthly-constellations.md'):
        intro, *entries = re.split(r'<p><a id="(sky-[a-z]{3})"></a></p>\n', content)
        content = intro + ''.join(
            f'<section id="{anchor}">\n{entry}</section>\n'
            for anchor, entry in zip(entries[::2], entries[1::2])
        )
    title = html.escape((ROOT / source).read_text().splitlines()[0].removeprefix('# '))
    css = relative_url(destination, OUTPUT / 'wiki.css')
    main_class = ' class="wiki-home"' if destination == OUTPUT / 'index.html' else ''
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(f'''<!doctype html>
<html lang="ko" class="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title} · 별이 머무는 곳</title>
<link rel="stylesheet" href="{css}">
</head>
<body>
{page_header(destination)}
<main{main_class}>{content}</main>
</body></html>
''', encoding='utf-8')

def render_story():
    source = (ROOT / STORY).read_text(encoding='utf-8')
    before, style_open, after = source.partition('<style>')
    _, style_close, after = after.partition('</style>')
    if not style_open or not style_close:
        raise ValueError('Expected inline stylesheet in story source')
    story = before + '<link rel="stylesheet" href="wiki.css">' + after
    story = story.replace('<html lang="ko">', '<html lang="ko" class="dark">', 1)
    header = page_header(OUTPUT / 'stories.html')
    story = story.replace('<body><main>', f'<body>\n{header}\n<main class="story-reader">', 1)
    (OUTPUT / 'stories.html').write_text(story, encoding='utf-8')


for source in SOURCES:
    render(source.relative_to(ROOT))
render_story()
(OUTPUT / '.nojekyll').touch()
