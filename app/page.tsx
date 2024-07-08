import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Welcome to Next.js!</h1>
      <Link href="/marker-image">Go to Image with Markers Page</Link>
    </div>
  );
}
