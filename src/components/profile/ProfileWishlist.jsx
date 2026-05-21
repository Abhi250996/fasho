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
    <section className="px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1700px]">
        <div className="mb-6">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#6d7d3e]">
            Saved Items
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-stone-950">
            Wishlist
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-[1.6rem] border border-white/40 bg-white/45 shadow-lg shadow-black/5 backdrop-blur-md"
            >
              <div className="aspect-[4/4.5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-stone-950">
                  {item.name}
                </h3>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-base font-semibold text-[#405821]">
                    {item.price}
                  </p>

                  <button className="rounded-full bg-[#405821] px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-[#314417]">
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
