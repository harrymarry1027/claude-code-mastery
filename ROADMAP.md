# 개발자 웹 이력서 프로젝트 로드맵

## 프로젝트 개요

HTML, CSS, JavaScript, TailwindCSS를 활용한 반응형 개발자 웹 이력서 사이트

## 기술 스택

| 구분 | 기술 |
|------|------|
| 마크업 | HTML5 |
| 스타일링 | CSS3, TailwindCSS (CDN) |
| 인터랙션 | Vanilla JavaScript |

## 프로젝트 구조

```
/
├── index.html          # 메인 이력서 페이지
├── css/
│   └── style.css       # 커스텀 스타일
├── js/
│   └── main.js         # 인터랙션 스크립트
└── assets/
    └── images/         # 프로필 사진 등 이미지
```

---

## 이력서 섹션 구성

### 1. Hero / 인트로
- 이름, 직함 (예: Frontend Developer)
- 한 줄 자기소개
- 프로필 사진
- SNS/GitHub 링크 아이콘

### 2. About Me (자기소개)
- 간단한 소개 문구 (3~4문장)
- 개발 철학 또는 관심 분야

### 3. Skills (기술 스택)
- 프로그래밍 언어: JavaScript, TypeScript, Python
- 프론트엔드: React, Vue.js, HTML/CSS, TailwindCSS
- 백엔드: Node.js, Express
- 도구: Git, GitHub, VS Code, Figma
- 숙련도 프로그레스 바 또는 태그 형태로 표시

### 4. Experience (경력)
- 회사명, 직책, 근무 기간
- 주요 업무 및 성과 (bullet point)
- 예시:
  - ABC 테크 | 프론트엔드 개발자 | 2022.03 ~ 현재
  - XYZ 스타트업 | 주니어 개발자 | 2020.06 ~ 2022.02

### 5. Projects (프로젝트)
- 프로젝트 카드 형태 (썸네일 + 설명)
- 각 카드에 사용 기술 태그 표시
- GitHub 링크 / 라이브 데모 링크 버튼

### 6. Education (학력)
- 학교명, 전공, 졸업 연도

### 7. Contact (연락처)
- 이메일, 전화번호
- GitHub, LinkedIn 링크
- 간단한 문의 폼 (이름, 이메일, 메시지)

---

## 개발 단계

### Phase 1: 기본 구조 세팅
- [ ] 프로젝트 폴더 및 파일 생성
- [ ] TailwindCSS CDN 연결
- [ ] HTML 시맨틱 구조 작성 (header, main, section, footer)
- [ ] 기본 레이아웃 스타일링

### Phase 2: 각 섹션 UI 구현
- [ ] Hero 섹션 (프로필 + 소개)
- [ ] About Me 섹션
- [ ] Skills 섹션 (프로그레스 바 또는 태그)
- [ ] Experience 섹션 (타임라인 레이아웃)
- [ ] Projects 섹션 (카드 그리드)
- [ ] Education 섹션
- [ ] Contact 섹션 (폼 UI)

### Phase 3: 반응형 디자인
- [ ] 모바일 레이아웃 (< 640px)
- [ ] 태블릿 레이아웃 (640px ~ 1024px)
- [ ] 데스크탑 레이아웃 (> 1024px)

### Phase 4: 인터랙션 추가
- [ ] 네비게이션 바 (스크롤 시 고정)
- [ ] 부드러운 스크롤 이동 (smooth scroll)
- [ ] 스크롤 시 섹션 애니메이션 (fade-in)
- [ ] 모바일 햄버거 메뉴
- [ ] 다크모드 토글

### Phase 5: 마무리
- [ ] 메타 태그 및 SEO 최적화
- [ ] 파비콘 추가
- [ ] 크로스 브라우저 테스트
- [ ] GitHub Pages 배포
