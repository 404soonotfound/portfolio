# Portfolio

Vue 3 + TypeScript + Vite로 만든 개인 포트폴리오 웹사이트입니다.
홈 화면에서 소개·프로젝트·스킬·경력·연락처를 한 번에 보여주고, 각 프로젝트의 상세 페이지로 이동할 수 있습니다.

## 기술 스택

| 구분       | 사용 기술                                |
| ---------- | ---------------------------------------- |
| 프레임워크 | Vue 3 (`<script setup>` Composition API) |
| 언어       | TypeScript                               |
| 빌드       | Vite                                     |
| 라우팅     | Vue Router (History 모드)                |
| 스타일     | CSS 변수 토큰 + SCSS 유틸리티 클래스     |

## 요구 사항

- Node.js `^22.18.0` 또는 `>=24.12.0`

## 시작하기

```sh
npm install
```

### 개발 서버 실행

```sh
npm run dev
```

기본 포트는 `8080`입니다. ([vite.config.ts](vite.config.ts))

### 타입 체크 + 프로덕션 빌드

```sh
npm run build
```

`vue-tsc` 타입 체크와 `vite build`를 병렬로 실행합니다.

### 빌드 결과 미리보기

```sh
npm run preview
```

### 타입 체크만 실행

```sh
npm run type-check
```

## 프로젝트 구조

```text
src/
├── assets/          # 아이콘(SVG), 프로젝트 이미지(webp)
├── components/
│   ├── common/      # AppHeader, AppFooter, Navigation, BaseButton, Image, Tag
│   ├── home/        # Hero, Project, Skill, Experience, About, Contact 섹션
│   └── project/     # Card (프로젝트 카드)
├── composables/     # useMediaQuery, useIsMobile
├── data/            # projects.ts, experiences.ts (콘텐츠 데이터)
├── router/          # 라우트 정의
├── styles/          # reset.css, tokens.css, global.css, utils.scss
├── types/           # projects.ts, experiences.ts 타입 정의
└── views/           # HomeView, DetailView, NotFoundView
```

### 라우트

| 경로               | 이름        | 화면           |
| ------------------ | ----------- | -------------- |
| `/`                | `home`      | 홈 (전체 섹션) |
| `/detail/:slug`    | `detail`    | 프로젝트 상세  |
| `/:pathMatch(.*)*` | `not-found` | 404            |

모든 뷰는 동적 `import()`로 코드 스플리팅됩니다. ([src/router/index.ts](src/router/index.ts))

### 경로 별칭

`@`는 `src/`를 가리킵니다.

```ts
import HeroSection from "@/components/home/Hero.vue";
```

## 콘텐츠 수정하기

화면 문구와 데이터는 컴포넌트가 아니라 [src/data/](src/data/)에 분리되어 있습니다.

- **프로젝트 추가·수정** — [src/data/projects.ts](src/data/projects.ts)
  `Project` 타입([src/types/projects.ts](src/types/projects.ts))을 따릅니다.
  `id`가 상세 페이지 URL의 `:slug`가 되고, `sections`는 일반 목록(`list`)과 강조 문구(`callout`) 두 가지 형태를 지원합니다.
  이미지는 `src/assets/images/projects/`에 두고 `import`해서 참조합니다.
- **경력 추가·수정** — [src/data/experiences.ts](src/data/experiences.ts)

## 스타일 규칙

- **디자인 토큰** — [src/styles/tokens.css](src/styles/tokens.css)의 CSS 변수(색상, 폰트, 간격, 반경)를 사용합니다. 변수명은 Figma Dev Mode의 이름을 그대로 따릅니다. 하드코딩된 값 대신 `var(--Text-Primary)`, `var(--spacing-24)` 형태로 씁니다.
- **유틸리티 클래스** — [src/styles/utils.scss](src/styles/utils.scss)에서 레이아웃(`flex`, `grid`), 테두리, 간격(`gap-*`, `mt-*`, `px-*` 등 0~20 스케일) 클래스를 생성합니다. 간격 스케일은 4px 단위입니다.
- 컴포넌트 고유 스타일은 `<style scoped lang="scss">`에 작성합니다.

## 반응형

`useMediaQuery` / `useIsMobile` 컴포저블로 처리하며, 모바일 기준점은 `max-width: 768px`입니다. ([src/composables/](src/composables/))

## 권장 개발 환경

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 확장 (Vetur는 비활성화)

TypeScript는 `.vue` 파일의 타입 정보를 직접 처리하지 못하므로 `tsc` 대신 `vue-tsc`로 타입 체크합니다.
