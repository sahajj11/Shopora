import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import AuthModal from "./AuthModal";
import {
  selectIsAuthenticated,
  selectUser,
} from "../../features/auth/authSelectors";
import { logout } from "../../features/auth/authSlice";

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
    setProfileOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-screen-xl items-center gap-9  py-4">
          {/* Logo */}
          <a href="/" className="shrink-0">
            <h1 className="text-3xl font-bold tracking-tight text-purple-600">
              Shopora
            </h1>
          </a>

          {/* Location */}
          <button
            type="button"
            className="hidden md:flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2 hover:bg-slate-50 transition-colors"
          >
            <svg
              className="h-5 w-5 text-slate-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <div className="flex flex-col items-start">
              <span className="text-[11px] text-slate-500">
                Deliver to
              </span>

              <span className="text-sm font-semibold text-slate-900">
                Vadodara, Gujarat
              </span>
            </div>
          </button>

          {/* Search */}
          <div className="flex-1 max-w-2xl">
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-all focus-within:border-slate-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-slate-100">
              <svg
                className="h-5 w-5 shrink-0 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>

              <input
                type="text"
                placeholder="Search for milk, fruits, vegetables..."
                className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 shrink-0">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setProfileOpen((prev) => !prev)}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 px-2 py-1.5 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                    {user?.name?.charAt(0)?.toUpperCase() || "U"}
                  </div>

                  <span className="hidden sm:block text-sm font-medium text-slate-700">
                    {user?.name?.split(" ")[0] || "Account"}
                  </span>

                  <svg
                    className="hidden sm:block h-4 w-4 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {profileOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setProfileOpen(false)}
                    />

                    <div className="absolute right-0 z-20 mt-2 w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                      <div className="border-b border-slate-100 px-3 py-3">
                        <p className="text-xs text-slate-500">
                          Signed in as
                        </p>

                        <p className="truncate text-sm font-medium text-slate-900">
                          {user?.email}
                        </p>
                      </div>

                      <div className="mt-1 flex flex-col">
                        <button className="rounded-xl px-3 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50">
                          My Orders
                        </button>

                        <button className="rounded-xl px-3 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50">
                          Saved Addresses
                        </button>

                        <button className="rounded-xl px-3 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50">
                          Wishlist
                        </button>

                        <button className="rounded-xl px-3 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50">
                          Account Settings
                        </button>

                        <button
                          onClick={handleLogout}
                          className="rounded-xl px-3 py-2.5 text-left text-sm font-medium text-red-600 hover:bg-red-50"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <button
                onClick={() => setModalOpen(true)}
                className="hidden sm:flex items-center rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Sign In
              </button>
            )}

            {/* Cart */}
            <button
              type="button"
              className="flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>

              <span>Cart (0)</span>
            </button>
          </div>
        </div>
      </nav>

      <AuthModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default Navbar;