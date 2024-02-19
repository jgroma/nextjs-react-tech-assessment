import Link from "next/link";

Link;
export default function FooterCard({ title, linksArr }) {
  return (
    <div className="footer-card">
      <p>{title}</p>
      <ul>
        {linksArr.map((link) => {
          return (
            <li key={link}>
              <Link href="/">{link}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
