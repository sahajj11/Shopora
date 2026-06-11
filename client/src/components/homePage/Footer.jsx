const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-1 mb-3">
              <span className="text-2xl font-black text-violet-700 tracking-tight">shopara</span>
              <span className="w-2 h-2 rounded-full bg-violet-500 mb-3" />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Groceries and essentials delivered in 10 minutes. Available in Vadodara, Surat, and Ahmedabad.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-xs text-gray-400 font-medium">All systems operational</span>
            </div>
          </div>

          {[
            { heading: "Company", links: ["About us", "Careers", "Blog", "Press"] },
            { heading: "Help", links: ["FAQ", "Contact us", "Return policy", "Track order"] },
            { heading: "Legal", links: ["Privacy policy", "Terms of service", "Cookie policy"] },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="text-gray-900 font-bold text-sm mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="/" className="text-sm text-gray-500 hover:text-violet-700 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">© 2025 Shopara Technologies Pvt. Ltd. All rights reserved.</p>
          <p className="text-xs text-gray-400">Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;