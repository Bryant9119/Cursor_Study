# Instagram Clone - React 앱

인스타그램과 유사한 UI를 가진 리액트 애플리케이션입니다.

## 설치 및 실행

1. 의존성 설치:
```bash
npm install
```

2. 개발 서버 실행:
```bash
npm run dev
```

3. 빌드:
```bash
npm run build
```

## 이미지 파일 위치

이미지 파일들은 `public` 폴더에 위치해야 합니다:
- `public/img01.png` ~ `public/img10.jpg`
- `public/man.png`
- `public/woman.png`

현재 이미지 파일들이 루트 디렉토리에 있다면, `public` 폴더를 생성하고 모든 이미지 파일을 그곳으로 이동해주세요.

## 프로젝트 구조

```
06_인스타그램_프론트엔드/
├── public/          # 정적 파일 (이미지 등)
├── src/
│   ├── components/  # 리액트 컴포넌트
│   │   ├── Header.jsx
│   │   ├── Feed.jsx
│   │   └── FeedItem.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 기능

- 인스타그램 스타일의 피드 레이아웃
- 좋아요 기능
- 댓글 표시
- 반응형 디자인
- 10개의 샘플 피드 게시물


