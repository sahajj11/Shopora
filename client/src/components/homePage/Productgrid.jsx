import { useState } from "react";

const products = [
  { id: 1, name: "Amul Taaza Milk 1L", price: 62, mrp: 68, unit: "1 litre", emoji: "🥛", category: "Dairy & Eggs" },
  { id: 2, name: "Farm Fresh Tomatoes", price: 35, mrp: 50, unit: "500g", emoji: "🍅", category: "Vegetables" },
  { id: 3, name: "Brown Bread", price: 45, mrp: 50, unit: "400g", emoji: "🍞", category: "Bakery" },
  // { id: 4, name: "Free Range Eggs", price: 89, mrp: 99, unit: "6 eggs", emoji: "🥚", category: "Dairy & Eggs" },
  { id: 5, name: "Lays Classic Salted", price: 20, mrp: 20, unit: "26g", emoji: "🍿", category: "Snacks" },
  { id: 5, name: "Chocolate", price: 20, mrp: 20, unit: "26g", emoji: "🍫", category: "Snacks" },
  { id: 6, name: "Amul Butter 100g", price: 52, mrp: 58, unit: "100g", emoji: "🧈", category: "Dairy & Eggs" },
  { id: 7, name: "Banana Bunch", price: 49, mrp: 65, unit: "6 pcs", emoji: "🍌", category: "Fruits" },
  { id: 8, name: "Paneer 200g", price: 78, mrp: 85, unit: "200g", emoji: "🧀", category: "Dairy & Eggs" },
  { id: 9, name: "Onions", price: 28, mrp: 35, unit: "500g", emoji: "🧅", category: "Vegetables" },
  { id: 10, name: "Apple Royal Gala", price: 120, mrp: 140, unit: "4 pcs", emoji: "🍎", category: "Fruits" },
  { id: 11, name: "Maggi Noodles", price: 14, mrp: 14, unit: "70g", emoji: "🍜", category: "Snacks" },
  { id: 12, name: "Tata Tea Gold", price: 95, mrp: 110, unit: "250g", emoji: "☕", category: "Tea & Coffee" },
  
];

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-3.5 transition-all duration-200 hover:border-slate-200 hover:shadow-sm">
      <div>
        {/* Visual Container */}
        <div className="relative mb-3.5 flex h-36 items-center justify-center rounded-xl bg-slate-50/70 transition-colors group-hover:bg-slate-50">
          <span className="text-5xl transition-transform duration-300 ease-out select-none group-hover:scale-105">
            {product.emoji}
          </span>
          
          {/* Minimalist Discount Tag */}
          {discount > 0 && (
            <span className="absolute left-2 top-2 rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold tracking-wide text-emerald-700">
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Metas */}
        <span className="text-[11px] font-medium tracking-wide text-slate-400 uppercase">
          {product.unit}
        </span>
        <h3 className="mt-0.5 line-clamp-2 h-9 text-sm font-medium text-slate-800 leading-snug group-hover:text-slate-900">
          {product.name}
        </h3>
      </div>

      {/* Pricing & Control Action block */}
      <div className="mt-4 flex items-center justify-between gap-2">
        <div className="flex flex-col">
          <span className="text-base font-semibold text-slate-900">₹{product.price}</span>
          {product.mrp > product.price && (
            <span className="text-xs text-slate-400 line-through">₹{product.mrp}</span>
          )}
        </div>

        {/* Dynamic Quantity Controller */}
        <div className="h-9 w-24 flex items-center justify-center">
          {quantity === 0 ? (
            <button
              onClick={() => setQuantity(1)}
              className="w-full h-full rounded-lg border border-slate-200 bg-white text-xs font-semibold text-indigo-600 shadow-sm transition-all hover:bg-indigo-50/50 hover:border-indigo-200 active:scale-[0.98]"
            >
              Add
            </button>
          ) : (
            <div className="flex w-full h-full items-center justify-between rounded-lg bg-indigo-600 text-white shadow-sm shadow-indigo-100">
              <button
                onClick={() => setQuantity((q) => q - 1)}
                className="flex h-full w-8 items-center justify-center text-sm font-medium transition-colors hover:bg-indigo-700 rounded-l-lg"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="text-xs font-semibold select-none">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="flex h-full w-8 items-center justify-center text-sm font-medium transition-colors hover:bg-indigo-700 rounded-r-lg"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  return (
    <section className="bg-slate-50/50 px-4 py-12 sm:px-8">
      <div className="mx-auto max-w-screen-xl ">
        {/* Grid Header */}
        <div className="mb-8 flex items-baseline justify-between border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Trending Groceries
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Fresh items delivered straight to your door in minutes.
            </p>
          </div>
          <button className="group inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
            See all items
            <svg 
              className="h-3 w-3 transition-transform group-hover:translate-x-0.5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Product Layout Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;