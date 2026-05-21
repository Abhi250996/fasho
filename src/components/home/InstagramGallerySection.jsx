import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { socialGalleryData } from "../../data/socialGalleryData";

const luxuryEase = [0.22, 1, 0.36, 1];

export default function InstagramGallerySection() {
  return (
    <section className="overflow-hidden bg-[#ecead7] px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1700px]">
        {/* HEADER */}
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
          className="mb-6 flex flex-col gap-4 sm:mb-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            {/* LABEL */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#405821]/10 bg-white/60 px-3 py-1.5 shadow-sm backdrop-blur-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-[#405821]" />

              <span className="text-[8px] font-extrabold uppercase tracking-[0.22em] text-[#405821]">
                FASHO Community
              </span>
            </div>

            {/* TITLE */}
            <h2 className="mt-4 font-serif text-[clamp(2rem,5vw,4rem)] leading-[0.92] tracking-[-0.05em] text-stone-950">
              Real Style.
              <span className="block text-[#405821]">Everyday Moments.</span>
            </h2>
          </div>

          {/* BUTTON */}
          <a
            href="#"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#405821] px-4 py-2.5 text-[9px] font-extrabold uppercase tracking-[0.18em] text-white shadow-md shadow-[#405821]/15 transition duration-300 hover:bg-[#314417]"
          >
            Follow Us
            <ArrowUpRight className="size-3.5 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* SMALL CREATIVE GRID */}
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {socialGalleryData.slice(0, 5).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 16,
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
                delay: index * 0.04,
                ease: luxuryEase,
              }}
              whileHover={{
                y: -3,
              }}
              className="group relative overflow-hidden rounded-[1rem] bg-[#ddd7ca]"
            >
              {/* IMAGE */}
              <div className="overflow-hidden aspect-[1/1.2]">
                <img
                  loading="lazy"
                  decoding="async"
                  src={item.image}
                  alt={item.username}
                  className={`h-full w-full object-cover ${item.imagePosition} transition duration-700 ease-out group-hover:scale-105`}
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

              {/* CONTENT */}
              <div className="absolute inset-x-0 bottom-0 p-2.5 text-white sm:p-3">
                <div className="flex items-end justify-between gap-2">
                  <div>
                    <p className="text-[7px] font-extrabold uppercase tracking-[0.16em] text-white/70">
                      {item.username}
                    </p>

                    <h3 className="mt-1 text-xs font-semibold sm:text-sm">
                      {item.likes}
                    </h3>
                  </div>

                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition duration-300 group-hover:bg-white group-hover:text-stone-950">
                    <ArrowUpRight className="size-3" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
