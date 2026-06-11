import { useState } from "react";

const categories = [
  { id: 1, emoji: "🛒", label: "All" },
  { id: 2, emoji: "🥛", label: "Dairy & Eggs" },
  { id: 3, emoji: "🥦", label: "Vegetables" },
  { id: 4, emoji: "🍎", label: "Fruits" },
  { id: 5, emoji: "🍗", label: "Meat & Fish" },
  { id: 6, emoji: "🥤", label: "Beverages" },
  { id: 7, emoji: "🍿", label: "Snacks" },
  { id: 8, emoji: "🧴", label: "Personal Care" },
  { id: 9, emoji: "🧹", label: "Household" },
  { id: 10, emoji: "🍞", label: "Bakery" },
  { id: 11, emoji: "🍦", label: "Ice Cream" },
  { id: 12, emoji: "☕", label: "Tea & Coffee" },
  { id: 13, emoji: "🧃", label: "Juices" },
  { id: 14, emoji: "🍫", label: "Chocolates" },
];

const CategoryPills = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="bg-white border-b border-gray-100 sticky top-[65px] z-40">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="flex items-center gap-3 overflow-x-auto py-4 scrollbar-hide">
          {categories.map(({ id, emoji, label }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all shrink-0
                ${active === id
                  ? "bg-violet-700 text-white shadow-sm shadow-violet-200"
                  : "bg-gray-100 text-gray-600 hover:bg-violet-50 hover:text-violet-700"
                }`}
            >
              <span className="text-base">{emoji}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPills;