import Link from "next/link";

const products = [
  { id: 1, name: "HOCO USB-C Fast Charger", price: "₹999" },
  { id: 2, name: "HOCO Wireless Earbuds", price: "₹1,499" },
  { id: 3, name: "HOCO Power Bank", price: "₹1,299" },
  { id: 4, name: "HOCO Braided USB-C Cable", price: "₹499" }
];

export default function Shop() {
  return (
    <main className="page">
      <header className="header">
        <Link href="/" className="logo">HOCO</Link>
        <nav><Link href="/">Home</Link><Link href="/shop">Shop</Link></nav>
        <div className="actions"><Link href="/account">Login</Link><Link href="/cart">Bag (0)</Link></div>
      </header>
      <section className="section">
        <p className="eyebrow">HOCO STORE</p>
        <h1>All products</h1>
        <div className="productGrid">
          {products.map((p) => (
            <article className="productCard" key={p.id}>
              <div className="productImage">HOCO</div>
              <h3>{p.name}</h3>
              <p>{p.price}</p>
              <button className="button">Add to bag</button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}