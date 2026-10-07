export const products = [
  { id:"hoco-x1", name:"HOCO X1 USB-C Fast Charger", category:"Power", price:999, oldPrice:1299, discount:23, rating:4.7, reviews:128, tag:"Bestseller", description:"Compact fast charger for phones, tablets and everyday devices." },
  { id:"hoco-w35", name:"HOCO W35 Wireless Headphones", category:"Audio", price:1499, oldPrice:1999, discount:25, rating:4.6, reviews:94, tag:"Popular", description:"Comfortable wireless headphones with clear everyday audio." },
  { id:"hoco-j86", name:"HOCO J86 Power Bank 10000mAh", category:"Power", price:1299, oldPrice:1699, discount:24, rating:4.5, reviews:76, tag:"New", description:"Portable 10000mAh power bank for reliable daily charging." },
  { id:"hoco-x50", name:"HOCO X50 Braided USB-C Cable", category:"Cables", price:499, oldPrice:699, discount:29, rating:4.8, reviews:211, tag:"Bestseller", description:"Durable braided USB-C cable for charging and data transfer." },
  { id:"hoco-e56", name:"HOCO E56 True Wireless Earbuds", category:"Audio", price:1799, oldPrice:2299, discount:22, rating:4.4, reviews:63, tag:"New", description:"Compact true wireless earbuds for music, calls and everyday use." },
  { id:"hoco-m107", name:"HOCO M107 Laptop Stand", category:"Laptop", price:1199, oldPrice:1599, discount:25, rating:4.6, reviews:52, tag:"Desk Setup", description:"Adjustable laptop stand designed for a cleaner desk setup." },
  { id:"hoco-mobcase", name:"HOCO Premium Phone Case", category:"Mobile", price:699, oldPrice:899, discount:22, rating:4.5, reviews:87, tag:"Popular", description:"Slim protective case with a clean premium finish." },
  { id:"hoco-desk", name:"HOCO Desk Cable Organizer", category:"Desk Setup", price:399, oldPrice:499, discount:20, rating:4.3, reviews:41, tag:"Value", description:"Simple cable organizer to keep your workspace tidy." }
];

export const categories = ["All","Mobile","Laptop","Audio","Power","Cables","Desk Setup"];

export function getProduct(id) {
  return products.find((product) => product.id === id);
}