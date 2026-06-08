# 개발일지 — RoadmapAI 회사 사이트

> AI 사업 로드맵 코칭 스타트업 공식 웹사이트

---

## 2026-06-08

### 프로젝트 초기 셋업 · 전체 페이지 구성 완료

---

### 1. 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 프로젝트명 | RoadmapAI 회사 사이트 |
| 목적 | AI 사업 로드맵 코칭 스타트업 공식 홍보 사이트 |
| 회사 설립일 | 2026년 6월 2일 |
| 레포지토리 | https://github.com/chikery/rest02 |

---

### 2. 기술 스택

| 구분 | 기술 |
|------|------|
| 프레임워크 | React 19 + Vite 8 |
| 언어 | TypeScript |
| 스타일 | Tailwind CSS v4 (`@tailwindcss/vite` 플러그인) |
| 라우팅 | react-router-dom (설치 완료, 추후 다중 페이지 확장 대비) |
| 빌드 도구 | Vite |

---

### 3. 컬러 시스템

Tailwind CSS v4 `@theme` 블록으로 커스텀 컬러 정의:

| 변수 | 색상 코드 | 용도 |
|------|-----------|------|
| `dark-blue` | `#0B1F3A` | 헤더·히어로·푸터 배경 |
| `navy` | `#0F172A` | 푸터 배경 |
| `royal-blue` | `#1D4ED8` | 주 브랜드 컬러·버튼·링크 |
| `royal-light` | `#3B82F6` | 버튼 hover, 배지 텍스트 |
| `dark-green` | `#14532D` | 포인트 컬러 (긍정적 요소) |
| `dark-red` | `#7F1D1D` | 포인트 컬러 (CTA·강조) |

---

### 4. 개발 내역

#### [06a079b] 회사 사이트 초기 셋업 ← **오늘**

**프로젝트 초기화**
- `npm create vite@latest` — React + TypeScript 템플릿
- Tailwind CSS v4 + `@tailwindcss/vite` 플러그인 설치
- `react-router-dom` 설치 (다중 페이지 확장 대비)

**컬러 시스템 구성** (`src/index.css`)
- `@theme` 블록에 브랜드 컬러 6종 등록
- 다크블루·로열블루 메인 / 다크그린·다크레드 포인트

**컴포넌트 구성** (`src/components/`)

| 파일 | 내용 |
|------|------|
| `Navbar.tsx` | 고정 상단 네브바, 모바일 햄버거 메뉴 |
| `Hero.tsx` | 풀스크린 히어로 섹션 (다크 네이비 배경, CTA 2개) |
| `Services.tsx` | 핵심 서비스 4종 카드 그리드 |
| `HowItWorks.tsx` | 7단계 창업 로드맵 그리드 (다크 배경) |
| `About.tsx` | 회사 소개 + 설립일 + 미션 카드 |
| `Contact.tsx` | 무료 상담 신청 폼 (name·email·단계·문의) |
| `Footer.tsx` | 다크 네이비 푸터, 링크, 저작권 |

**페이지 흐름**
```
Navbar (fixed)
  └ Hero          — 아이디어에서 사업계획서까지, AI가 함께합니다
  └ Services      — 4가지 핵심 서비스 소개
  └ HowItWorks    — 7단계 로드맵 설명
  └ About         — 회사 소개 (설립일: 2026.06.02)
  └ Contact       — 무료 상담 신청 폼
  └ Footer
```

---

### 5. 빌드 결과

```
dist/index.html                   0.46 kB │ gzip:  0.29 kB
dist/assets/index.css            26.07 kB │ gzip:  5.21 kB
dist/assets/index.js            208.70 kB │ gzip: 64.90 kB

✓ built in 164ms
```

---

### 6. 실행 방법

```bash
npm install
npm run dev    # http://localhost:5173
npm run build  # 프로덕션 빌드
```

---

### 7. 다음 개발 예정

- [ ] 회사명·로고 확정 후 브랜딩 반영
- [ ] 대표 서비스(AI 창업 코치) 상세 페이지
- [ ] 팀 소개 섹션 추가
- [ ] 실제 상담 신청 폼 백엔드 연동 (이메일 발송)
- [ ] SEO 메타태그 설정 (`react-helmet`)
- [ ] 모바일 반응형 세부 조정
- [ ] Vercel 프로덕션 배포 설정
