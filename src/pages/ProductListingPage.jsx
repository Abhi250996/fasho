import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Heart,
  ShoppingBag,
  SlidersHorizontal,
  Star,
  X,
} from "lucide-react";
import { productFilterOptions, productsData } from "../data/productsData";

const luxuryEase = [0.22, 1, 0.36, 1];
const maxPrice = 300;

const initialFilters = {
  category: "",
  price: maxPrice,
  color: "",
  size: "",
  collection: "",
};

const sortOptions = [
  "Featured",
  "Newest",
  "Price Low To High",
  "Price High To Low",
  "Best Selling",
];

const badgeStyles = {
  NEW: "bg-white/70 text-[#405821]",
  LIMITED: "bg-[#405821]/82 text-white",
  TRENDING: "bg-[#e9e5c9]/78 text-stone-950",
};

function Rating({ rating }) {
  return (
    <div className="flex items-center gap-1 text-[#6d7d3e]">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`size-3.5 stroke-[1.8] ${
            index < rating ? "fill-[#6d7d3e]" : "fill-transparent opacity-35"
          }`}
        />
      ))}
    </div>
  );
}

function FilterButton({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2.5 text-xs font-extrabold uppercase tracking-[0.16em] shadow-lg backdrop-blur-md transition duration-300 ${
        active
          ? "border-[#405821] bg-[#405821] text-white shadow-[#405821]/18"
          : "border-[#405821]/16 bg-white/32 text-stone-700 shadow-[#39461e]/5 hover:bg-white/60 hover:text-[#405821]"
      }`}
    >
      {children}
    </button>
  );
}

function FilterPanel({ filters, setFilter, clearFilters }) {
  return (
    <div className="rounded-2xl border border-white/50 bg-white/36 p-6 shadow-2xl shadow-[#39461e]/10 backdrop-blur-md">
      <div className="mb-7 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.26em] text-[#6d7d3e]">
            Refine
          </p>
          <h2 className="mt-2 font-serif text-3xl font-medium text-stone-950">
            Filters
          </h2>
        </div>
        <button
          type="button"
          onClick={clearFilters}
          className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#405821] transition duration-300 hover:text-stone-950"
        >
          Reset
        </button>
      </div>

      <div className="space-y-8">
        <FilterGroup title="Category">
          <div className="flex flex-wrap gap-2.5">
            {productFilterOptions.categories.map((category) => (
              <FilterButton
                key={category}
                active={filters.category === category}
                onClick={() =>
                  setFilter(
                    "category",
                    filters.category === category ? "" : category,
                  )
                }
              >
                {category}
              </FilterButton>
            ))}
          </div>
        </FilterGroup>

        <FilterGroup title="Price">
          <div className="rounded-xl border border-[#405821]/12 bg-white/30 p-4">
            <div className="mb-4 flex items-center justify-between text-sm font-bold text-stone-700">
              <span>$0</span>
              <span className="text-[#405821]">${filters.price}</span>
            </div>
            <input
              type="range"
              min="60"
              max={maxPrice}
              step="10"
              value={filters.price}
              onChange={(event) =>
                setFilter("price", Number(event.target.value))
              }
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-[#cdd5a6] [accent-color:#405821]"
            />
          </div>
        </FilterGroup>

        <FilterGroup title="Color">
          <div className="flex flex-wrap gap-3">
            {productFilterOptions.colors.map((color) => (
              <button
                key={color.name}
                type="button"
                onClick={() =>
                  setFilter(
                    "color",
                    filters.color === color.name ? "" : color.name,
                  )
                }
                className={`grid size-10 place-items-center rounded-full border transition duration-300 hover:-translate-y-1 ${
                  filters.color === color.name
                    ? "border-[#405821] shadow-lg shadow-[#405821]/20"
                    : "border-white/70 shadow-lg shadow-[#39461e]/7"
                }`}
                aria-label={`Filter by ${color.name}`}
              >
                <span
                  className="size-7 rounded-full border border-stone-950/10"
                  style={{ backgroundColor: color.value }}
                />
              </button>
            ))}
          </div>
        </FilterGroup>

        <FilterGroup title="Size">
          <div className="grid grid-cols-5 gap-2">
            {productFilterOptions.sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() =>
                  setFilter("size", filters.size === size ? "" : size)
                }
                className={`rounded-full border py-3 text-xs font-extrabold uppercase tracking-[0.16em] shadow-lg transition duration-300 ${
                  filters.size === size
                    ? "border-[#405821] bg-[#405821] text-white shadow-[#405821]/18"
                    : "border-[#405821]/16 bg-white/32 text-stone-700 shadow-[#39461e]/5 hover:bg-white/60 hover:text-[#405821]"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </FilterGroup>

        <FilterGroup title="Collection">
          <div className="flex flex-wrap gap-2.5">
            {productFilterOptions.collections.map((collection) => (
              <FilterButton
                key={collection}
                active={filters.collection === collection}
                onClick={() =>
                  setFilter(
                    "collection",
                    filters.collection === collection ? "" : collection,
                  )
                }
              >
                {collection}
              </FilterButton>
            ))}
          </div>
        </FilterGroup>
      </div>
    </div>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-extrabold uppercase tracking-[0.2em] text-stone-950">
        {title}
      </h3>
      {children}
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.7, ease: luxuryEase }}
      whileHover={{ y: -10 }}
      className="group relative rounded-xl border border-white/45 bg-white/35 p-3 shadow-2xl shadow-[#39461e]/8 backdrop-blur-sm transition-shadow duration-500 hover:shadow-[#39461e]/24"
    >
      <div className="relative aspect-[3/4.15] overflow-hidden rounded-lg bg-[#dfdcc2]">
        <img
          loading="lazy"
          decoding="async"
          src={product.image}
          alt={product.name}
          className={`absolute inset-0 h-full w-full object-cover ${product.imagePosition} transition duration-[1100ms] ease-out group-hover:scale-110 group-hover:opacity-0`}
        />
        <img
          loading="lazy"
          decoding="async"
          src={product.hoverImage}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full scale-105 object-cover ${product.hoverPosition} opacity-0 transition duration-[1100ms] ease-out group-hover:scale-110 group-hover:opacity-100`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/42 via-stone-950/0 to-[#f4ecd6]/5 opacity-0 transition duration-500 group-hover:opacity-100" />

        <span
          className={`absolute left-4 top-4 rounded-full border border-white/45 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em] shadow-lg shadow-stone-950/5 backdrop-blur-md ${badgeStyles[product.badge]}`}
        >
          {product.badge}
        </span>

        <button
          type="button"
          className="absolute right-4 top-4 grid size-11 translate-y-2 place-items-center rounded-full border border-white/45 bg-white/55 text-stone-950 opacity-0 shadow-xl shadow-stone-950/10 backdrop-blur-md transition duration-500 hover:bg-white hover:text-[#405821] group-hover:translate-y-0 group-hover:opacity-100"
          aria-label={`Add ${product.name} to wishlist`}
        >
          <Heart className="size-5 stroke-[1.8]" />
        </button>

        <motion.button
          type="button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="absolute inset-x-4 bottom-4 flex translate-y-5 items-center justify-center gap-3 rounded-full bg-[#405821] px-5 py-4 text-xs font-extrabold uppercase tracking-[0.2em] text-white opacity-0 shadow-2xl shadow-[#405821]/30 transition duration-500 hover:bg-[#314417] hover:shadow-[#405821]/45 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ShoppingBag className="size-4 stroke-[1.9]" />
          Quick Add
          <ArrowRight className="size-4 stroke-[1.9] transition duration-300 group-hover:translate-x-1" />
        </motion.button>
      </div>

      <div className="px-1 pb-2 pt-5">
        <div className="mb-3 flex items-center justify-between gap-4">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d7d3e]">
            {product.category}
          </p>
          <Rating rating={product.rating} />
        </div>
        <div className="flex items-start justify-between gap-4">
          <h3 className="max-w-[14rem] text-xl font-semibold leading-snug text-stone-950 sm:text-2xl">
            {product.name}
          </h3>
          <p className="text-lg font-semibold text-[#405821]">
            ${product.price}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProductListingPage() {
  const [filters, setFilters] = useState(initialFilters);
  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const setFilter = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }));
  };

  const clearFilters = () => setFilters(initialFilters);

  const filteredProducts = useMemo(() => {
    const filtered = productsData.filter((product) => {
      const matchesCategory =
        !filters.category || product.category === filters.category;
      const matchesPrice = product.price <= filters.price;
      const matchesColor = !filters.color || product.color === filters.color;
      const matchesSize = !filters.size || product.size.includes(filters.size);
      const matchesCollection =
        !filters.collection || product.collection === filters.collection;

      return (
        matchesCategory &&
        matchesPrice &&
        matchesColor &&
        matchesSize &&
        matchesCollection
      );
    });

    return [...filtered].sort((a, b) => {
      if (sortBy === "Price Low To High") return a.price - b.price;
      if (sortBy === "Price High To Low") return b.price - a.price;
      if (sortBy === "Newest") return b.id - a.id;
      if (sortBy === "Best Selling") return b.rating - a.rating;
      return a.id - b.id;
    });
  }, [filters, sortBy]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#ecead7] px-5 py-20 text-stone-950 sm:px-8 lg:px-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_8%,rgba(246,247,220,0.76),transparent_32%),linear-gradient(135deg,rgba(236,234,215,1),rgba(221,226,187,0.62),rgba(236,218,194,0.7))]" />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 18, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-10%] top-24 h-96 w-96 rounded-full bg-[#cdd5a6]/45 blur-2xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -16, 0], y: [0, 22, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-[-10%] h-[30rem] w-[30rem] rounded-full bg-[#dbc5a4]/55 blur-2xl"
      />

      <div className="relative mx-auto max-w-[1620px]">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: luxuryEase }}
          className="pb-12 pt-4 sm:pb-16 lg:pb-20"
        >
          <p className="text-sm font-extrabold uppercase tracking-[0.34em] text-[#6d7d3e] sm:text-lg">
            Curated Essentials
          </p>
          <span className="mt-5 block h-px w-20 bg-[#526632]" />
          <div className="mt-7 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h1 className="max-w-5xl font-serif text-[clamp(3.8rem,8vw,7.5rem)] font-medium leading-[0.88] tracking-normal">
              Explore The
              <span className="block text-[#3f571f]">Collection</span>
            </h1>
            <p className="max-w-xl text-lg leading-8 text-stone-800 sm:text-xl">
              A refined edit of timeless fashion, premium textures, and elevated
              essentials designed for a modern everyday wardrobe.
            </p>
          </div>
        </motion.header>

        <div className="grid gap-8 lg:grid-cols-[320px_1fr] xl:grid-cols-[360px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-8">
              <FilterPanel
                filters={filters}
                setFilter={setFilter}
                clearFilters={clearFilters}
              />
            </div>
          </aside>

          <section>
            <div className="mb-7 flex flex-col gap-4 rounded-2xl border border-white/50 bg-white/34 p-4 shadow-2xl shadow-[#39461e]/8 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={() => setFiltersOpen(true)}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#405821] px-5 py-3 text-xs font-extrabold uppercase tracking-[0.18em] text-white shadow-xl shadow-[#405821]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#314417] lg:hidden"
              >
                <SlidersHorizontal className="size-4 stroke-[1.9]" />
                Filters
              </button>

              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-stone-700">
                {filteredProducts.length} pieces
              </p>

              <label className="relative flex items-center gap-3 rounded-full border border-[#405821]/18 bg-white/42 px-5 py-3 shadow-lg shadow-[#39461e]/6 backdrop-blur-md">
                <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#405821]">
                  Sort
                </span>
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="appearance-none bg-transparent pr-8 text-sm font-semibold text-stone-800 outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 size-4 text-[#405821]" />
              </label>
            </div>

            <motion.div
              layout
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 xl:grid-cols-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredProducts.length === 0 && (
              <div className="rounded-2xl border border-white/50 bg-white/34 p-10 text-center shadow-2xl shadow-[#39461e]/8 backdrop-blur-md">
                <h2 className="font-serif text-4xl font-medium text-stone-950">
                  No pieces found
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-lg leading-8 text-stone-700">
                  Adjust your filters to discover more refined essentials from
                  the collection.
                </p>
              </div>
            )}
          </section>
        </div>
      </div>

      <AnimatePresence>
        {filtersOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-stone-950/45 backdrop-blur-sm lg:hidden"
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.55, ease: luxuryEase }}
              className="absolute inset-x-0 bottom-0 max-h-[88vh] overflow-y-auto rounded-t-3xl bg-[#ecead7] p-5 shadow-2xl"
            >
              <div className="mb-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setFiltersOpen(false)}
                  className="grid size-11 place-items-center rounded-full bg-[#405821] text-white shadow-xl shadow-[#405821]/20"
                  aria-label="Close filters"
                >
                  <X className="size-5 stroke-[1.9]" />
                </button>
              </div>
              <FilterPanel
                filters={filters}
                setFilter={setFilter}
                clearFilters={clearFilters}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
