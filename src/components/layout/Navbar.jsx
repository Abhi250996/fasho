import { useEffect, useState } from "react";
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

  const [isScrolled, setIsScrolled] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);
  /* SCROLL EFFECT */
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // BG + SHADOW
      setIsScrolled(currentScrollY > 10);

      // USER UP SCROLL KAR RAHA HAI
      if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      }

      // USER DOWN SCROLL KAR RAHA HAI
      else {
        setShowNavbar(false);
      }

      // TOP PE ALWAYS SHOW
      if (currentScrollY < 10) {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* LOCK BODY SCROLL WHEN MENU OPEN */
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* FIXED NAVBAR */}
      <header
        className={`fixed left-0 right-0 top-0 z-[99999] w-full transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "border-b border-black/5 bg-[#ecead7] shadow-lg shadow-black/5"
            : "bg-[#ecead7]"
        }`}
      >
        <nav
          className={`relative mx-auto flex w-full max-w-[1760px] items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-14 ${
            isScrolled ? "py-3 lg:py-4" : "py-4 lg:py-5"
          }`}
        >
          {/* LOGO */}
          <Link
            to="/"
            className="relative z-10 text-2xl font-black tracking-tight text-stone-950 transition duration-300 hover:text-[#405821] sm:text-3xl lg:text-4xl"
            aria-label="Fasho home"
          >
            FASHO.
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-8 lg:flex xl:gap-12">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`group relative text-[10px] font-extrabold uppercase tracking-[0.24em] transition duration-300 xl:text-[11px] ${
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
          <div className="relative z-10 flex items-center gap-1.5 text-stone-950 sm:gap-2">
            {/* SEARCH */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="grid size-9 place-items-center rounded-full border border-black/5 bg-white shadow-sm transition duration-300 hover:bg-gray-100 sm:size-10"
              aria-label="Search"
            >
              <Search className="size-4 stroke-[1.8] sm:size-5" />
            </button>

            {/* ACCOUNT */}
            <button
              type="button"
              onClick={() => navigate("/account")}
              className="grid size-9 place-items-center rounded-full border border-black/5 bg-white shadow-sm transition duration-300 hover:bg-gray-100 sm:size-10"
              aria-label="Account"
            >
              <User className="size-4 stroke-[1.8] sm:size-5" />
            </button>

            {/* CART */}
            <button
              type="button"
              onClick={() => navigate("/cart")}
              className="relative grid size-9 place-items-center rounded-full border border-black/5 bg-white shadow-sm transition duration-300 hover:bg-gray-100 sm:size-10"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="size-4 stroke-[1.8] sm:size-5" />

              {totalItems > 0 && (
                <motion.span
                  initial={{
                    scale: 0.6,
                    opacity: 0,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  key={totalItems}
                  className="absolute -right-1 -top-1 grid min-h-[18px] min-w-[18px] place-items-center rounded-full bg-[#405821] px-1 text-[9px] font-bold text-white shadow-lg shadow-[#405821]/20"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>

            {/* MOBILE MENU */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="grid size-9 place-items-center rounded-full border border-black/5 bg-white shadow-sm transition duration-300 hover:bg-gray-100 lg:hidden sm:size-10"
              aria-label="Open menu"
            >
              <Menu className="size-5 stroke-[1.8]" />
            </button>
          </div>
        </nav>
      </header>

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
              className="fixed inset-0 z-[9998] bg-black/40"
            />

            {/* SIDEBAR */}
            <motion.div
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed right-0 top-0 z-[9999] flex h-screen w-full max-w-[300px] flex-col border-l border-white/20 bg-[#ecead7] shadow-2xl"
            >
              {/* TOP */}
              <div className="flex items-center justify-between border-b border-black/5 px-5 py-5">
                <h2 className="text-2xl font-black tracking-tight text-stone-950">
                  FASHO.
                </h2>

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="grid size-9 place-items-center rounded-full bg-white transition duration-300 hover:bg-gray-100"
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* LINKS */}
              <div className="flex flex-1 flex-col px-5 py-8">
                <div className="space-y-5">
                  {navItems.map((item) => {
                    const isActive = location.pathname === item.path;

                    return (
                      <Link
                        key={item.label}
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block text-sm font-extrabold uppercase tracking-[0.22em] transition duration-300 ${
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
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* SEARCH */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* PAGE SPACING */}
    </>
  );
}

export default Navbar;
