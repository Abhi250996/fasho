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
    <section className="px-5 pb-20 pt-10 sm:px-8 lg:px-14 lg:pb-24 lg:pt-14">
      <div className="mx-auto grid max-w-[1700px] gap-8 lg:grid-cols-[300px_1fr]">
        {/* SIDEBAR */}
        <aside className="sticky top-28 hidden h-fit rounded-[2rem] border border-white/45 bg-white/50 p-7 shadow-2xl shadow-black/5 backdrop-blur-md lg:block">
          {/* HEADER */}
          <div className="flex items-center justify-between">
            <div>
              <p
                className="text-[10px] font-extrabold uppercase tracking-[0.28em]"
                style={{ color: accent }}
              >
                Refined Filters
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-stone-950">
                Discover
              </h2>
            </div>

            <button
              onClick={() => {
                setSelectedCategory("All");
                setSelectedSort("Newest");
              }}
              className="text-[10px] font-extrabold uppercase tracking-[0.22em] transition duration-300 hover:opacity-70"
              style={{ color: accent }}
            >
              Reset
            </button>
          </div>

          <div className="mt-7 h-px w-full bg-black/5" />

          {/* CATEGORY */}
          <div className="mt-10">
            <div className="flex items-center justify-between">
              <h3
                className="text-[11px] font-extrabold uppercase tracking-[0.24em]"
                style={{ color: accent }}
              >
                Categories
              </h3>

              <span
                className="rounded-full px-3 py-1 text-[10px] font-bold"
                style={{
                  backgroundColor: `${accent}15`,
                  color: accent,
                }}
              >
                {categories.length}
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {categories.map((item) => {
                const isActive = selectedCategory === item.name;

                return (
                  <button
                    key={item.name}
                    onClick={() => setSelectedCategory(item.name)}
                    className={`flex w-full items-center justify-between rounded-2xl border px-4 py-4 text-left transition duration-300 ${
                      isActive
                        ? "text-white shadow-lg"
                        : "border-white/40 bg-white/50 text-stone-700 hover:bg-white"
                    }`}
                    style={
                      isActive
                        ? {
                            backgroundColor: accent,
                            borderColor: accent,
                            boxShadow: `0 10px 30px ${accent}25`,
                          }
                        : {}
                    }
                  >
                    <span className="text-sm font-medium">{item.name}</span>

                    <span
                      className={`rounded-full px-2 py-1 text-[10px] font-bold ${
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
            className="mt-12 overflow-hidden rounded-[1.8rem] p-6 text-white shadow-2xl"
            style={{
              backgroundColor: accent,
              boxShadow: `0 20px 50px ${accent}30`,
            }}
          >
            <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-white/70">
              {luxuryCard.tag}
            </p>

            <h3 className="mt-4 text-2xl font-semibold leading-snug">
              {luxuryCard.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/75">
              {luxuryCard.description}
            </p>

            <button
              className="mt-6 w-full rounded-full bg-white px-5 py-4 text-[10px] font-extrabold uppercase tracking-[0.24em] transition duration-300 hover:opacity-90"
              style={{ color: accent }}
            >
              {luxuryCard.buttonText}
            </button>
          </div>
        </aside>

        {/* PRODUCTS AREA */}
        <div>
          {/* TOOLBAR */}
          <div className="mb-8 flex flex-col gap-5 rounded-[1.8rem] border border-white/45 bg-white/50 p-5 shadow-xl shadow-black/5 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p
                className="text-[10px] font-extrabold uppercase tracking-[0.28em]"
                style={{ color: accent }}
              >
                FASHO Collection
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-stone-950">
                {filteredProducts.length} Products
              </h2>
            </div>

            {/* SORT */}
            <div className="flex flex-wrap items-center gap-3">
              {sortOptions.map((item) => {
                const isActive = selectedSort === item;

                return (
                  <button
                    key={item}
                    onClick={() => setSelectedSort(item)}
                    className={`rounded-full px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.22em] transition duration-300 ${
                      isActive
                        ? "text-white shadow-lg"
                        : "border border-black/5 bg-white/60 text-stone-700 hover:bg-white"
                    }`}
                    style={
                      isActive
                        ? {
                            backgroundColor: accent,
                            boxShadow: `0 10px 30px ${accent}25`,
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

          {/* PRODUCTS GRID */}
          <CollectionProductsSection
            products={filteredProducts}
            accent={accent}
          />
        </div>
      </div>
    </section>
  );
}
