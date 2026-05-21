import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const luxuryEase = [0.22, 1, 0.36, 1];

export default function AboutBrandSection() {
  return (
    <section className="overflow-hidden bg-[#ecead7] px-4 py-16 sm:px-8 lg:px-14 lg:py-28">
      <div className="mx-auto grid max-w-[1700px] gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        {/* IMAGE SIDE */}
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
            duration: 1,
            ease: luxuryEase,
          }}
          className="relative"
        >
          {/* MAIN IMAGE */}
          <div className="overflow-hidden rounded-[2rem]">
            <img
              loading="lazy"
              decoding="async"
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&?w=900&auto=format&fit=crop"
              alt="Luxury fashion"
              className="h-[360px] w-full object-cover transition duration-[1200ms] ease-out hover:scale-105 sm:h-[520px] lg:h-[720px]"
            />
          </div>

          {/* SMALL FLOATING LABEL */}
          <div className="absolute bottom-5 left-5 rounded-full bg-white px-5 py-3 shadow-xl shadow-black/10 sm:bottom-8 sm:left-8">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#405821]">
              Since 2025
            </p>
          </div>
        </motion.div>

        {/* CONTENT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
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
          className="lg:pl-10"
        >
          {/* LABEL */}
          <p className="text-[10px] font-extrabold uppercase tracking-[0.34em] text-[#6d7d3e] sm:text-xs">
            About FASHO
          </p>

          {/* HEADING */}
          <h2 className="mt-6 font-serif text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.9] tracking-[-0.06em] text-stone-950">
            Modern
            <span className="block text-[#405821]">Essentials.</span>
          </h2>

          {/* DESCRIPTION */}
          <div className="mt-8 max-w-2xl space-y-6 text-sm leading-8 text-stone-700 sm:text-base lg:text-lg">
            <p>
              FASHO creates elevated essentials designed with timeless
              silhouettes, premium fabrics, and contemporary luxury aesthetics.
            </p>

            <p>
              Inspired by editorial fashion culture, every collection blends
              modern minimalism with refined craftsmanship for everyday wear.
            </p>
          </div>

          {/* STATS */}
          <div className="mt-10 grid grid-cols-3 gap-6 border-y border-black/6 py-8">
            {[
              {
                value: "50K+",
                label: "Clients",
              },
              {
                value: "240+",
                label: "Pieces",
              },
              {
                value: "4.9",
                label: "Rating",
              },
            ].map((item) => (
              <div key={item.label}>
                <h3 className="text-2xl font-semibold text-[#405821] sm:text-4xl">
                  {item.value}
                </h3>

                <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-stone-500 sm:text-xs">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <div className="mt-10">
            <Link
              to="/collections"
              className="group inline-flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#405821]"
            >
              Explore Collections
              <ArrowUpRight className="size-4 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
