import Link from "next/link";

export default function HomePage() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Hola Mundo
        <Link href={'/about'}>About Page</Link>
      </main>
  );
}
