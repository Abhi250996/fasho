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
    <section className="overflow-hidden bg-[#ecead7] px-4 py-14 sm:px-8 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-[1700px]">
        {/* TOP SECTION */}
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
            duration: 0.8,
            ease: luxuryEase,
          }}
          className="mb-10 flex flex-col gap-6 border-b border-black/6 pb-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.32em] text-[#6d7d3e] sm:text-xs">
              Client Stories
            </p>

            <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2.6rem,6vw,5.5rem)] leading-[0.92] tracking-[-0.05em] text-stone-950">
              What People
              <span className="block text-[#405821]">Are Saying.</span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
            Refined quality and elevated essentials trusted by modern fashion
            lovers worldwide.
          </p>
        </motion.div>

        {/* CREATIVE STACK */}
        <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
          {testimonialsData.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.06,
                ease: luxuryEase,
              }}
              whileHover={{
                y: -5,
              }}
              className={`group relative overflow-hidden rounded-[1.7rem] border border-white/40 bg-white/45 p-5 shadow-xl shadow-black/5 backdrop-blur-md transition duration-300 hover:shadow-black/10 sm:p-6 ${
                index === 0
                  ? "lg:col-span-5"
                  : index === 1
                    ? "lg:col-span-3 lg:mt-10"
                    : "lg:col-span-4"
              }`}
            >
              {/* QUOTE ICON */}
              <Quote className="absolute right-5 top-5 size-10 text-[#405821]/10 sm:size-14" />

              {/* USER */}
              <div className="relative z-10 flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={`h-14 w-14 rounded-full object-cover ring-2 ring-white/60 ${testimonial.imagePosition}`}
                />

                <div>
                  <h3 className="text-base font-semibold text-stone-950 sm:text-lg">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-stone-500 sm:text-[11px]">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* REVIEW */}
              <p className="relative z-10 mt-6 text-sm leading-7 text-stone-700 sm:text-[15px] sm:leading-8">
                “{testimonial.review}”
              </p>

              {/* FOOTER */}
              <div className="relative z-10 mt-6 flex items-center justify-between border-t border-black/5 pt-5">
                <Rating rating={testimonial.rating} />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#405821]">
                  Verified Client
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
