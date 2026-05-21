import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const luxuryEase = [0.22, 1, 0.36, 1];

export default function NewCollectionBanner() {
  return (
    <section className="bg-[#ecead7] px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.9,
          ease: luxuryEase,
        }}
        className="mx-auto grid max-w-[1700px] overflow-hidden rounded-[1.8rem] border border-white/40 bg-white/40 shadow-[0_15px_60px_rgba(0,0,0,0.05)] backdrop-blur-md lg:grid-cols-[1.05fr_0.95fr]"
      >
        {/* LEFT CONTENT */}
        <div className="relative flex items-center px-5 py-7 sm:px-8 sm:py-9 lg:px-12 lg:py-10">
          {/* GLOW */}
          <div className="absolute left-[-10%] top-[-20%] h-52 w-52 rounded-full bg-[#cad39f]/25 blur-2xl" />

          <div className="relative z-10 max-w-2xl">
            {/* LABEL */}
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-[#526632]" />

              <p className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-[#6d7d3e] sm:text-[10px]">
                New Collection 2026
              </p>
            </div>

            {/* HEADING */}
            <h2 className="mt-5 font-serif text-[clamp(2.3rem,5vw,5rem)] leading-[0.92] tracking-[-0.05em] text-stone-950">
              Quiet
              <span className="block text-[#405821]">Luxury.</span>
            </h2>

            {/* TEXT */}
            <p className="mt-5 max-w-xl text-sm leading-7 text-stone-700 sm:text-[15px] sm:leading-8">
              Refined silhouettes, premium textures, and timeless essentials
              inspired by elevated contemporary minimalism.
            </p>

            {/* BUTTONS */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/collections"
                className="group inline-flex items-center gap-3 rounded-full bg-[#405821] px-5 py-3 text-[9px] font-extrabold uppercase tracking-[0.2em] text-white shadow-lg shadow-[#405821]/15 transition duration-300 hover:bg-[#314417] sm:px-7 sm:text-[10px]"
              >
                Explore Now
                <ArrowRight className="size-4 transition duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/new-in"
                className="rounded-full border border-[#405821]/10 bg-white/70 px-5 py-3 text-[9px] font-extrabold uppercase tracking-[0.2em] text-stone-800 transition duration-300 hover:bg-white sm:px-7 sm:text-[10px]"
              >
                New Arrivals
              </Link>
            </div>

            {/* STATS */}
            <div className="mt-7 grid grid-cols-3 gap-3 border-t border-black/5 pt-5">
              {[
                {
                  value: "240+",
                  label: "Pieces",
                },
                {
                  value: "50K",
                  label: "Clients",
                },
                {
                  value: "4.9",
                  label: "Rating",
                },
              ].map((item) => (
                <div key={item.label}>
                  <h3 className="text-lg font-semibold text-[#405821] sm:text-xl">
                    {item.value}
                  </h3>

                  <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-stone-500 sm:text-[10px]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative overflow-hidden">
          <img
            loading="lazy"
            decoding="async"
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&?w=900&auto=format&fit=crop"
            alt="Luxury fashion collection"
            className="h-[260px] w-full object-cover object-center sm:h-[340px] lg:h-full"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-transparent" />

          {/* FLOATING CARD */}
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-4 left-4 rounded-[1.2rem] bg-white/15 p-4 shadow-xl backdrop-blur-md sm:bottom-6 sm:left-6 sm:p-5"
          >
            <p className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-white/70">
              Editorial Drop
            </p>

            <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
              Modern Essentials
            </h3>

            <p className="mt-2 max-w-[200px] text-xs leading-5 text-white/75 sm:text-sm">
              Elevated wardrobe staples designed for timeless sophistication.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
