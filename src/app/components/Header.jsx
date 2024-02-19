import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>Brainwave.io</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Demos</Link>
          </li>
          <li>
            <Link href="/">Pages</Link>
          </li>
          <li>
            <Link href="/">Support</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
          <li>
            <Link href="/">Sign In</Link>
          </li>
        </ul>
        <button>Sign Up</button>
      </nav>
    </header>
  );
}
