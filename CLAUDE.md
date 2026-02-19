# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

HTML, CSS, JavaScript, TailwindCSS(CDN)를 활용한 반응형 개발자 웹 이력서 사이트. 빌드 도구 없이 정적 파일로 구성된 단일 페이지 프로젝트.

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

## 기술 스택

- **마크업**: HTML5 (시맨틱 태그 사용)
- **스타일링**: CSS3 + TailwindCSS (CDN 방식, 빌드 불필요)
- **인터랙션**: Vanilla JavaScript (프레임워크 없음)

## 아키텍처

단일 페이지(`index.html`) 이력서 사이트로, 7개 섹션(Hero, About, Skills, Experience, Projects, Education, Contact)으로 구성. TailwindCSS는 CDN으로 로드하며 커스텀 스타일은 `css/style.css`에, 인터랙션 로직은 `js/main.js`에 작성.

## 개발 서버

```bash
# 로컬 개발 서버 실행 (Live Server 또는 간단한 HTTP 서버)
npx serve .
# 또는
python3 -m http.server 8080
```

## 배포

GitHub Pages를 통해 정적 배포 (빌드 과정 없음).
