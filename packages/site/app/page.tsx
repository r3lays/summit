export default function Home() {
  return (
    <div className="flex min-h-screen w-screen overflow-auto font-[family-name:var(--font-geist-sans)]">
      <iframe className="absolute size-full" src="https://reservoir.tools/" />
      <iframe
        className="absolute right-10 top-40 h-[1000px]"
        src="http://localhost:3000/frame"
      />
    </div>
  );
}
