# 저장과 배포

- 기준 날짜: 2026-11-23 · v1.13.35 패키지·비공개 배포 및 게임 저장소 버전 확인
- 최종 수정일: 2026-11-23
- 출처: [버전 파일](../raw/v1.4.1/source/VERSION.json), [배포 안내](../raw/v1.4.1/source/DEPLOY.md), [화면·저장 처리](../raw/v1.4.1/source/dust.mjs), [기록 내보내기·불러오기](../raw/v1.4.1/source/save-files.mjs), [플레이어 설정](../raw/v1.4.1/source/player-settings.mjs)
- 상태: 2026-11-23 비공개 사이트 배포 이력 확인. 저장 키와 내보내기 스키마는 v1.13.12 코드에서도 확인했습니다.

## 최신 배포 상태

| 채널 | 확인 결과 | 근거 |
| --- | --- | --- |
| 비공개 테스트 사이트 | **v1.13.35** · 2026-11-23 14:00 KST 배포 성공 | [배포 결과 전사](../raw/v1.13.35/verification.json), 런타임 커밋 `9a3a12caf9f0d542b6b9a26b5089ed2a179d356d` |
| 공개 게임 저장소 `main` | `VERSION.json` 표기 **v1.13.27** · 이번 작업에서 재조회 | [버전 파일](https://github.com/crazyjamy/dustgame/blob/main/VERSION.json), 조회 blob SHA는 검증 기록에 보관 |
| 공개 GitHub Pages | 마지막 확인은 **v1.13.24** · 2026-11-20. 이번 작업에서 라이브 재확인하지 않음 | 이전 [배포 실행](https://github.com/crazyjamy/dustgame/actions/runs/44656398886). 저장소 버전과 라이브 버전을 동일시하지 않음 |
| GitHub 업로드용 패키지 | **v1.13.35** ZIP 생성, 압축·참조 검사 통과 | [패키지 명세](../raw/v1.13.35/package-manifest.json). ZIP은 사용자에게 별도 다운로드로 제공하며 이 위키에는 포함하지 않음 |


[전체 배포 이력](release-history.md)에서 배포 시각과 변경 사항을 볼 수 있습니다.

## 이전에 확보한 v1.4.1 파일

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
공개 GitHub Pages의 확인 결과는 위의 최신 배포 상태를 참고하세요.

## 기록 저장

- 게임 상태는 브라우저 localStorage의 tiny-dust-club-v1 키로 저장합니다.
- 다른 기기·브라우저로의 기록 이동은 JSON 내보내기·불러오기 기능으로 안내합니다.
- 내보내기 형식은 tiny-dust-save, schemaVersion 3입니다.
- 불러오기는 해당 형식의 스키마 2·3과 기존 상태 JSON을 처리하는 코드가 있습니다.
- 불러오기 파일은 UTF-8 기준 5MB 이하로 제한합니다.
- 불러오기 전 요약 확인, 불러오기·초기화 전 최근 기록 한 개의 복구 보관을 안내합니다.
- 서버 계정 동기화 구현은 이번 확인 범위에서 발견하지 못했습니다. 도입 계획은 미확인입니다.

v1.13.35에서 자동 테스트 155개가 통과했습니다. 이전 저장 유지, 후일담·개체별 기록, 합치기와 읽음 상태의 보존을 검증했습니다. Chrome PC·390px 미리보기에서 기록 넘기기와 개인 기록 분리, 팝업과 단서 카드 및 새 이름을 확인했습니다. iPhone Safari 실기기와 실제 저장 용량 초과 화면 등 전체 환경 검증을 완료한 것은 아닙니다.

저장 키와 스키마는 유지합니다. 새 후일담과 개체별 기록 필드를 기존 데이터에 추가하며, 같은 주소의 자동 저장은 이어갑니다. 테스트 사이트와 GitHub Pages는 서로 다른 출처이므로 JSON 내보내기·불러오기로 이동해야 합니다. 이번 ZIP 생성은 GitHub 게임 저장소 업로드나 Pages 배포를 뜻하지 않습니다.

## 배포 안내의 범위

제공된 DEPLOY.md는 정적 파일을 게임 저장소에 업로드하여 GitHub Pages로 배포하는 방법을 설명합니다.
이 문서는 배포 이력을 기록합니다.
이 위키의 GitHub 업로드 상태는 실행 결과 보고와 실제 원격 커밋으로 확인합니다.

관련 문서: [목차](index.md), [자료 목록](sources.md), [확인이 필요한 사항](open-questions.md), [변경 기록](log.md)

