import { useState, useEffect } from "react";

const Hero = () => {
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);

  // Live delivery timer counts down and resets — signature element
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => {
        if (s === 0) {
          setMinutes((m) => (m === 0 ? 10 : m - 1));
          return 59;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section className="bg-white pt-8 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* Left: copy */}
          <div className="flex-1 text-center lg:text-left">

            {/* Live delivery badge — signature element */}
            <div className="inline-flex items-center gap-2.5 bg-violet-50 border border-violet-200 rounded-full px-4 py-2 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-500 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-violet-600" />
              </span>
              <span className="text-sm font-semibold text-violet-700">
                Next delivery in{" "}
                <span className="font-black tabular-nums">
                  {pad(minutes)}:{pad(seconds)}
                </span>
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-4">
              Groceries in
              <br />
              <span className="text-violet-700">10 minutes.</span>
              <br />
              <span className="text-gray-400 font-light text-4xl lg:text-5xl">No kidding.</span>
            </h1>

            <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto lg:mx-0">
              Fresh produce, snacks, dairy and more — delivered before your coffee gets cold.
            </p>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button className="bg-violet-700 hover:bg-violet-800 active:scale-95 text-white font-bold px-8 py-4 rounded-2xl text-base transition-all">
                Order now →
              </button>
              <button className="border-2 border-gray-200 hover:border-violet-300 text-gray-700 font-semibold px-8 py-4 rounded-2xl text-base transition-all hover:bg-violet-50">
                Browse categories
              </button>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start text-sm text-gray-500">
              {[
                { icon: "⚡", label: "10-min delivery" },
                { icon: "🛒", label: "5000+ products" },
                { icon: "💸", label: "Free delivery over ₹199" },
              ].map(({ icon, label }) => (
                <span key={label} className="flex items-center gap-1.5 font-medium">
                  {icon} {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: visual */}
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div className="relative bg-violet-50 rounded-3xl p-6 overflow-hidden">

              {/* Decorative blobs */}
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-violet-200 rounded-full opacity-40" />
              <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-violet-300 rounded-full opacity-30" />

              {/* Floating order card */}
              <div className="relative z-10 bg-white rounded-2xl p-4 shadow-sm mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-gray-800">Your order</span>
                  <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">On the way</span>
                </div>
                {[
                  { name: "Amul Full Cream Milk 1L", qty: "2×", price: "₹120" },
                  { name: "Brown Eggs (6 pack)", qty: "1×", price: "₹89" },
                  { name: "Britannia Bread", qty: "1×", price: "₹45" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0">
                    <span className="text-xs text-gray-600">{item.qty} {item.name}</span>
                    <span className="text-xs font-semibold text-gray-800">{item.price}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">
                  <span className="text-sm font-black text-gray-900">Total</span>
                  <span className="text-sm font-black text-violet-700">₹254</span>
                </div>
              </div>

              {/* Delivery ETA card */}
              <div className="relative z-10 bg-violet-700 rounded-2xl p-4 text-white flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl shrink-0">
                  🛵
                </div>
                <div>
                  <p className="text-xs text-violet-200 font-medium">Rider is nearby</p>
                  <p className="font-black text-lg leading-tight">
                    Arriving in {pad(minutes)}:{pad(seconds)}
                  </p>
                  <p className="text-xs text-violet-300 mt-0.5">Ravi is 0.8 km away</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;