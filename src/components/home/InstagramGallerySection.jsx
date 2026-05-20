import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import { socialGalleryData } from "../../data/socialGalleryData";

const luxuryEase = [0.22, 1, 0.36, 1];

const reveal = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: luxuryEase,
    },
  },
};

function InstagramMark({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect
        width="17"
        height="17"
        x="3.5"
        y="3.5"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function GalleryItem({ item, index }) {
  return (
    <motion.a
      href="#social"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: luxuryEase,
      }}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden ${
        index === 0 ? "sm:col-span-2 lg:row-span-2" : ""
      }`}
      aria-label={`View Instagram post by ${item.username}`}
    >
      <div
        className={`relative overflow-hidden rounded-[2rem] ${
          index === 0
            ? "h-[420px] sm:h-[520px] lg:h-[640px]"
            : "h-[280px] sm:h-[320px] lg:h-[300px]"
        }`}
      >
        <img
          src={item.image}
          alt={`Editorial fashion post by ${item.username}`}
          className={`absolute inset-0 h-full w-full object-cover ${item.imagePosition} transition duration-[1200ms] ease-out group-hover:scale-105`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />

        {/* Center Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1 }}
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4 opacity-0 transition duration-500 group-hover:opacity-100"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md">
            <InstagramMark className="size-7 text-white" />
          </div>

          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white">
            View Post
          </p>
        </motion.div>

        {/* Bottom Content */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white sm:p-7">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#e8e4ca]">
              {item.username}
            </p>

            <div className="mt-3 flex items-center gap-2 text-sm font-bold">
              <Heart className="size-4 fill-white stroke-[1.8]" />
              {item.likes}
            </div>
          </div>

          <ArrowRight className="size-5 opacity-0 transition duration-500 group-hover:translate-x-1 group-hover:opacity-100" />
        </div>
      </div>
    </motion.a>
  );
}

export default function InstagramGallerySection() {
  return (
    <section
      id="social"
      className="relative overflow-hidden bg-[#ecead7] px-5 py-20 text-stone-950 sm:px-8 lg:px-14 lg:py-24"
    >
      {/* Ambient Glow */}
      <motion.div
        animate={{
          x: [0, 18, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[-10%] top-16 h-[24rem] w-[24rem] rounded-full bg-[#cdd5a6]/40 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -16, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-0 left-[-10%] h-[26rem] w-[26rem] rounded-full bg-[#dbc5a4]/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1700px]">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={reveal}
          className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.34em] text-[#6d7d3e]">
              FASHO Journal
            </p>

            <div className="mt-5 h-px w-20 bg-[#526632]" />

            <h2 className="mt-8 font-serif text-[clamp(3.5rem,7vw,7rem)] leading-[0.92] tracking-[-0.04em]">
              Styled By
              <span className="block text-[#405821]">The Community.</span>
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-stone-700 sm:text-xl">
            Moments captured through modern tailoring, timeless textures, and
            understated luxury around the world.
          </p>
        </motion.div>

        {/* Editorial Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {socialGalleryData.slice(0, 5).map((item, index) => (
            <GalleryItem key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.12,
            ease: luxuryEase,
          }}
          className="mt-16 flex flex-col items-start justify-between gap-8 border-t border-black/6 pt-10 lg:flex-row lg:items-center"
        >
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#405821] text-white">
              <InstagramMark className="size-6" />
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.26em] text-[#6d7d3e]">
                @FASHO.STUDIO
              </p>

              <p className="mt-2 text-lg text-stone-700">
                Daily luxury edits inspired by contemporary fashion culture.
              </p>
            </div>
          </div>

          <motion.a
            href="#social"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3 }}
            className="group inline-flex items-center gap-4 border-b border-[#405821] pb-3 text-sm font-extrabold uppercase tracking-[0.24em] text-[#405821]"
          >
            Follow On Instagram
            <ArrowRight className="size-4 transition duration-300 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
