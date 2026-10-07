import Link from "next/link";
export default function Account() {
  return <main className="page"><header className="header"><Link href="/" className="logo">HOCO</Link></header><section className="centerPage"><h1>Account</h1><p>Login and registration will be added after the core storefront is verified.</p><Link href="/" className="button">Back home</Link></section></main>;
}