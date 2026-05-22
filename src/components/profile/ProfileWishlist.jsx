const wishlistItems = [
  {
    id: 1,
    name: "Premium Knitwear",
    price: "$148",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop",
  },

  {
    id: 2,
    name: "Luxury Tailored Blazer",
    price: "$220",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop",
  },

  {
    id: 3,
    name: "Minimal Street Hoodie",
    price: "$132",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function ProfileWishlist() {
  return (
    <section className="px-3 py-5 sm:px-5 lg:px-8 lg:py-7">
      <div className="mx-auto max-w-[1600px]">
        {/* HEADER */}
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#6d7d3e] sm:text-[9px]">
              Saved Items
            </p>

            <h2 className="mt-1 text-2xl font-semibold text-stone-950 sm:text-3xl">
              Wishlist
            </h2>
          </div>

          <button className="w-fit rounded-full border border-black/5 bg-white px-4 py-2 text-[9px] font-bold uppercase tracking-[0.1em] text-stone-700 transition duration-300 hover:bg-[#405821] hover:text-white sm:px-5 sm:text-[10px]">
            View All
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl border border-white/40 bg-white/50 shadow-lg shadow-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* IMAGE */}
              <div className="aspect-[4/4.4] overflow-hidden bg-[#e8e3d8]">
                <img
                  loading="lazy"
                  decoding="async"
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-3 sm:p-4">
                {/* TITLE */}
                <h3 className="line-clamp-2 text-sm font-semibold text-stone-950 sm:text-base">
                  {item.name}
                </h3>

                {/* FOOTER */}
                <div className="mt-3 flex items-center justify-between gap-2">
                  {/* PRICE */}
                  <p className="text-sm font-semibold text-[#405821] sm:text-base">
                    {item.price}
                  </p>

                  {/* BUTTON */}
                  <button className="rounded-full bg-[#405821] px-3 py-2 text-[8px] font-bold uppercase tracking-[0.08em] text-white transition duration-300 hover:bg-[#314417] sm:px-4 sm:text-[9px]">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
