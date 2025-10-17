# React TypeScript Project - To Do List with Claude AI

리액트 타입스크립트를 사용하여 제작된 To Do List 웹 애플리케이션입니다.

## 소개

TODOLIST는 기본 기능이며, **Claude AI API**와의 대화 기능을 메인으로 제작한 페이지입니다.
단순히 채팅 기능만 넣기가 조금 비어보여서, 간단한 todolist와 날씨/위치 정보를 보여주는 기능을 추가했습니다.

## 주요 기능

- **Claude AI 채팅**: Anthropic의 Claude 3.5 Sonnet과 자연스러운 대화
  - 한국어와 영어 모두 자연스럽게 구사
  - 전체 대화 히스토리를 기억하는 컨텍스트 인식
  - 더 긴 응답 지원 (최대 2048 토큰)
- **할 일 관리**: localStorage를 활용한 영구 저장
- **날씨 정보**: OpenWeatherMap API를 통한 실시간 날씨
- **위치 정보**: Kakao Maps API로 현재 위치 표시
- **인증**: 간단한 이름 기반 로그인

## 기술 스택

- **React 19** - 최신 React 버전
- **TypeScript 5.7** - 타입 안정성
- **Vite 6** - 빠른 빌드 도구
- **Redux Toolkit** - 상태 관리
- **Tailwind CSS** - 스타일링
- **Anthropic SDK** - Claude AI 통합
- **React Spring** - 부드러운 애니메이션

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env.example` 파일을 복사하여 `.env` 파일을 생성합니다:

```bash
cp .env.example .env
```

그리고 다음 API 키들을 입력하세요:

```env
# Anthropic API Key (필수)
VITE_ANTHROPIC_API_KEY=your_anthropic_api_key_here

# OpenWeather API Key
VITE_WEATHER_API_KEY=your_openweather_key

# Kakao Maps API Key
VITE_LOCATION_API_KEY=your_kakao_maps_key
```

#### API 키 발급 방법

**Anthropic Claude API 키** (필수):
1. https://console.anthropic.com/ 에 접속
2. 계정 생성 (GitHub, Google 등으로 가능)
3. "Get API Keys" 메뉴로 이동
4. "Create Key" 버튼 클릭
5. 생성된 키를 복사하여 `.env` 파일에 붙여넣기

**참고**: Claude API는 유료 서비스이지만, 초기 크레딧을 제공합니다. 자세한 요금은 https://www.anthropic.com/pricing 참고.

**OpenWeather API 키** (선택):
- https://openweathermap.org/api 에서 무료로 발급

**Kakao Maps API 키** (선택):
- https://developers.kakao.com/ 에서 무료로 발급

### 3. 개발 서버 실행

```bash
npm run dev
```

개발 서버가 http://localhost:3000 에서 실행됩니다.

### 4. 빌드

```bash
npm run build
```

프로덕션 빌드가 `/build` 폴더에 생성됩니다.

## 배포

GitHub Pages로 배포:

```bash
npm run deploy
```

## 프로젝트 구조

```
src/
├── api/              # API 통합
│   ├── claude.ts     # Claude AI API
│   ├── weatherAPI.ts # 날씨 API
│   └── location.ts   # 위치 API
├── components/
│   ├── atoms/        # 작은 재사용 컴포넌트
│   ├── containers/   # 기능별 컴포넌트
│   │   ├── Claude.tsx
│   │   ├── ToDo.tsx
│   │   ├── Info.tsx
│   │   └── Welcome.tsx
│   └── layout/       # 레이아웃 컴포넌트
├── pages/            # 페이지 컴포넌트
├── redux/            # Redux 상태 관리
└── types/            # TypeScript 타입 정의
```

## 보안 주의사항

⚠️ **중요**: 현재 프로젝트는 학습/테스트 목적으로 클라이언트에서 직접 API를 호출합니다.
프로덕션 환경에서는 **백엔드 프록시 서버**를 통해 API 키를 안전하게 관리해야 합니다.

## 라이선스

MIT License

## 개발자

차현우 (CHAHYUNWOO)
