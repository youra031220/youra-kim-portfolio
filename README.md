# 김유라 포트폴리오

비즈니스·금융·데이터·AI·서비스기획 직무 지원을 위한 한 페이지형 포트폴리오입니다. Next.js 16, React, TypeScript로 제작했습니다.

배포 사이트: https://youra031220.github.io/youra-kim-portfolio/

## 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 엽니다. 배포 전 검증은 `npm run build`로 실행합니다.

## 가장 먼저 수정할 파일

모든 콘텐츠와 링크는 [`data/portfolio.ts`](data/portfolio.ts)에 모여 있습니다.

- `profile`: 이메일, GitHub, LinkedIn, 이력서 경로
- `projects`: 프로젝트 설명, 기간, 역할, 성과, 태그, 관련 링크
- `reports`: 문서 카드와 PDF 경로
- `websites`: 웹사이트 카드, 썸네일, 배포 URL, GitHub URL

값이 비어 있는 링크는 사이트에서 비활성화된 `추가 예정` 상태로 표시됩니다. 실제 URL을 입력할 때만 버튼이 활성화됩니다.

## PDF 추가

1. PDF를 `public/documents`에 넣습니다. 파일명은 영문 소문자와 하이픈 사용을 권장합니다.
2. `data/portfolio.ts`에서 해당 문서의 `file`을 `/documents/파일명.pdf`로 수정합니다.
3. 프로젝트 카드에도 같은 문서를 연결하려면 해당 프로젝트의 `links` 항목에 같은 경로를 입력합니다.

예시:

```ts
{
  label: "마케팅 제안서",
  href: "/documents/kodex-marketing-proposal.pdf"
}
```

이력서는 `profile.resume`에 `/documents/youra-kim-resume.pdf`처럼 입력합니다.

## 프로젝트 추가

`data/portfolio.ts`의 `projects` 배열에 기존 항목과 같은 형태의 객체를 추가합니다. `period`, `role`, `achievement`, `problem`, `actions`, `result`, `tags`, `links`를 모두 작성하면 카드가 자동 생성됩니다.

## 웹사이트 추가

1. 썸네일 이미지를 `public/images`에 저장합니다.
2. `websites` 배열에 객체를 추가합니다.
3. 이미지 경로는 `/images/파일명.webp`처럼 작성합니다.

외부 이미지 URL은 사용하지 않습니다. 이미지에는 카드 제목 기반의 대체 텍스트가 자동 적용됩니다.

## 디자인 수정

색상, 간격, 반응형 기준은 `app/globals.css`에서 관리합니다.

### ROMANCE / PLAY 테마

두 테마는 `app/globals.css` 상단의 `[data-theme="romance"]`, `[data-theme="play"]` CSS 변수로 관리합니다. 레이아웃과 컴포넌트 크기는 공유하고 색상과 장식만 변경됩니다.

- 전환 UI: `components/ThemeToggle.tsx`
- 초기 테마 적용 스크립트: `app/layout.tsx`
- 기본 테마: `ROMANCE`
- 저장 키: `youra-portfolio-theme`

색상을 수정할 때는 개별 카드의 CSS를 변경하지 말고 `--background`, `--surface`, `--text`, `--primary`, `--accent`, `--secondary`, `--border` 등의 테마 토큰을 수정하세요.

## SEO

사이트 제목, 설명, Open Graph 정보는 `app/layout.tsx`에서 수정할 수 있습니다. 공유 이미지는 `public/images/og-cover.svg`입니다.

## 현재 자료 상태

초기 작업 폴더에는 PDF, 이력서, 실제 사이트 URL, GitHub URL, 프로필 연락처가 제공되지 않았습니다. 이에 따라 가짜 파일이나 링크를 만들지 않았고 모두 `추가 예정`으로 표시했습니다.
