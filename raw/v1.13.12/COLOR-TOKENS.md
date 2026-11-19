# 은하계 글래스 디자인 시스템

색상과 유리 효과는 `color-tokens.css`에서, 각 화면의 적용 규칙은 `galaxy-theme.css`에서 관리해요.

| 역할 | 토큰 | 색상 | 사용처 |
| --- | --- | --- | --- |
| 파란 강조 | `--color-brand-primary` | `#8DBDFF` | 주요 행동, 선택 상태 |
| 반짝이 | `--color-currency-sparkle` | `#8ECBFF` | 상단 잔액, 상점, 보상 |
| 밝은 회색 | `--color-accent-highlight` | `#C9D1D9` | 보조 강조와 이야기 출처 |
| 골드 | `--color-currency-gold` | `#F1D397` | 골드 잔액과 수령 |
| 화면 배경 | `--color-surface-page` | `#101216` | 화면 바탕과 성운 그라데이션 |
| 카드 | `--color-glass-card` | `#161A1FB0` | 도감, 상점 등 반투명 카드 |
| 팝업 | `--color-glass-overlay` | `#161A1FED` | 별 상세, 대화상자 |
| 설정 팝업 | `--color-glass-reading` | `#161A1FF5` | 안내문, 버튼, 펼치는 설정 |
| 내비게이션 | `--color-glass-surface` | `#1F242ABF` | 하단 메뉴, 토스트 |
| 기본 글자 | `--color-text-primary` | `#EEF5FB` | 제목과 핵심 정보 |
| 보조 글자 | `--color-text-secondary` | `#A4ABB4` | 설명과 수량 |

도감과 상점의 카드에는 별 배경이 비치도록 차콜 표면에 약 69% 불투명도를 적용하고, `--glass-panel-sheen`으로 가장자리에 옅은 빛을 더해요. 하단 메뉴와 팝업에는 `--glass-backdrop`으로 5px만 흐리게 적용해요. 팝업 뒤는 약하게 어둡게 처리해 별과 궤도의 형태가 보여요. 배경 흐림을 지원하지 않는 브라우저에서는 반투명 색상만 적용해요. 투명도 줄이기를 선택하면 주요 카드, 메뉴, 팝업에 불투명한 `--color-surface-panel`을 사용해요. 팝업과 버튼은 `--glass-edge-light`로 양쪽 모서리에 은은한 회색 반사를 더해요. 주요 행동은 파란색, 선택 상태는 채도가 낮은 짙은 파란색, 비활성 버튼은 광택을 뺀 표면으로 표시해요.

별의 파스텔 그라데이션은 `star-art.mjs`의 `starLight`에서 관리해요. 일반 별은 종마다 다른 색이 라벤더빛과 섞이고, 희귀 별은 오팔빛이 더해져요. SVG 캐릭터와 탐사 지도에서 같은 색을 사용해요.

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

## 팝업, 숫자, 탭

- 긴 팝업은 카드 내부에서 스크롤해요. 제목과 닫기 버튼은 상단에 고정하고, 뒤로 지나가는 내용은 글래스 블러와 `--modal-scroll-fade`로 서서히 가려요. 투명도 감소 설정에서는 불투명한 제목 영역을 사용해요.
- 이야기 순번과 단순 집계는 배경이나 테두리 없이 텍스트로 표시해요. 탭의 집계는 해당 탭 안에서 보조 텍스트로 보여줘요.
- 행성 지평선은 선명한 윤곽을 따라 청록, 블루, 보라가 연속적으로 이어지고, 빛은 표면 안쪽으로 은은하게 번져요.
