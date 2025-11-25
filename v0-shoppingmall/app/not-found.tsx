export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-4">404</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          페이지를 찾을 수 없습니다.
        </p>
        <a
          href="/"
          className="inline-block rounded-full bg-foreground px-5 py-3 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          홈으로 돌아가기
        </a>
      </div>
    </div>
  );
}

