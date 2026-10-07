import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <article className="productCard">
      <Link href={`/product/${product.id}`} className="productVisual">
        <span>{product.tag}</span>
        <strong>HOCO</strong>
        <small>{product.category}</small>
      </Link>
      <div className="productInfo">
        <p className="productCategory">{product.category}</p>
        <Link href={`/product/${product.id}`}><h3>{product.name}</h3></Link>
        <div className="rating">★ {product.rating} <span>({product.reviews})</span></div>
        <div className="priceRow"><strong>₹{product.price.toLocaleString("en-IN")}</strong><del>₹{product.oldPrice.toLocaleString("en-IN")}</del><em>{product.discount}% OFF</em></div>
        <Link href={`/product/${product.id}`} className="outlineButton">View product</Link>
      </div>
    </article>
  );
}