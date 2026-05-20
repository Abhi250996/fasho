import { motion } from 'framer-motion'
import { ArrowRight, Heart } from 'lucide-react'
import { socialGalleryData } from '../../data/socialGalleryData'

const luxuryEase = [0.22, 1, 0.36, 1]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: luxuryEase },
  },
}

function InstagramMark({ className = '' }) {
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
  )
}

function GalleryItem({ item }) {
  return (
    <motion.a
      href="#social"
      variants={itemVariants}
      whileHover={{ y: -10 }}
      className="group relative min-h-[430px] overflow-hidden rounded-xl border border-white/45 bg-white/35 shadow-2xl shadow-[#39461e]/10 backdrop-blur-sm transition-shadow duration-500 hover:shadow-[#39461e]/25 sm:min-h-[500px] lg:min-h-[520px]"
      aria-label={`View Instagram post by ${item.username}`}
    >
      <img
        src={item.image}
        alt={`Editorial fashion post by ${item.username}`}
        className={`absolute inset-0 h-full w-full object-cover ${item.imagePosition} transition duration-[1100ms] ease-out group-hover:scale-110`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/42 via-stone-950/4 to-[#f4ecd6]/8 transition duration-500 group-hover:from-stone-950/78 group-hover:via-[#405821]/25" />
      <div className="absolute inset-0 bg-black/0 backdrop-blur-0 transition duration-500 group-hover:bg-black/18 group-hover:backdrop-blur-[2px]" />

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 translate-y-4 flex-col items-center gap-4 text-white opacity-0 transition duration-500 group-hover:-translate-y-1/2 group-hover:opacity-100">
        <span className="grid size-16 place-items-center rounded-full border border-white/45 bg-white/18 shadow-2xl shadow-black/20 backdrop-blur-md">
          <InstagramMark className="size-7" />
        </span>
        <span className="text-xs font-extrabold uppercase tracking-[0.24em]">
          View Post
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 text-white transition duration-500 sm:p-8">
        <div className="translate-y-2 opacity-90 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#e9e5c9]">
            {item.username}
          </p>
          <div className="mt-3 flex items-center gap-2 text-sm font-bold">
            <Heart className="size-4 fill-white stroke-[1.8]" />
            {item.likes}
          </div>
        </div>
        <ArrowRight className="size-6 stroke-[1.8] opacity-0 transition duration-500 group-hover:translate-x-1 group-hover:opacity-100" />
      </div>
    </motion.a>
  )
}

export default function InstagramGallerySection() {
  return (
    <section
      id="social"
      className="relative overflow-hidden bg-[#ecead7] px-5 py-20 text-stone-950 sm:px-8 sm:py-24 lg:px-14 lg:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#ecead7] via-[#ecead7]/95 to-transparent" />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 16, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[-8%] top-28 h-80 w-80 rounded-full bg-[#cdd5a6]/45 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -18, 0], y: [0, 20, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-16 left-[-10%] h-[28rem] w-[28rem] rounded-full bg-[#dbc5a4]/55 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1620px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.9, ease: luxuryEase }}
          className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.34em] text-[#6d7d3e] sm:text-lg">
              Follow Our Journey
            </p>
            <span className="mt-5 block h-px w-20 bg-[#526632]" />
            <h2 className="mt-7 max-w-5xl font-serif text-[clamp(3.2rem,7vw,6.8rem)] font-medium leading-[0.9] tracking-normal">
              Styled By The
              <span className="block text-[#3f571f]">Community</span>
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-stone-800 sm:text-xl">
            Everyday moments, travel layers, and quiet statements from a modern
            community shaping luxury in motion.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.14 }}
          className="grid gap-5 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3"
        >
          {socialGalleryData.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, delay: 0.12, ease: luxuryEase }}
          className="mt-10 flex flex-col items-center justify-between gap-5 rounded-xl border border-white/50 bg-white/38 p-6 text-center shadow-2xl shadow-[#39461e]/8 backdrop-blur-md sm:flex-row sm:text-left lg:mt-12"
        >
          <div className="flex items-center gap-4">
            <span className="grid size-13 place-items-center rounded-full bg-[#405821] text-white shadow-xl shadow-[#405821]/22">
              <InstagramMark className="size-6" />
            </span>
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#6d7d3e]">
                @FASHO.STUDIO
              </p>
              <p className="mt-1 text-lg text-stone-800">
                Daily edits in timeless modern luxury.
              </p>
            </div>
          </div>

          <motion.a
            href="#social"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-4 rounded-full bg-[#405821] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.22em] text-white shadow-2xl shadow-[#405821]/24 transition duration-300 hover:bg-[#314417] hover:shadow-[#405821]/42 sm:text-sm"
          >
            Follow Us
            <ArrowRight className="size-5 stroke-[1.8]" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
