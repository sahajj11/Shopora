import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";


import AuthModal from "./AuthModal";
import { selectIsAuthenticated, selectUser } from "../../features/auth/authSelectors";
import { logout } from "../../features/auth/authSlice";


const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);

  const handleLogout = () => dispatch(logoutt());

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-screen-xl mx-auto px-8 flex items-center gap-6 py-4">

          {/* Logo */}
          <a href="/" className="flex items-center gap-1 shrink-0">
            <span className="text-2xl font-black text-violet-700 tracking-tight">shopara</span>
            <span className="w-2 h-2 rounded-full bg-violet-500 mb-3 animate-pulse" />
          </a>

          {/* Location */}
          <button className="hidden sm:flex items-center gap-1.5 text-sm text-gray-600 hover:text-violet-700 transition-colors ml-2 shrink-0">
            <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-semibold text-gray-800">Vadodara, GJ</span>
            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Search */}
          <div className="flex-1">
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 hover:border-violet-300 focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-100 transition-all">
              <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder='Search "milk, eggs, bread..."'
                className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none w-full"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 shrink-0">
            {isAuthenticated ? (
              <>
                <span className="hidden sm:block text-sm font-semibold text-gray-700">
                  👋 {user?.name?.split(" ")[0] || "Hey"}
                </span>
                <button
                  onClick={handleLogout}
                  className="hidden sm:flex text-sm font-medium text-gray-500 hover:text-red-500 px-4 py-2.5 rounded-xl hover:bg-red-50 transition-all"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => setModalOpen(true)}
                className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-violet-700 px-4 py-2.5 rounded-xl hover:bg-violet-50 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Login
              </button>
            )}

            <button className="flex items-center gap-2 bg-violet-700 hover:bg-violet-800 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Cart
            </button>
          </div>
        </div>
      </nav>

      <AuthModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Navbar;