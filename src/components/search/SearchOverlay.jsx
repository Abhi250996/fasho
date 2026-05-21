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
            className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-md"
          />

          {/* MODAL */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 20,
            }}
            transition={{
              duration: 0.35,
            }}
            className="fixed inset-x-0 top-0 z-[100] mx-auto w-full max-w-[980px] p-4 sm:p-6"
          >
            <div className="overflow-hidden rounded-[2rem] border border-white/20 bg-[#ecead7]/95 shadow-2xl backdrop-blur-2xl">
              {/* SEARCH BAR */}
              <div className="flex items-center gap-4 border-b border-black/5 px-5 py-5 sm:px-7">
                <Search className="size-5 text-stone-500" />

                <input
                  autoFocus
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-transparent text-base text-stone-950 outline-none placeholder:text-stone-400 sm:text-lg"
                />

                <button
                  type="button"
                  onClick={onClose}
                  className="grid size-10 place-items-center rounded-full transition duration-300 hover:bg-white/60"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* RESULTS */}
              <div className="max-h-[70vh] overflow-y-auto p-4 sm:p-6">
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#6d7d3e]">
                    Search Results
                  </p>

                  <p className="text-sm text-stone-500">
                    {filteredProducts.length} products
                  </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {filteredProducts.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => {
                        navigate("/collections");

                        onClose();
                      }}
                      className="group overflow-hidden rounded-[1.2rem] bg-white/60 text-left shadow-lg shadow-black/5 transition duration-300 hover:-translate-y-1"
                    >
                      {/* IMAGE */}
                      <div className="overflow-hidden aspect-[3/3.5] bg-[#ddd7ca]">
                        <img
                          loading="lazy"
                          decoding="async"
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                      </div>

                      {/* CONTENT */}
                      <div className="p-3">
                        <p className="text-[8px] font-extrabold uppercase tracking-[0.18em] text-[#6d7d3e]">
                          {product.category}
                        </p>

                        <div className="mt-2 flex items-start justify-between gap-3">
                          <h3 className="line-clamp-2 text-sm font-semibold text-stone-950">
                            {product.name}
                          </h3>

                          <ArrowUpRight className="size-4 shrink-0 text-[#405821]" />
                        </div>

                        <p className="mt-2 text-sm font-semibold text-[#405821]">
                          {product.price}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
