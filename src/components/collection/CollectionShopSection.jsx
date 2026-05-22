import CollectionProductsSection from "./CollectionProductsSection";

export default function CollectionShopSection({
  categories,
  selectedCategory,
  setSelectedCategory,
  selectedSort,
  setSelectedSort,
  filteredProducts,
  sortOptions,
  luxuryCard,
  accent,
}) {
  return (
    <section className="px-4 pb-14 pt-6 sm:px-6 lg:px-10 lg:pb-20 lg:pt-10">
      <div className="mx-auto grid max-w-[1600px] gap-6 lg:grid-cols-[260px_1fr]">
        {/* SIDEBAR */}
        <aside className="sticky top-24 hidden h-fit rounded-2xl border border-white/45 bg-white/60 p-5 shadow-lg shadow-black/5 lg:block">
          {/* HEADER */}
          <div className="flex items-center justify-between">
            <div>
              <p
                className="text-[9px] font-bold uppercase tracking-[0.18em]"
                style={{ color: accent }}
              >
                Filters
              </p>

              <h2 className="mt-1 text-xl font-semibold text-stone-950">
                Discover
              </h2>
            </div>

            <button
              onClick={() => {
                setSelectedCategory("All");
                setSelectedSort("Newest");
              }}
              className="text-[9px] font-bold uppercase tracking-[0.12em] transition duration-300 hover:opacity-70"
              style={{ color: accent }}
            >
              Reset
            </button>
          </div>

          <div className="mt-5 h-px w-full bg-black/5" />

          {/* CATEGORY */}
          <div className="mt-7">
            <div className="flex items-center justify-between">
              <h3
                className="text-[10px] font-bold uppercase tracking-[0.16em]"
                style={{ color: accent }}
              >
                Categories
              </h3>

              <span
                className="rounded-full px-2 py-1 text-[9px] font-bold"
                style={{
                  backgroundColor: `${accent}15`,
                  color: accent,
                }}
              >
                {categories.length}
              </span>
            </div>

            <div className="mt-4 space-y-2.5">
              {categories.map((item) => {
                const isActive = selectedCategory === item.name;

                return (
                  <button
                    key={item.name}
                    onClick={() => setSelectedCategory(item.name)}
                    className={`flex w-full items-center justify-between rounded-xl border px-3 py-3 text-left transition duration-300 ${
                      isActive
                        ? "text-white shadow-md"
                        : "border-white/40 bg-white/70 text-stone-700 hover:bg-white"
                    }`}
                    style={
                      isActive
                        ? {
                            backgroundColor: accent,
                            borderColor: accent,
                          }
                        : {}
                    }
                  >
                    <span className="text-sm font-medium">{item.name}</span>

                    <span
                      className={`rounded-full px-2 py-1 text-[9px] font-bold ${
                        isActive ? "bg-white/20 text-white" : ""
                      }`}
                      style={
                        !isActive
                          ? {
                              backgroundColor: `${accent}15`,
                              color: accent,
                            }
                          : {}
                      }
                    >
                      {item.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* COLLECTION CARD */}
          <div
            className="mt-8 overflow-hidden rounded-2xl p-5 text-white shadow-lg"
            style={{
              backgroundColor: accent,
            }}
          >
            <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/70">
              {luxuryCard.tag}
            </p>

            <h3 className="mt-3 text-xl font-semibold leading-snug">
              {luxuryCard.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/75">
              {luxuryCard.description}
            </p>

            <button
              className="mt-5 w-full rounded-full bg-white px-4 py-3 text-[9px] font-bold uppercase tracking-[0.14em] transition duration-300 hover:opacity-90"
              style={{ color: accent }}
            >
              {luxuryCard.buttonText}
            </button>
          </div>
        </aside>

        {/* PRODUCTS AREA */}
        <div>
          {/* TOOLBAR */}
          <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-white/45 bg-white/60 p-4 shadow-lg shadow-black/5 sm:flex-row sm:items-center sm:justify-between sm:p-5">
            {/* LEFT */}
            <div>
              <p
                className="text-[9px] font-bold uppercase tracking-[0.18em]"
                style={{ color: accent }}
              >
                FASHO Collection
              </p>

              <h2 className="mt-1 text-xl font-semibold text-stone-950 sm:text-2xl">
                {filteredProducts.length} Products
              </h2>
            </div>

            {/* SORT */}
            <div className="flex flex-wrap items-center gap-2">
              {sortOptions.map((item) => {
                const isActive = selectedSort === item;

                return (
                  <button
                    key={item}
                    onClick={() => setSelectedSort(item)}
                    className={`rounded-full px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.1em] transition duration-300 sm:px-5 sm:text-[10px] ${
                      isActive
                        ? "text-white shadow-md"
                        : "border border-black/5 bg-white/70 text-stone-700 hover:bg-white"
                    }`}
                    style={
                      isActive
                        ? {
                            backgroundColor: accent,
                          }
                        : {}
                    }
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          {/* PRODUCTS */}
          <CollectionProductsSection
            products={filteredProducts}
            accent={accent}
          />
        </div>
      </div>
    </section>
  );
}
