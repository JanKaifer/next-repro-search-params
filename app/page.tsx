import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <div>
      <Link href="/app?foo=bar">App</Link>
      <Link href="/pages?foo=bar">Pages</Link>
    </div>
  );
}
