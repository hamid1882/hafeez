import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="h-full flex flex-col gap-4 justify-center items-center">
        <h1 className="text-3xl">Hafeez Ur Rehman</h1>
        <p>Full Stack Javascript Developer.</p>
      </main>
    </div>
  );
}
