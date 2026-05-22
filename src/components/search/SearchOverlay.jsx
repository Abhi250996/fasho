import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Search, X, ArrowUpRight } from "lucide-react";

import { useNavigate } from "react-router-dom";

import { menProducts } from "../../data/menProducts";
import { womenProducts } from "../../data/womenProducts";

const allProducts = [...menProducts, ...womenProducts];

export default function SearchOverlay({ isOpen, onClose }) {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const filteredProducts = useMemo(() => {
    if (!search.trim()) {
      return allProducts.slice(0, 6);
    }

    return allProducts
      .filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()),
      )
      .slice(0, 8);
  }, [search]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm"
          />

          {/* CENTER WRAPPER */}
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5">
            {/* MODAL */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 15,
              }}
              transition={{
                duration: 0.25,
              }}
              className="w-full max-w-[920px]"
            >
              <div className="overflow-hidden rounded-2xl border border-white/20 bg-[#ecead7]/95 shadow-2xl backdrop-blur-xl sm:rounded-[2rem]">
                {/* SEARCH BAR */}
                <div className="flex items-center gap-3 border-b border-black/5 px-4 py-4 sm:px-6 sm:py-5">
                  <Search className="size-4 shrink-0 text-stone-500 sm:size-5" />

                  <input
                    autoFocus
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-transparent text-sm text-stone-950 outline-none placeholder:text-stone-400 sm:text-base"
                  />

                  <button
                    type="button"
                    onClick={onClose}
                    className="grid size-9 shrink-0 place-items-center rounded-full transition duration-300 hover:bg-white/60 sm:size-10"
                  >
                    <X className="size-4 sm:size-5" />
                  </button>
                </div>

                {/* RESULTS */}
                <div className="max-h-[70vh] overflow-y-auto p-3 sm:p-5">
                  {/* HEADER */}
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#6d7d3e] sm:text-[10px] sm:tracking-[0.2em]">
                      Search Results
                    </p>

                    <p className="text-xs text-stone-500 sm:text-sm">
                      {filteredProducts.length} products
                    </p>
                  </div>

                  {/* GRID */}
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:grid-cols-3">
                    {filteredProducts.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => {
                          navigate("/collections");

                          onClose();
                        }}
                        className="group overflow-hidden rounded-xl bg-white/70 text-left shadow-md shadow-black/5 transition duration-300 hover:-translate-y-1 sm:rounded-[1.2rem]"
                      >
                        {/* IMAGE */}
                        <div className="aspect-[3/3.6] overflow-hidden bg-[#ddd7ca]">
                          <img
                            loading="lazy"
                            decoding="async"
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* CONTENT */}
                        <div className="p-2.5 sm:p-3">
                          {/* CATEGORY */}
                          <p className="text-[7px] font-bold uppercase tracking-[0.08em] text-[#6d7d3e] sm:text-[8px] sm:tracking-[0.14em]">
                            {product.category}
                          </p>

                          {/* TITLE */}
                          <div className="mt-1.5 flex items-start justify-between gap-2">
                            <h3 className="line-clamp-2 text-xs font-semibold leading-5 text-stone-950 sm:text-sm">
                              {product.name}
                            </h3>

                            <ArrowUpRight className="mt-0.5 size-3.5 shrink-0 text-[#405821] sm:size-4" />
                          </div>

                          {/* PRICE */}
                          <p className="mt-1.5 text-xs font-semibold text-[#405821] sm:mt-2 sm:text-sm">
                            {product.price}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
