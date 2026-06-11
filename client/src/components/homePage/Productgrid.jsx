const products = [
  { id: 1, name: "Amul Taaza Milk 1L", price: 62, mrp: 68, unit: "1 litre", emoji: "🥛", category: "Dairy & Eggs" },
  { id: 2, name: "Farm Fresh Tomatoes", price: 35, mrp: 50, unit: "500g", emoji: "🍅", category: "Vegetables" },
  { id: 3, name: "Brown Bread", price: 45, mrp: 50, unit: "400g", emoji: "🍞", category: "Bakery" },
  { id: 4, name: "Free Range Eggs", price: 89, mrp: 99, unit: "6 eggs", emoji: "🥚", category: "Dairy & Eggs" },
  { id: 5, name: "Lays Classic Salted", price: 20, mrp: 20, unit: "26g", emoji: "🍿", category: "Snacks" },
  { id: 6, name: "Amul Butter 100g", price: 52, mrp: 58, unit: "100g", emoji: "🧈", category: "Dairy & Eggs" },
  { id: 7, name: "Banana Bunch", price: 49, mrp: 65, unit: "6 pcs", emoji: "🍌", category: "Fruits" },
  { id: 8, name: "Paneer 200g", price: 78, mrp: 85, unit: "200g", emoji: "🧀", category: "Dairy & Eggs" },
  { id: 9, name: "Onions", price: 28, mrp: 35, unit: "500g", emoji: "🧅", category: "Vegetables" },
  { id: 10, name: "Apple Royal Gala", price: 120, mrp: 140, unit: "4 pcs", emoji: "🍎", category: "Fruits" },
  { id: 11, name: "Maggi Noodles", price: 14, mrp: 14, unit: "70g", emoji: "🍜", category: "Snacks" },
  { id: 12, name: "Tata Tea Gold", price: 95, mrp: 110, unit: "250g", emoji: "☕", category: "Tea & Coffee" },
];

const ProductCard = ({ product }) => {
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-100 hover:border-violet-200 hover:shadow-md transition-all group">
      <div className="bg-gray-50 rounded-xl h-32 flex items-center justify-center mb-4 relative">
        <span className="text-5xl group-hover:scale-110 transition-transform duration-200">
          {product.emoji}
        </span>
        {discount > 0 && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
            {discount}% off
          </span>
        )}
      </div>

      <p className="text-xs text-gray-400 mb-0.5">{product.unit}</p>
      <h3 className="text-sm font-semibold text-gray-800 leading-tight mb-3 line-clamp-2">
        {product.name}
      </h3>

      <div className="flex items-center justify-between">
        <div>
          <span className="text-base font-black text-gray-900">₹{product.price}</span>
          {product.mrp > product.price && (
            <span className="text-xs text-gray-400 line-through ml-1">₹{product.mrp}</span>
          )}
        </div>
        <button className="bg-violet-700 hover:bg-violet-800 active:scale-95 text-white text-sm font-bold px-4 py-1.5 rounded-xl transition-all">
          Add
        </button>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  return (
    <section className="py-10 px-8 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-black text-gray-900">All products</h2>
          <button className="text-sm font-semibold text-violet-600 hover:text-violet-800 transition-colors">
            See all →
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;