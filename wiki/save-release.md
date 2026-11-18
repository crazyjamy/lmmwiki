# 저장과 배포

- 기준 날짜: 2026-11-18 · 확인한 코드 v1.4.1
- 최종 수정일: 2026-11-18
- 출처: [버전 파일](../raw/v1.4.1/source/VERSION.json), [배포 안내](../raw/v1.4.1/source/DEPLOY.md), [화면·저장 처리](../raw/v1.4.1/source/dust.mjs), [기록 내보내기·불러오기](../raw/v1.4.1/source/save-files.mjs), [플레이어 설정](../raw/v1.4.1/source/player-settings.mjs)
- 상태: 제공 파일의 코드·안내 확인. 운영 상태는 미확인입니다.

## 확인한 버전

| 항목 | 제공 파일에 적힌 값 |
| --- | --- |
| version | 1.4.1 |
| build | 1.4.1-1d15f0c9 |
| sourceCommit | 1d15f0c9da5057dbb3087e81420521fdcfca33c8 |
| basePath | /dustgame/ |
| 게임 저장소 | https://github.com/crazyjamy/dustgame |
| 안내에 적힌 게임 주소 | https://crazyjamy.github.io/dustgame/ |
| 위키 저장소 | https://github.com/crazyjamy/lmmwiki |

sourceCommit은 ZIP의 버전 파일에 적힌 값이며 원격 게임 저장소와 대조하지 않았습니다.
게임 주소의 현재 접속·배포 성공·실제 서비스 버전도 확인하지 않았습니다.

## 기록 저장

- 게임 상태는 브라우저 localStorage의 tiny-dust-club-v1 키로 저장합니다.
- 다른 기기·브라우저로의 기록 이동은 JSON 내보내기·불러오기 기능으로 안내합니다.
- 내보내기 형식은 tiny-dust-save, schemaVersion 3입니다.
- 불러오기는 해당 형식의 스키마 2·3과 기존 상태 JSON을 처리하는 코드가 있습니다.
- 불러오기 파일은 UTF-8 기준 5MB 이하로 제한합니다.
- 불러오기 전 요약 확인, 불러오기·초기화 전 최근 기록 한 개의 복구 보관을 안내합니다.
- 서버 계정 동기화 구현은 이번 확인 범위에서 발견하지 못했습니다. 도입 계획은 미확인입니다.

정상 저장, 용량 초과, 잘못된 JSON, 이전 버전 기록 복구가 브라우저에서 실제로 어떻게 보이는지는 별도 검증이 필요합니다.

## 배포 안내의 범위

제공된 DEPLOY.md는 정적 파일을 게임 저장소에 업로드하여 GitHub Pages로 배포하는 방법을 설명합니다.
이번 작업은 위키의 초기 구성이며, 게임 파일의 배포·교체를 진행한 기록은 아닙니다.
이 위키의 GitHub 업로드 상태는 실행 결과 보고와 실제 원격 커밋으로 확인합니다.

관련 문서: [목차](index.md), [자료 목록](sources.md), [확인이 필요한 사항](open-questions.md), [변경 기록](log.md)
