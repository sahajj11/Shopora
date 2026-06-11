const perks = [
  {
    emoji: "⚡",
    title: "10-minute delivery",
    desc: "Fastest delivery in your city, guaranteed.",
    bg: "bg-violet-50",
    border: "border-violet-100",
    iconBg: "bg-violet-100",
  },
  {
    emoji: "🌱",
    title: "100% fresh produce",
    desc: "Sourced daily from local farms and suppliers.",
    bg: "bg-green-50",
    border: "border-green-100",
    iconBg: "bg-green-100",
  },
  {
    emoji: "💸",
    title: "Best price promise",
    desc: "We match or beat any local store price.",
    bg: "bg-blue-50",
    border: "border-blue-100",
    iconBg: "bg-blue-100",
  },
  {
    emoji: "🔄",
    title: "Easy returns",
    desc: "Not happy? Get an instant refund, no questions.",
    bg: "bg-orange-50",
    border: "border-orange-100",
    iconBg: "bg-orange-100",
  },
];

const WhyShopara = () => {
  return (
    <section className="py-14 px-8 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-gray-900 mb-2">Why Shopara?</h2>
          <p className="text-gray-500 text-base">Everything you need, delivered before you know it.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {perks.map(({ emoji, title, desc, bg, border, iconBg }) => (
            <div
              key={title}
              className={`${bg} ${border} border rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow`}
            >
              <div className={`${iconBg} w-12 h-12 rounded-xl flex items-center justify-center text-2xl`}>
                {emoji}
              </div>
              <div>
                <h3 className="text-gray-900 font-black text-base mb-1">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyShopara;