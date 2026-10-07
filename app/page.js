import Link from "next/link";

const categories = ["Mobile", "Laptop", "Audio", "Power", "Cables", "Desk Setup"];

export default function Home() {
  return (
    <main>
      <div className="topbar">FREE SHIPPING ABOVE ₹999 • EASY RETURNS</div>

      <header className="header">
        <Link href="/" className="logo">HOCO</Link>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/?category=Mobile">Mobile</Link>
          <Link href="/?category=Laptop">Laptop</Link>
          <Link href="/?category=Audio">Audio</Link>
          <Link href="/?category=Power">Power</Link>
        </nav>
        <div className="actions">
          <Link href="/account">Login</Link>
          <Link href="/cart">Bag (0)</Link>
        </div>
      </header>

      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">HOCO ELECTRONICS</p>
          <h1>Power your <span>everyday.</span></h1>
          <p className="lead">
            Mobile accessories, laptop essentials, charging, audio and smart
            everyday tech.
          </p>
          <Link href="/shop" className="button">Shop now →</Link>
        </div>

        <div className="heroArt">
          <div className="glow" />
          <div className="device">HOCO</div>
          <div className="miniDevice">USB-C</div>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">EXPLORE</p>
        <h2>Shop by category</h2>
        <div className="categoryGrid">
          {categories.map((category, index) => (
            <Link
              href={"/shop?category=" + encodeURIComponent(category)}
              className="category"
              key={category}
            >
              <small>0{index + 1}</small>
              <strong>{category}</strong>
              <span>Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">NEXT</p>
        <h2>HOCO Store foundation is ready.</h2>
        <p className="muted">
          This clean version is intentionally simple first. We will add the
          real store features one step at a time and test each step before
          moving forward.
        </p>
      </section>

      <footer className="footer">
        <div><b>HOCO</b><p>Smart accessories for everyday tech.</p></div>
        <div><b>Shop</b><Link href="/shop">All products</Link><Link href="/cart">Cart</Link></div>
        <div><b>Account</b><Link href="/account">Login</Link><Link href="/orders">Orders</Link></div>
      </footer>
    </main>
  );
}