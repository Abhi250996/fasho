import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { socialGalleryData } from "../../data/socialGalleryData";

const luxuryEase = [0.22, 1, 0.36, 1];

export default function InstagramGallerySection() {
  return (
    <section className="overflow-hidden bg-[#ecead7] px-4 py-12 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1700px]">
        {/* HEADER */}
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
          className="mb-8 flex flex-col gap-5 lg:mb-12 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            {/* LABEL */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#405821]/10 bg-white/60 px-4 py-2 shadow-sm backdrop-blur-md">
              <div className="h-2 w-2 rounded-full bg-[#405821]" />

              <span className="text-[9px] font-extrabold uppercase tracking-[0.24em] text-[#405821]">
                FASHO Community
              </span>
            </div>

            {/* TITLE */}
            <h2 className="mt-5 font-serif text-[clamp(2.4rem,5vw,5.2rem)] leading-[0.9] tracking-[-0.06em] text-stone-950">
              Worn In
              <span className="block text-[#405821]">Real Life.</span>
            </h2>
          </div>

          {/* BUTTON */}
          <a
            href="#"
            className="group inline-flex items-center gap-3 rounded-full bg-[#405821] px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white shadow-lg shadow-[#405821]/15 transition duration-300 hover:bg-[#314417]"
          >
            Follow Us
            <ArrowUpRight className="size-4 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* NEW CREATIVE LAYOUT */}
        <div className="grid gap-3 lg:grid-cols-[1.15fr_0.85fr] lg:gap-5">
          {/* LEFT LARGE CARD */}
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
            className="group relative overflow-hidden rounded-[1.8rem]"
          >
            <div className="overflow-hidden aspect-[4/4.8] sm:aspect-[4/3.4] lg:h-full">
              <img
                src={socialGalleryData[0].image}
                alt={socialGalleryData[0].username}
                className={`h-full w-full object-cover ${socialGalleryData[0].imagePosition} transition duration-[1400ms] ease-out group-hover:scale-105`}
              />
            </div>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

            {/* CONTENT */}
            <div className="absolute bottom-0 left-0 p-5 text-white sm:p-7">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-white/70">
                Editorial Feature
              </p>

              <h3 className="mt-3 max-w-lg text-2xl font-semibold leading-tight sm:text-4xl">
                Modern silhouettes crafted for elevated everyday wear.
              </h3>

              <div className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/30">
                  <img
                    src={socialGalleryData[0].image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    {socialGalleryData[0].username}
                  </p>

                  <p className="text-xs text-white/70">
                    {socialGalleryData[0].likes}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-2 gap-3 lg:gap-5">
            {socialGalleryData.slice(1, 5).map((item, index) => (
              <motion.div
                key={item.id}
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
                className="group relative overflow-hidden rounded-[1.3rem] bg-[#ddd7ca]"
              >
                {/* IMAGE */}
                <div className="overflow-hidden aspect-[1/1.15]">
                  <img
                    src={item.image}
                    alt={item.username}
                    className={`h-full w-full object-cover ${item.imagePosition} transition duration-[1200ms] ease-out group-hover:scale-105`}
                  />
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent opacity-90" />

                {/* CONTENT */}
                <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-4">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="text-[8px] font-extrabold uppercase tracking-[0.18em] text-white/65 sm:text-[9px]">
                        {item.username}
                      </p>

                      <h3 className="mt-1 text-sm font-semibold sm:text-base">
                        {item.likes}
                      </h3>
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition duration-300 group-hover:bg-white group-hover:text-stone-950">
                      <ArrowUpRight className="size-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
