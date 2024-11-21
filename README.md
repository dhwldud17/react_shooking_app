###📌📌test-url:  https://dhwldud17-shooking-app.netlify.app/

# shooking
슈킹 신발 쇼핑몰 개발을 위한 문서 가이드 저장소입니다.
## 📌 기본 정보
- **고객사**: 신발 전문 쇼핑몰 슈킹
- **대상 고객**: 20-30대
- **프로젝트 목표**: 모바일과 웹에서 사용자 경험을 개선하고, 장바구니 기능과 상품 목록의 가시성을 강화
- **디자인 시안**: 고객사에서 제공 예정
- **결과물 제출 기한**: 2주 내

### 프로젝트명: 
패션 쇼핑몰 상품 목록 페이지 (모바일)

### 사용하게 될 기술: 
React

### 문서 작성자: 
오지영

## 📝 고객 요구사항 정리

1. **모바일 호환성 문제 해결**
   - **문제**: 사용자가 쇼핑몰에서 장바구니로 넘어갈 때 모바일 화면에서 호환 문제가 발생.
   - **요구사항**: 웹페이지를 기반으로 하되, 모바일에서도 사용이 편리하도록 반응형 디자인을 적용. 장바구니 화면 전환 시 매끄럽게 동작할 수 있도록 최적화.

2. **상품 목록 사진 가시성 강화**
   - **문제**: 상품 목록에서 사진이 잘 보이지 않음.
   - **요구사항**: 상품 사진을 크게 표시하여, 사용자들이 상품의 디테일을 명확히 볼 수 있도록 레이아웃 개선.

3. **장바구니 내 실시간 상품 수 표시**
   - **요구사항**: 사용자가 장바구니에 담긴 상품 개수를 실시간으로 확인할 수 있도록, 장바구니 아이콘 옆에 현재 담긴 상품 수를 표시.
   - **기술 구현**: FAST URL을 통해 확인 후 피드백을 받을 예정.

4. **상품 상세 정보 제공**
   - **요구사항**: 상품 상세 페이지에서 제품의 이미지, 이름, 가격, 설명을 포함한 정보를 제공.
   - **기능**: 사용자가 선택한 상품을 장바구니에 담기 전에 상세 정보를 쉽게 확인할 수 있도록 함.

5. **장바구니 기능**
   - **요구사항**: 장바구니 페이지에서 담긴 상품 목록, 수량 조정 및 총 합계를 명확히 표시.
   - **기능**: 사용자가 장바구니에 담긴 각 상품의 수량을 증가 또는 감소시킬 수 있는 버튼 제공.

6. **결제 모드**
   - **요구사항**: 사용자가 결제를 진행할 때, 카드 목록과 카드 추가 기능 제공.
   - **기능**: 카드 정보를 입력할 수 있는 폼 제공 (카드 번호, 만료일, CVC 등).

7. **사용자 친화적인 인터페이스**
   - **요구사항**: 직관적인 UI/UX 디자인으로 사용자의 편리한 탐색 지원.
   - **기능**: 다양한 디바이스에서 최적화된 반응형 디자인 구현.

8. **실시간 피드백 및 오류 처리**
   - **요구사항**: 사용자 행동에 따른 실시간 피드백 제공.
   - **기능**: 입력 오류 발생 시 사용자에게 명확한 안내 메시지 제공.

## 📋 기능 목록

1. **신상품 목록 페이지**
   - **세부 작업**:
     - 상품 데이터 Fetch
     - 상품 카드 컴포넌트 생성
     - 스크롤 가능 영역 구현
   - **사용할 컴포넌트**: `ProductList`, `ProductCard`

2. **상품 상세 페이지**
   - **세부 작업**:
     - 상세 정보 Fetch
     - 이미지 확대 기능 구현
     - 관련 상품 목록 표시
   - **사용할 컴포넌트**: `ProductDetail`, `RelatedProducts`

3. **장바구니 기능**
   - **세부 작업**:
     - 장바구니 데이터 관리
     - 상품 수량 조정 기능 구현
     - 총합계 계산 기능
   - **사용할 컴포넌트**: `Cart`, `CartItem`, `CartSummary`

4. **결제 모드**
   - **세부 작업**:
     - 카드 데이터 Fetch 및 관리
     - 카드 추가/수정 기능 구현
     - 결제 정보 입력 폼 생성
   - **사용할 컴포넌트**: `Payment`, `CardList`, `AddCardForm`

5. **사용자 친화적인 인터페이스**
   - **세부 작업**:
     - 반응형 레이아웃 구현
     - 사용자 흐름 최적화
   - **사용할 컴포넌트**: `Navbar`, `Footer`, `ResponsiveContainer`

6. **실시간 피드백 및 오류 처리**
   - **세부 작업**:
     - 입력 오류 검증 및 메시지 표시
     - 사용자 행동에 따른 피드백 제공
   - **사용할 컴포넌트**: `ErrorMessage`, `FeedbackMessage`
