# 전체 목차

[고양이 개발자 제니](overview.md#고양이-개발자-제니) · 제니예요. 창가 책상에서 별들이 머물 곳을 만들고 있어요.

- 기준 날짜: 2026-11-25 · v1.13.81
- 최종 수정일: 2026-11-27
- 출처: [자료 목록](sources.md), [위키 구성 요청](../raw/2026-11-18-wiki-request.md)

게임 변경 작업은 [개발 변경의 테스트·공개 절차](save-release.md#development-workflow)를 따른다.

## 주제별 문서

- [게임 개요](overview.md)

  게임의 기본 흐름, 자료별 상태

- [별 수집과 성장](dust-growth.md)

  첫 인사, 자리 교체, 합치기, 다섯 이야기·후일담, 함께 쓴 이야기, 개체별 기록

- [캐릭터 이야기 개정본](../raw/2026-11-24-story-review/star-stories-revised.html)

  별 50종의 첫인사, 성장 이야기, 후일담 원문 · 게임 반영

- [별자리 월간 이야기](monthly-constellations.md)

  별자리 88개의 이야기, 루미의 관측 노트, 완성 엽서

- [방과 가구](room-furniture.md)

  방 100레벨, 수용 한도, 설치물 20종의 퀘스트 획득·10단계 강화, 이전 구성

- [재화와 모험](currency-adventure.md)

  골드, 반짝이, 하루 반짝이, 시간제 모험과 직접 탐험

- [배포 이력](release-history.md)

  v1.13.28~81 변경과 초기 90건 배포 이력

- [디자인 가이드](design-guide.md)

  토큰, 상태별 시각 예시, 재사용 패턴, 화면과 코드 · [작은 상점의 가구와 재료](design-guide.md#작은-상점의-가구와-재료) · [별빛 창가를 기준으로 한 가구 선·명도와 언어 선택](design-guide.md#가구-원화와-언어-선택--테스트판-227) · [선택 카드와 별 상세의 이름 표시](design-guide.md#선택-카드와-별-상세의-이름-표시)

- [저장과 배포](save-release.md)

  브라우저 저장, 기록 이동, 버전과 배포 확인 범위 · [일반 테스트와 DEV 장면의 진입 방법, 저장 범위](save-release.md#dev-scenes)

- [확인이 필요한 사항](open-questions.md)

  기획과 코드 차이, 확인한 변경과 미확인 항목

## 디자인 시스템

[디자인 가이드](design-guide.md)에서 색상·타이포그래피·여백·모션 토큰, 화면별 사용처와 코드 링크를 확인하세요. [상태별 시각 예시](../docs/design-examples/index.html)에서는 버튼·탭·도안·진행률·팝업·토스트의 상태를 직접 비교할 수 있습니다.

## 2026-11-26 · 88개 별자리 월간 이야기

[월간 원고 88개 전체](monthly-constellations.md)에서 별자리를 고르면 5편의 이야기, 루미의 접힌 관측 노트, 완성 엽서를 함께 읽을 수 있습니다.

## 2026-11-25 · 랜덤 탐험 엽서와 가구 도안

[랜덤 탐험과 엽서 획득 조건](currency-adventure.md) · [도안과 제작 재료](room-furniture.md) · [배포 기록](save-release.md)

근거 · [빌드 기록](../raw/build-d7b619b5/VERSION.json) · [탐험 구현](../raw/build-d7b619b5/star-trips.mjs)

## 2026-11-25 · 나리의 수집 단서

나리의 ‘다음 수집 단서’에서 위성 온실 바로가기를 제거했습니다. 정수의 필요 수량과 보유 수량은 이 카드에서 확인하고, ‘단서 살펴보기’로 별의 단서를 읽을 수 있습니다.

근거 · [빌드 1.13.81-3dfe0d36](../raw/build-3dfe0d36/VERSION.json)

## 2026-11-25 · 랜덤 탐험과 제작 가구

빌드 **1.13.81-1974fe9c**의 [랜덤 탐험 조건과 보상](currency-adventure.md), [가구 제작·강화](room-furniture.md), [재료와 가구 아이콘](design-guide.md)을 확인하세요.

근거 · [빌드 기록](../raw/build-1974fe9c/VERSION.json) · [아이콘 가이드](../raw/build-1974fe9c/ICON-GUIDE.md)

## 한눈에 보기

- 게임 이름은 **별이 머무는 곳**입니다. 위키는 초기 이름인 「작고 소중한 먼지 키우기」로 시작했습니다.
- 비공개 테스트 사이트의 최신 확인 버전은 **v1.13.81**입니다.
- 공개 게임 저장소와 GitHub Pages는 **v1.13.81**입니다.
- 처음이라면 [게임 개요](overview.md) → [별 수집과 성장](dust-growth.md) → [확인이 필요한 사항](open-questions.md) 순서로 읽으세요.

세 요정의 역할과 말투 예시는 [루미·나리·모아의 정체성](overview.md#루미나리모아의-정체성)에서 확인합니다.

## 관리 문서

- [자료 목록과 출처](sources.md)
- [변경 기록](log.md)
- [위키 관리 규칙](../AGENTS.md)
- [저장소 안내](../README.md)

## 2026-11-24 확인 범위

| 채널 | 확인한 버전 | 근거 |
| --- | --- | --- |
| 비공개 테스트 사이트 | **v1.13.81** · 2026-11-24 배포 성공 | [S26 버전 파일](../raw/v1.13.81/VERSION.json) |
| 공개 게임 저장소 `main` | **v1.13.81** | [저장소 버전 파일](https://github.com/crazyjamy/dustgame/blob/main/VERSION.json) |
| 공개 GitHub Pages | **v1.13.81** | [라이브 버전 파일](https://crazyjamy.github.io/dustgame/VERSION.json) |
| GitHub 업로드용 패키지 | **v1.13.81** · 압축과 참조 경로 검사 통과 | [S26 버전 파일](../raw/v1.13.81/VERSION.json) |

채널별 상세는 [저장과 배포](save-release.md)를 참고하세요.

디자인 기준의 과거 자료인 [글래스 토큰](../raw/v1.13.17/COLOR-TOKENS.md)과 [아이콘 가이드](../raw/v1.13.24/ICON-GUIDE.md), v1.4.1 원본과 초기 코드 검토 내용도 보존합니다.
