# 저장과 배포

- 기준 날짜: 2026-11-23 · v1.13.63 패키지·비공개 배포 및 게임 저장소 버전 확인
- 최종 수정일: 2026-11-24
- 출처: [버전 파일](../raw/v1.4.1/source/VERSION.json), [배포 안내](../raw/v1.4.1/source/DEPLOY.md), [화면·저장 처리](../raw/v1.4.1/source/dust.mjs), [기록 내보내기·불러오기](../raw/v1.4.1/source/save-files.mjs), [플레이어 설정](../raw/v1.4.1/source/player-settings.mjs)
- 상태: 2026-11-23 비공개 사이트 배포 이력 확인. 저장 키와 내보내기 스키마는 v1.13.12 코드에서도 확인했습니다.

## 한눈에 보기

- 비공개 테스트 사이트는 **v1.13.63**, 공개 게임 저장소 `main`은 **v1.13.35**입니다.
- 게임 기록은 **브라우저에 저장**됩니다. 다른 기기로 옮기려면 JSON 내보내기·불러오기를 씁니다.
- 테스트 사이트와 GitHub Pages는 서로 다른 주소이므로 기록이 자동으로 이어지지 않습니다.
- 서버 계정 동기화는 확인되지 않았습니다.

## 최신 배포 상태

| 채널 | 확인 결과 | 근거 |
| --- | --- | --- |
| 비공개 테스트 사이트 | **v1.13.63** · 2026-11-23 18:27 KST 배포 성공 | [검증 기록](../raw/v1.13.63/verification.json), 소스 `0f23dbc5205ce2bd969123530feafa7a0cd61de5` |
| 공개 게임 저장소 `main` | **v1.13.35** · 2026-11-23 조회 | [버전 파일](https://github.com/crazyjamy/dustgame/blob/main/VERSION.json) |
| 공개 GitHub Pages | 최근 성공한 배포 실행의 소스는 **v1.13.35** · 라이브 응답은 이번 조회에서 미확인 | [배포 실행](https://github.com/crazyjamy/dustgame/actions/runs/45116440356), [해당 커밋의 버전 파일](https://github.com/crazyjamy/dustgame/blob/84bd55c0073daffb391f5d7918fddc45fd483f4c/VERSION.json) |
| GitHub 업로드용 패키지 | **v1.13.63** ZIP 생성, 압축과 참조 경로 검사 통과 | [패키지 명세](../raw/v1.13.63/package-manifest.json). ZIP은 사용자에게 별도 전달 |

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

sourceCommit은 ZIP의 버전 파일에 적힌 값이며 원격 게임 저장소와 대조하지 않았습니다. 공개 GitHub Pages의 확인 결과는 위의 최신 배포 상태를 참고하세요.

## 기록 저장

### 저장 방식

| 항목 | 확인한 내용 |
| --- | --- |
| 저장 위치 | 브라우저 localStorage의 `tiny-dust-club-v1` 키 |
| 기기·브라우저 이동 | JSON 내보내기·불러오기 기능으로 안내 |
| 내보내기 형식 | `tiny-dust-save`, schemaVersion 3 |
| 불러오기 지원 | 해당 형식의 스키마 2·3과 기존 상태 JSON |
| 파일 크기 제한 | UTF-8 기준 5MB 이하 |
| 안전장치 | 불러오기 전 요약 확인, 불러오기·초기화 전 최근 기록 한 개를 복구용으로 보관 |
| 서버 계정 동기화 | 이번 확인 범위에서 구현을 발견하지 못함. 도입 계획은 미확인 |

### v1.13.35의 저장 관련 변경

- 저장 키와 스키마는 유지합니다.
- 새 후일담과 개체별 기록 필드를 기존 데이터에 추가하며, 같은 주소의 자동 저장은 이어갑니다.
- 테스트 사이트와 GitHub Pages는 서로 다른 출처이므로, 옮기려면 JSON 내보내기·불러오기를 써야 합니다.
- v1.13.35 ZIP 생성은 GitHub 게임 저장소 업로드나 Pages 배포를 뜻하지 않습니다.

### 검증 범위

| 버전 | 확인한 내용 | 확인하지 않은 내용 |
| --- | --- | --- |
| v1.13.35 | 자동 테스트 155개 통과. 이전 저장 유지, 후일담·개체별 기록, 합치기와 읽음 상태 보존 검증. Chrome PC·390px 미리보기에서 기록 넘기기, 개인 기록 분리, 팝업과 단서 카드, 새 이름 확인 | iPhone Safari 실기기, 실제 저장 용량 초과 화면 등 전체 환경 |
| v1.13.63 | 소스 자동 테스트 156개 통과, ZIP 압축 검사 통과 ([S23](../raw/v1.13.63/verification.json)) | 플레이어 테스트는 미실시 |

## 배포 안내의 범위

- 제공된 DEPLOY.md는 정적 파일을 게임 저장소에 업로드하여 GitHub Pages로 배포하는 방법을 설명합니다.
- 이 문서는 배포 이력을 기록합니다.
- 이 위키의 GitHub 업로드 상태는 실행 결과 보고와 실제 원격 커밋으로 확인합니다.

관련 문서: [목차](index.md), [자료 목록](sources.md), [확인이 필요한 사항](open-questions.md), [변경 기록](log.md)

