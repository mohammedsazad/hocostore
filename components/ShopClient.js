 "use client";
import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { categories, products } from "@/lib/products";

export default function ShopClient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    let result = products.filter((p) =>
      (category === "All" || p.category === category) &&
      (p.name.toLowerCase().includes(query.toLowerCase()) ||
       p.category.toLowerCase().includes(query.toLowerCase()))
    );
    if (sort === "low") result = [...result].sort((a,b) => a.price-b.price);
    if (sort === "high") result = [...result].sort((a,b) => b.price-a.price);
    if (sort === "rating") result = [...result].sort((a,b) => b.rating-a.rating);
    return result;
  }, [query, category, sort]);

  return (
    <>
      <div className="shopTools">
        <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search products..." aria-label="Search products" />
        <select value={sort} onChange={(e)=>setSort(e.target.value)} aria-label="Sort products">
          <option value="featured">Sort: Featured</option>
          <option value="low">Price: Low to high</option>
          <option value="high">Price: High to low</option>
          <option value="rating">Top rated</option>
        </select>
      </div>
      <div className="categoryPills">
        {categories.map((c)=><button className={category===c ? "pill active":"pill"} key={c} onClick={()=>setCategory(c)}>{c}</button>)}
      </div>
      <p className="resultCount">{filtered.length} products</p>
      <div className="productGrid">{filtered.map((p)=><ProductCard key={p.id} product={p}/>)}</div>
      {filtered.length === 0 && <div className="empty"><h2>No products found</h2><p>Try another search or category.</p></div>}
    </>
  );
}