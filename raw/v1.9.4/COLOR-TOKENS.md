# 은하계 UI 색상 토큰

색상 값은 `color-tokens.css`에서 관리해요. 메인과 서브 색을 바꿀 때는 아래 기본 토큰을 수정하면 연결된 UI에 반영돼요.

| 역할 | 토큰 | 색상 | 사용처 |
| --- | --- | --- | --- |
| 메인 · 라벤더 | `--color-brand-primary` | `#CDB6F1` | 주요 행동, 선택 상태, 링크, 반짝이 |
| 서브 · 골드 | `--color-brand-secondary` | `#F0D397` | 골드 잔액 및 수령 |
| 화면 배경 | `--color-surface-page` | `#14142B` | 페이지 바탕 |
| 카드·팝업 | `--color-surface-panel` | `#26203E` | 카드, 헤더, 팝업, 하단 탭 |
| 강조 패널 | `--color-surface-raised` | `#302746` | 펼친 내용, 보상 영역 |
| 내부 영역 | `--color-surface-inset` | `#1E192F` | 안내 박스, 표, 보조 버튼과 입력 필드 |
| 태그 배경 | `--color-surface-tag` | `#382D4E` | 재료, 효과, 상태 배지 |
| 기본 글자 | `--color-text-primary` | `#F5EEFB` | 제목과 핵심 정보 |
| 보조 글자 | `--color-text-secondary` | `#D1C5E3` | 설명과 수량 |
| 구분선 | `--color-border-subtle` | `#514460` | 카드 테두리와 표 구분선 |
| 조작 요소 테두리 | `--color-border-control` | `#8973A0` | 보조 버튼, 입력, 선택 컨트롤 |
| 키보드 포커스 | `--color-focus` | `#DEC8FF` | 포커스 윤곽 |

`--color-action-primary`와 `--color-currency-sparkle`은 메인 라벤더를 참조해요. `--color-currency-gold`는 서브 골드를 참조해요. 재화는 아이콘, 이름, 수량을 함께 표시해요.

주요 버튼은 `--color-action-primary-hover`와 `--color-action-primary-pressed`로 상호작용을 표시해요. 비활성 버튼은 `--color-surface-disabled`와 `--color-text-disabled`를, 오류와 완료 안내는 각각 `--color-error-*`와 `--color-success-*`를 사용해요.

별 캐릭터·가구 일러스트·탐사 지도의 색은 게임 안에서 종류와 지역을 구분하는 데 사용해요.

## 글자 크기 토큰

`color-tokens.css`의 `--text-*` 토큰을 사용해요. 기준값은 브라우저 기본 글자 크기 16px일 때의 환산값이에요.

| 역할 | 토큰 | 기준값 |
| --- | --- | --- |
| 작은 부가 정보 | `--text-caption`, `--text-meta` | 11px, 12px |
| 라벨과 버튼 | `--text-label` | 13px |
| 본문과 강조 본문 | `--text-body`, `--text-body-large` | 14px, 16px |
| 카드와 대화상자 제목 | `--text-title-small`, `--text-title`, `--text-title-large` | 18px, 20px, 24px |
| 화면 제목 | `--text-heading`, `--text-heading-large` | 28px, 32px |
| 큰 장식 글자와 기호 | `--text-display*`, `--text-symbol-*` | 40px–68px |
