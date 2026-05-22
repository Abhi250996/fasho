import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const luxuryEase = [0.22, 1, 0.36, 1];

export default function AboutBrandSection() {
  return (
    <section className="overflow-hidden bg-[#ecead7] px-3 py-12 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-[1600px] gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-center lg:gap-12">
        {/* IMAGE SIDE */}
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
            duration: 0.8,
            ease: luxuryEase,
          }}
          className="relative"
        >
          {/* IMAGE */}
          <div className="overflow-hidden rounded-2xl sm:rounded-[2rem]">
            <img
              loading="lazy"
              decoding="async"
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop"
              alt="Luxury fashion"
              className="h-[280px] w-full object-cover transition duration-700 ease-out hover:scale-105 sm:h-[420px] lg:h-[620px]"
            />
          </div>

          {/* FLOATING LABEL */}
          <div className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-2 shadow-lg shadow-black/10 sm:bottom-6 sm:left-6 sm:px-5 sm:py-3">
            <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#405821] sm:text-[10px] sm:tracking-[0.18em]">
              Since 2025
            </p>
          </div>
        </motion.div>

        {/* CONTENT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.75,
            ease: luxuryEase,
          }}
          className="lg:pl-4"
        >
          {/* LABEL */}
          <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#6d7d3e] sm:text-[10px] sm:tracking-[0.22em]">
            About FASHO
          </p>

          {/* HEADING */}
          <h2 className="mt-4 font-serif text-[clamp(2.2rem,8vw,5.5rem)] leading-[0.92] tracking-[-0.05em] text-stone-950">
            Modern
            <span className="block text-[#405821]">Essentials.</span>
          </h2>

          {/* DESCRIPTION */}
          <div className="mt-5 max-w-2xl space-y-4 text-sm leading-7 text-stone-700 sm:text-base sm:leading-8">
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
          <div className="mt-7 grid grid-cols-3 gap-3 border-y border-black/5 py-5 sm:gap-5 sm:py-7">
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
                <h3 className="text-xl font-semibold text-[#405821] sm:text-3xl lg:text-4xl">
                  {item.value}
                </h3>

                <p className="mt-1 text-[8px] uppercase tracking-[0.1em] text-stone-500 sm:mt-2 sm:text-[10px] sm:tracking-[0.18em]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <div className="mt-7">
            <Link
              to="/collections"
              className="group inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.12em] text-[#405821] sm:text-[10px] sm:tracking-[0.18em]"
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
