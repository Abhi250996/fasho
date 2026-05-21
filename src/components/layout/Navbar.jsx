import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { useCart } from "../../context/CartContext";
import { navItems } from "../../constants/homeData";

import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import SearchOverlay from "../search/SearchOverlay";

function Navbar() {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const navigate = useNavigate();
  const location = useLocation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50"
      >
        {/* GLASS BACKDROP */}
        <div className="absolute inset-0 border-b border-white/20 bg-[#ecead7]/70 backdrop-blur-2xl" />

        <nav className="relative mx-auto flex w-full max-w-[1760px] items-center justify-between px-5 py-4 sm:px-8 lg:px-14 lg:py-6">
          {/* LOGO */}
          <Link
            to="/"
            className="relative z-10 text-3xl font-black tracking-tight text-stone-950 transition duration-300 hover:text-[#405821] sm:text-4xl"
            aria-label="Fasho home"
          >
            FASHO.
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-10 lg:flex xl:gap-14">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`group relative text-[11px] font-extrabold uppercase tracking-[0.26em] transition duration-300 ${
                    isActive
                      ? "text-[#405821]"
                      : "text-stone-950 hover:text-[#53682d]"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute -bottom-2 left-0 h-px bg-[#405821] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* ACTIONS */}
          <div className="relative z-10 flex items-center gap-2 text-stone-950 sm:gap-3">
            {/* SEARCH */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="grid size-10 place-items-center rounded-full border border-transparent transition duration-300 hover:border-white/30 hover:bg-white/40 hover:shadow-lg hover:shadow-[#526632]/10"
              aria-label="Search"
            >
              <Search className="size-5 stroke-[1.8]" />
            </button>

            {/* ACCOUNT */}
            <button
              type="button"
              onClick={() => navigate("/account")}
              className="grid size-10 place-items-center rounded-full border border-transparent transition duration-300 hover:border-white/30 hover:bg-white/40 hover:shadow-lg hover:shadow-[#526632]/10"
              aria-label="Account"
            >
              <User className="size-5 stroke-[1.8]" />
            </button>

            {/* CART */}
            <button
              type="button"
              onClick={() => navigate("/cart")}
              className="relative grid size-10 place-items-center rounded-full border border-transparent transition duration-300 hover:border-white/30 hover:bg-white/40 hover:shadow-lg hover:shadow-[#526632]/10"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="size-5 stroke-[1.8]" />

              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  key={totalItems}
                  className="absolute -right-1 -top-1 grid min-h-[20px] min-w-[20px] place-items-center rounded-full bg-[#405821] px-1 text-[10px] font-bold text-white shadow-lg shadow-[#405821]/30"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="grid size-10 place-items-center rounded-full border border-transparent transition duration-300 hover:border-white/30 hover:bg-white/40 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-6 stroke-[1.8]" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm"
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed right-0 top-0 z-[70] flex h-screen w-full max-w-[320px] flex-col border-l border-white/20 bg-[#ecead7]/95 shadow-2xl backdrop-blur-2xl"
            >
              {/* HEADER */}
              <div className="flex items-center justify-between border-b border-black/5 px-6 py-6">
                <h2 className="text-xl font-black tracking-tight text-stone-950">
                  FASHO.
                </h2>

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="grid size-10 place-items-center rounded-full transition duration-300 hover:bg-white/50"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* LINKS */}
              <div className="flex flex-1 flex-col px-6 py-8">
                <div className="space-y-6">
                  {navItems.map((item) => {
                    const isActive = location.pathname === item.path;

                    return (
                      <Link
                        key={item.label}
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block text-sm font-extrabold uppercase tracking-[0.24em] transition duration-300 ${
                          isActive
                            ? "text-[#405821]"
                            : "text-stone-950 hover:text-[#53682d]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>

                {/* FOOTER */}
                <div className="mt-auto rounded-[1.6rem] border border-white/40 bg-white/40 p-5 shadow-xl shadow-[#39461e]/5 backdrop-blur-md">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.26em] text-[#6d7d3e]">
                    Luxury Fashion
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold leading-snug text-stone-950">
                    Elevated Everyday Essentials.
                  </h3>

                  <button
                    onClick={() => {
                      navigate("/men");
                      setIsMobileMenuOpen(false);
                    }}
                    className="mt-6 w-full rounded-full bg-[#405821] px-5 py-4 text-[10px] font-extrabold uppercase tracking-[0.24em] text-white shadow-xl shadow-[#405821]/20 transition duration-300 hover:bg-[#314417]"
                  >
                    Shop Collection
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}

export default Navbar;
