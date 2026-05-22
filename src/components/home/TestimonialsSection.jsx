import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

import { testimonialsData } from "../../data/testimonialsData";

const luxuryEase = [0.22, 1, 0.36, 1];

function Rating({ rating }) {
  return (
    <div className="flex items-center gap-1 text-[#6d7d3e]">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`size-3 stroke-[1.8] ${
            index < rating ? "fill-[#6d7d3e]" : "fill-transparent opacity-30"
          }`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="overflow-hidden bg-[#ecead7] px-3 py-12 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1600px]">
        {/* TOP */}
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
            duration: 0.7,
            ease: luxuryEase,
          }}
          className="mb-8 flex flex-col gap-5 border-b border-black/5 pb-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#6d7d3e] sm:text-[10px] sm:tracking-[0.22em]">
              Client Stories
            </p>

            <h2 className="mt-3 font-serif text-[clamp(2.2rem,8vw,5rem)] leading-[0.92] tracking-[-0.05em] text-stone-950">
              What People
              <span className="block text-[#405821]">Are Saying.</span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
            Refined quality and elevated essentials trusted by modern fashion
            lovers worldwide.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.05,
                ease: luxuryEase,
              }}
              whileHover={{
                y: -4,
              }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/40 bg-white/50 p-4 shadow-lg shadow-black/5 transition duration-300 hover:shadow-xl sm:p-5"
            >
              {/* QUOTE */}
              <Quote className="absolute right-4 top-4 size-8 text-[#405821]/10 sm:size-10" />

              {/* USER */}
              <div className="relative z-10 flex items-center gap-3">
                <img
                  loading="lazy"
                  decoding="async"
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={`h-12 w-12 rounded-full object-cover ring-2 ring-white/60 sm:h-14 sm:w-14 ${testimonial.imagePosition}`}
                />

                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold text-stone-950 sm:text-base">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.1em] text-stone-500 sm:text-[10px]">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* REVIEW */}
              <p className="relative z-10 mt-4 flex-1 text-sm leading-7 text-stone-700 sm:text-[15px] sm:leading-8">
                “{testimonial.review}”
              </p>

              {/* FOOTER */}
              <div className="relative z-10 mt-5 flex items-center justify-between border-t border-black/5 pt-4">
                <Rating rating={testimonial.rating} />

                <span className="text-[8px] font-bold uppercase tracking-[0.1em] text-[#405821] sm:text-[9px]">
                  Verified
                </span>
              </div>

              {/* HOVER GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#dfe7be]/0 via-[#dfe7be]/0 to-[#dfe7be]/20 opacity-0 transition duration-500 group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
