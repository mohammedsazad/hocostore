import Link from "next/link";
export default function Orders() {
  return <main className="page"><header className="header"><Link href="/" className="logo">HOCO</Link></header><section className="centerPage"><h1>Orders</h1><p>Orders will appear here after checkout is connected.</p><Link href="/" className="button">Back home</Link></section></main>;
}