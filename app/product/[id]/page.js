import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductPage({ params }) {
  const product = getProduct(params.id);
  if (!product) notFound();

  return <main className="page">
    <div className="topbar">FREE SHIPPING ABOVE ₹999 • EASY RETURNS</div>
    <header className="header"><Link href="/" className="logo">HOCO</Link><nav><Link href="/">Home</Link><Link href="/shop">Shop</Link></nav><div className="actions"><Link href="/account">Login</Link><Link href="/cart">Bag (0)</Link></div></header>
    <section className="productDetail">
      <div className="detailVisual"><span>{product.tag}</span><strong>HOCO</strong><small>{product.category}</small></div>
      <div className="detailInfo"><Link href="/shop" className="back">← Back to shop</Link><p className="eyebrow">{product.category}</p><h1>{product.name}</h1><div className="rating big">★ {product.rating} <span>({product.reviews} reviews)</span></div><p className="detailDescription">{product.description}</p><div className="detailPrice"><strong>₹{product.price.toLocaleString("en-IN")}</strong><del>₹{product.oldPrice.toLocaleString("en-IN")}</del><em>{product.discount}% OFF</em></div><button className="button large">Add to bag</button><p className="shippingNote">✓ Secure checkout &nbsp; ✓ Easy returns &nbsp; ✓ Fast delivery</p></div>
    </section>
  </main>;
}