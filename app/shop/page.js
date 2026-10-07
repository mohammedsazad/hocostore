import Link from "next/link";
import ShopClient from "@/components/ShopClient";

export default function ShopPage() {
  return <main className="page">
    <div className="topbar">FREE SHIPPING ABOVE ₹999 • EASY RETURNS</div>
    <header className="header"><Link href="/" className="logo">HOCO</Link><nav><Link href="/">Home</Link><Link href="/shop">Shop</Link><Link href="/shop?category=Mobile">Mobile</Link><Link href="/shop?category=Laptop">Laptop</Link><Link href="/shop?category=Audio">Audio</Link><Link href="/shop?category=Power">Power</Link></nav><div className="actions"><Link href="/account">Login</Link><Link href="/cart">Bag (0)</Link></div></header>
    <section className="section shopHeader"><p className="eyebrow">HOCO STORE</p><h1>Shop all products</h1><p className="muted">Browse mobile, laptop, audio, power, cables and desk essentials.</p><ShopClient /></section>
  </main>;
}