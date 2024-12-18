###📌📌test-url:  https://dhwldud17-shooking-app.netlify.app/

# shooking
슈킹 신발 쇼핑몰 개발
## 📌 기본 정보
- **고객사**: 신발 전문 쇼핑몰 슈킹
- **대상 고객**: 20-30대
- **프로젝트 목표**: 모바일과 웹에서 사용자 경험을 개선하고, 장바구니 기능과 상품 목록의 가시성을 강화
- **디자인 시안**: [(https://www.figma.com/design/DKeR5wR65RkxcAWReoBccl/%EC%9D%91%EC%9A%A9%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%95%88?node-id=140-136&node-type=canvas&t=zQwB2HYTayZkSzsQ-0)
- **결과물 제출 기한**:각 기능 별 2주 내 총합 2달 내

### 프로젝트명: 
패션 쇼핑몰 상품 목록 페이지 (모바일 겸 웹페이지)

### 사용하게 될 기술: 
React app, tailwind css

### 문서 작성자: 
오지영
# 프로젝트 개요  
**슈킹(Shoking)** 프로젝트는 20~30대를 주요 타겟으로 한 신발 쇼핑 웹사이트를 개발하는 데 목적을 둡니다.  
이 프로젝트의 주요 목표는 사용자 친화적인 인터페이스와 반응형 디자인을 통해 다양한 디바이스 환경에서 최적의 쇼핑 경험을 제공하는 것입니다.  
React와 Tailwind CSS를 활용하여 제품 목록, 쇼핑 카트, 결제 페이지 등 주요 기능을 구현하며, 이를 통해 웹 개발 역량을 키우고 React의 구조와 작동 원리를 학습하는 데 중점을 두었습니다.  

---

# 시스템 아키텍처  
## 구조 개요  
- **프론트엔드**: React를 기반으로 Tailwind CSS를 사용하여 스타일링과 반응형 디자인 구현  
- **라우팅**: React Router를 통해 각 페이지 간 이동을 처리  
- **컴포넌트**:
  - `Header`: 웹사이트의 상단 네비게이션 바  
  - `ProductList`: 제품 목록 페이지  
  - `ProductDetail`: 제품 상세 페이지
  - `Cart`: 장바구니 페이지
  - `CardList`: 저장된 신용카드 목록 표시  
  - `CardForm`: 신용카드 정보 입력 폼  
  - `CheckoutComplete`: 결제 완료 후 확인 페이지  
- **배포 환경**: 
  - 초기에는 GitHub Pages를 사용했으나 배포 이슈 발생으로 Netlify로 전환  

---

# 개발 환경 설정 및 규칙  
## 개발 환경  
1. **필수 설치 소프트웨어**:  
   - Node.js  
   - npm 또는 yarn  
2. **설치 명령어**:  
   ```bash
   npm install
3. **프로젝트 실행**:  
   ```bash
   npm start
   
##코드 구조
src/
├── components/
│   ├── Header.jsx
│   ├── ProductList.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   ├── CardList.jsx
│   ├── Card.jsx
│   └── CardForm.jsx
│   └── CheckoutComplete.jsx
└── App.jsx
└── index.jsx

---

# 프로젝트에서 중요했던 지점
1. **React의 컴포넌트 기반 개발:**
   초기에 컴포넌트를 설계하고 분리하는 것이 프로젝트의 핵심이었습니다. 이를 통해 재사용성을 높이고 코드를 효율적으로 관리할 수 있었습니다.
3. **반응형 디자인:**
   Tailwind CSS를 사용하여 모바일, 태블릿, 데스크톱 환경에서 자연스러운 사용자 경험을 제공하는 것이 주요 목표였습니다.
라우팅 설계:
5. **라우팅 설계:**
   React Router를 사용하여 페이지 간 이동과 URL 관리를 효율적으로 구성했습니다.

   
# 다른 문서를 참고하는 방법  
## 프로젝트 내 문서:  
- `README.md`: 설치 및 실행 방법, 프로젝트 개요 포함  
- `docs/` 디렉토리: 각 페이지의 설계 및 기술 문서 보관  

## 문서 갱신 절차:  
- 모든 변경 사항은 브랜치별로 업데이트 후 Pull Request로 병합  
- 주요 업데이트는 Slack 및 GitHub를 통해 공유  

---

# 개발할 때 어려움을 겪은 부분  
## 배포 문제:  
- GitHub Pages를 사용하여 배포 시 오류가 발생하여 많은 시간이 소요되었습니다.  
- **해결**: Netlify를 사용해 최종적으로 배포를 완료하였습니다.  

## 초기 React 학습:  
- React와 웹사이트 제작 모두 처음이어서 초기에 코드를 파악하고 이해하는 데 어려움이 있었습니다.  
- **해결**: React의 기본 개념과 구조를 꾸준히 학습하며 시간이 지나면서 코드의 흐름을 이해하고 전체 프로젝트를 파악할 수 있었습니다.  
