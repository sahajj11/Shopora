import { useState } from "react";

const categories = [
  { id: 1, emoji: "🛒", label: "All" },
  { id: 2, emoji: "🥛", label: "Dairy & Eggs" },
  { id: 3, emoji: "🥦", label: "Vegetables" },
  { id: 4, emoji: "🍎", label: "Fruits" },

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
    <div className="sticky top-[65px] z-40 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="relative mx-auto max-w-screen-xl">
        
        {/* Left Scroll Edge Gradient (For Premium Mobile Affordance) */}
        <div className="pointer-events-none absolute left-4 sm:left-8 bottom-0 top-0 z-10 w-8 bg-gradient-to-r from-white to-transparent md:hidden" />
        
        {/* Horizontal Scroll Track */}
        <div className="flex items-center gap-2 overflow-x-auto py-3.5 no-scrollbar scroll-smooth">
          {categories.map(({ id, emoji, label }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => setActive(id)}
                type="button"
                className={`group flex items-center gap-2.5 rounded-xl px-4 py-2 text-xs font-medium tracking-wide transition-all duration-200 shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/20
                  ${
                    isActive
                      ? "bg-purple-600 text-white shadow-sm shadow-slate-900/10"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100/80 hover:text-slate-900"
                  }`}
              >
                {/* Micro-interaction: Slight bounce on emoji when group is hovered */}
                <span className="text-sm transition-transform duration-200 group-hover:scale-110 group-active:scale-95 select-none">
                  {emoji}
                </span>
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Scroll Edge Gradient (For Premium Mobile Affordance) */}
        <div className="pointer-events-none absolute right-4 sm:right-8 bottom-0 top-0 z-10 w-8 bg-gradient-to-l from-white to-transparent md:hidden" />
        
      </div>
    </div>
  );
};

export default CategoryPills;