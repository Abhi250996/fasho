import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function FeaturedCategories() {
  const categories = [
    {
      title: "Men",
      subtitle: "Modern Essentials",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1400&auto=format&fit=crop",
      path: "/men",
    },
    {
      title: "Women",
      subtitle: "Luxury Elegance",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1400&auto=format&fit=crop",
      path: "/women",
    },
    {
      title: "New In",
      subtitle: "Latest Arrivals",
      image:
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1400&auto=format&fit=crop",
      path: "/new-in",
    },
    {
      title: "Collections",
      subtitle: "Curated Luxury",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1400&auto=format&fit=crop",
      path: "/collections",
    },
  ];

  return (
    <section
      id="collections"
      className="bg-[#ecead7] px-5 py-16 sm:px-8 lg:px-14 lg:py-24"
    >
      <div className="mx-auto max-w-[1700px]">
        {/* HEADER */}
        <div className="mb-10 flex flex-col gap-4 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-[#6d7d3e]">
              Curated Collections
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-stone-950 sm:text-5xl">
              Shop Collections
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
            Elevated fashion collections crafted for modern luxury wardrobes.
          </p>
        </div>

        {/* CATEGORY GRID */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35 }}
            >
              <Link
                to={item.path}
                className="group block overflow-hidden rounded-[1.8rem] border border-white/40 bg-white/40 shadow-xl shadow-black/5 backdrop-blur-md"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[320px] w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-105 sm:h-[360px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                  {/* CONTENT */}
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.26em] text-white/75">
                      {item.subtitle}
                    </p>

                    <div className="mt-3 flex items-end justify-between gap-4">
                      <h3 className="text-3xl font-semibold text-white">
                        {item.title}
                      </h3>

                      <span className="translate-x-0 text-sm font-bold uppercase tracking-[0.2em] text-white transition duration-300 group-hover:translate-x-1">
                        Explore
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCategories;
