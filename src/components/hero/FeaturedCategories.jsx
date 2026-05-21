import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { Link } from "react-router-dom";

const categories = [
  {
    title: "Men",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=700&auto=format&fit=crop",

    path: "/men",
  },

  {
    title: "Women",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=700&auto=format&fit=crop",

    path: "/women",
  },

  {
    title: "New In",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=700&auto=format&fit=crop",

    path: "/new-in",
  },

  {
    title: "Collections",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=700&auto=format&fit=crop",

    path: "/collections",
  },
];

function FeaturedCategories() {
  return (
    <section className="bg-[#ecead7] px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-[1400px]">
        {/* HEADER */}
        <div className="mb-6 flex items-end justify-between gap-5">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1.5 shadow-sm backdrop-blur-sm">
              <Sparkles className="size-3 text-[#405821]" />

              <span className="text-[8px] font-extrabold uppercase tracking-[0.2em] text-[#405821]">
                Collections
              </span>
            </div>

            <h2 className="mt-4 font-serif text-[clamp(2rem,5vw,4rem)] leading-[0.92] tracking-[-0.05em] text-stone-950">
              Shop
              <span className="block text-[#405821]">Categories</span>
            </h2>
          </div>

          <Link
            to="/collections"
            className="hidden items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#405821] sm:flex"
          >
            View All
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

        {/* SMALL GRID */}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {categories.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{
                y: -3,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              <Link
                to={item.path}
                className="group block overflow-hidden rounded-[1.2rem] border border-white/40 bg-white/40 shadow-md shadow-black/5 backdrop-blur-sm"
              >
                {/* IMAGE */}
                <div className="relative h-[180px] overflow-hidden sm:h-[240px]">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                  {/* CONTENT */}
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white sm:text-xl">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[9px] font-extrabold uppercase tracking-[0.18em] text-white/70">
                        Explore
                      </p>
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition duration-300 group-hover:bg-white group-hover:text-stone-950">
                      <ArrowRight className="size-3.5" />
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
