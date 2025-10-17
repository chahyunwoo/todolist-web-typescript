# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React TypeScript web application - A To-Do List app with ChatGPT integration, weather display, and location services. Built with **Vite**, **React 19**, **Redux Toolkit**, and **styled-components**.

**Primary Purpose:** Testing ChatGPT API integration with additional todo list and weather features for context.

## Common Development Commands

```bash
# Development
npm run dev              # Start Vite dev server on localhost:3000 (빠른 HMR!)
npm run build            # TypeScript 체크 + 프로덕션 빌드
npm run preview          # 빌드된 앱을 로컬에서 미리보기
npm run deploy           # GitHub Pages에 배포

# 의존성 설치
npm install              # package.json 기반으로 설치
```

## Architecture Overview

### Component Structure
- **Atomic Design Pattern (Partial)**
  - `components/atoms/` - Small reusable UI components
  - `components/containers/` - Feature-specific components (ChatGPT, ToDo, Info, Welcome)
  - `components/layout/` - Layout wrappers (MainLayout, ComponentLayout, TwinklingStar)
  - `pages/` - Full page components (Login, Main)

### State Management
- **Redux Toolkit** for global state with slices:
  - `authSlice` - Authentication status (persisted to localStorage)
  - `nameSlice` - User name (persisted to localStorage)
  - `weatherSlice` - Current weather data
  - `locationSlice` - Current location data
- **Local state** for component-specific data (messages, input values, todo items)
- **localStorage** for persistence: auth status, user name, todo list

### Routing Pattern
- `Router.tsx` implements authentication guards
- Public route: `/login` (redirects to `/` if authenticated)
- Protected route: `/` (redirects to `/login` if not authenticated)
- Uses Redux auth selector to check authentication status
- **React Router v7** 사용

### API Integrations
Located in `src/api/`:
- `chatGPT.ts` - OpenAI API (text-davinci-003, temp: 0.9, max tokens: 300)
- `weatherAPI.ts` - OpenWeatherMap API (Korean translations, FontAwesome icons)
- `location.ts` - Kakao Maps API (coordinate to region code conversion)

## Key Technical Conventions

### File Naming & Structure
- **Components:** PascalCase files with companion `.styles.ts` files
  - Example: `ChatGPT.tsx` + `ChatGPT.styles.ts`
- **Every component has separate styled-components file**
- **Redux slices:** camelCase (e.g., `authSlice.ts`, `nameSlice.ts`)

### Styling Approach
- **Primary:** styled-components v6 (CSS-in-JS with TypeScript props)
- **Utility:** Tailwind CSS v3 via twin.macro
- **Responsive:** Media queries in styled-components (breakpoint: 1280px)
- **Never use inline styles** - always create styled components

### Type Safety
- **Strict TypeScript enabled** in tsconfig.json
- Interface definitions in `src/types/` directory
- Redux typed with `RootState` and `AppDispatch`
- **Vite 환경 변수 타입:** `src/vite-env.d.ts`에 정의됨
- Use explicit types for all API responses

### Animation Libraries
- **react-spring:** Message transitions in ChatGPT (physics-based animations)
- **framer-motion v11:** Available for advanced animations
- **CSS animations:** For simple effects (typing indicators, star twinkling)
- Prefer react-spring for component-level animations

## Component Hierarchy

```
App (background video + starfall)
└── Router
    ├── /login → Login page
    └── / → Main page (auth required)
        └── MainLayout
            ├── Welcome (greeting with username)
            └── SectionWrap
                ├── ToDo (left side - localStorage persisted)
                └── RightSection
                    ├── Info (weather via OpenWeather + location via Kakao)
                    └── ChatGPT (chat interface with OpenAI)
```

## Environment Variables Required

`.env.example` 파일을 `.env.local`로 복사 후 API 키 입력:

```bash
# .env.local
VITE_OPENAI_API_KEY=your_openai_key
VITE_WEATHER_API_KEY=your_openweather_key
VITE_LOCATION_API_KEY=your_kakao_maps_key
```

**중요:** Vite는 `VITE_` 접두사가 있는 환경 변수만 클라이언트에 노출합니다!

코드에서 사용:
```typescript
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
```

## Adding New Features

### New Component
1. Create in appropriate folder (atoms/containers/layout/pages)
2. Create companion `.styles.ts` file with styled-components
3. Add TypeScript interfaces in `src/types/` if shared
4. Import and use styled components (never inline styles)

### New Redux State
1. Create slice in `src/redux/slices/`:
   ```typescript
   import { createSlice, PayloadAction } from '@reduxjs/toolkit';
   // Define initial state and reducers
   ```
2. Add to `src/redux/store/store.ts`:
   ```typescript
   import newSlice from '../slices/newSlice';
   // Add to configureStore reducers
   ```
3. Use typed selectors: `useSelector((state: RootState) => state.newSlice)`

### New API Integration
1. Create async function in `src/api/`:
   ```typescript
   export const fetchData = async (params: Type): Promise<ReturnType> => {
     try {
       const response = await axios.get(url, config);
       return response.data;
     } catch (error) {
       // Return fallback or throw
     }
   };
   ```
2. Add API key to `.env.local` as `VITE_*`
3. Access via `import.meta.env.VITE_YOUR_KEY`
4. Add type definition to `src/vite-env.d.ts`:
   ```typescript
   interface ImportMetaEnv {
     readonly VITE_YOUR_KEY: string;
   }
   ```

### New Environment Variable
1. `.env.local`에 `VITE_YOUR_VAR=value` 추가
2. `src/vite-env.d.ts`에 타입 정의:
   ```typescript
   interface ImportMetaEnv {
     readonly VITE_YOUR_VAR: string;
   }
   ```
3. 코드에서 `import.meta.env.VITE_YOUR_VAR` 사용

## Important Code Patterns

### Data Flow
```
User Action → Component Handler → API Call (axios)
                                       ↓
                                Redux Action/Slice
                                       ↓
                                  Redux Store
                                       ↓
                              Selector in Component
                                       ↓
                            Re-render with styled-components
```

### Authentication Flow
1. User enters name in Login page
2. Dispatch `setName` action (Redux + localStorage)
3. Dispatch `login` action (auth = true + localStorage)
4. Router detects auth change → redirect to Main
5. On page reload: Redux initializes from localStorage

### localStorage Usage
- `isAuthenticated` - Auth state (boolean)
- `userName` - User name (string)
- `todoList` - Todo items (JSON array)

## Vite-Specific Notes

### Build Configuration
- `vite.config.ts` - Main Vite configuration
- Output directory: `build/` (GitHub Pages 호환성 위해)
- Dev server port: 3000 (CRA와 동일)
- Babel plugin for twin.macro support

### TypeScript Configuration
- `tsconfig.json` - App source code용 (strict mode, React 19)
- `tsconfig.node.json` - Vite config용
- Module resolution: "bundler" (Vite 최적화)
- Target: ES2020

### Asset Handling
- Static assets in `/public` directory
- Imported assets get hashed filenames
- Images/videos imported as ES modules

### HMR (Hot Module Replacement)
- Vite의 빠른 HMR 자동 활성화
- styled-components changes → instant update
- React Fast Refresh 지원

## Known Technical Debt

1. **API Security:** API keys exposed in client (should use backend proxy)
2. **Type Safety:** Some `any` types in locationSlice need strict typing
3. **Testing:** No test files created yet (Vitest 설정 필요)
4. **Error Handling:** Limited user-facing error messages for API failures

## Technology Stack

### Core (Updated to Latest)
- **React 19.0.0** - Latest with improved performance
- **React DOM 19.0.0**
- **TypeScript 5.7.2** - Latest with improved type inference
- **Vite 6.0.5** - Ultra-fast build tool

### State & Routing
- **Redux Toolkit 2.5.0** - Latest with better TypeScript support
- **React Redux 9.2.0** - React 19 compatible
- **React Router 7.1.3** - Latest routing with improved DX

### Styling
- **styled-components 6.1.14** - Latest with React 19 support
- **Tailwind CSS 3.4.17**
- **twin.macro 3.4.1** - Tailwind + styled-components bridge
- **Material Tailwind 2.1.10**

### APIs & Utilities
- **axios 1.7.9**
- **OpenAI 4.77.3** - Latest SDK
- **date-fns 4.1.0**

### Animations
- **framer-motion 11.15.0** - Latest
- **react-spring 9.7.4**

## Browser Support

- Modern browsers with ES2020 support
- Chrome, Firefox, Safari, Edge (latest versions)
- No IE11 support (Vite는 modern browsers만 타겟)

## Deployment

### GitHub Pages
```bash
npm run deploy
```
- Builds to `/build` directory
- Deploys via gh-pages package
- Vercel config in `vercel.json` (cache headers)

### Development Tips
1. **빠른 시작:** `npm run dev` 실행 후 즉시 코딩 시작
2. **타입 체크:** 저장 시 IDE가 자동으로 체크 (tsconfig strict mode)
3. **HMR:** 코드 변경 시 전체 새로고침 없이 즉시 반영
4. **환경 변수:** `.env.local` 변경 시 dev server 재시작 필요
