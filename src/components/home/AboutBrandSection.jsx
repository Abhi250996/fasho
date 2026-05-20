import { motion } from 'framer-motion'
import { Feather, Globe2, Leaf, Ruler, Scissors, Sparkles } from 'lucide-react'
import heroBg from '../../assets/hero-bg.png'

const luxuryEase = [0.22, 1, 0.36, 1]

const stats = [
  { value: '10+', label: 'Years Craftsmanship' },
  { value: '50K+', label: 'Happy Customers' },
  { value: '100%', label: 'Premium Fabrics' },
  { value: 'Global', label: 'Worldwide Shipping' },
]

const craftPoints = [
  { icon: Feather, text: 'Hand-selected fabrics' },
  { icon: Ruler, text: 'Precision tailoring' },
  { icon: Leaf, text: 'Sustainable production' },
  { icon: Scissors, text: 'Timeless construction' },
]

const reveal = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: luxuryEase },
  },
}

export default function AboutBrandSection() {
  return (
    <section className="relative overflow-hidden bg-[#ecead7] px-5 py-20 text-stone-950 sm:px-8 sm:py-24 lg:px-14 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#ecead7] via-[#ecead7]/95 to-transparent" />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 18, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[-10%] top-28 h-96 w-96 rounded-full bg-[#cdd5a6]/45 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -16, 0], y: [0, 22, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-16 left-[-10%] h-[28rem] w-[28rem] rounded-full bg-[#dbc5a4]/55 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1620px]">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center xl:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
            className="relative"
          >
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.7, ease: luxuryEase }}
              className="relative overflow-hidden rounded-2xl border border-white/45 bg-white/30 shadow-2xl shadow-[#39461e]/14 backdrop-blur-sm"
            >
              <motion.img
                src={heroBg}
                alt="Luxury craftsmanship editorial"
                animate={{ y: [0, -14, 0], scale: [1.03, 1.065, 1.03] }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="h-[560px] w-full object-cover object-[62%_center] sm:h-[680px] lg:h-[820px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-stone-950/6 to-[#f4ecd6]/10" />
              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/40 bg-white/22 p-6 text-white shadow-2xl shadow-stone-950/15 backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-sm">
                <div className="mb-4 flex items-center gap-3">
                  <Sparkles className="size-5 text-[#e9e5c9]" />
                  <p className="text-xs font-extrabold uppercase tracking-[0.24em]">
                    Atelier Detail
                  </p>
                </div>
                <p className="text-lg leading-7 text-white/90">
                  Quiet construction, refined textures, and silhouettes made to
                  move naturally through modern life.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.15, ease: luxuryEase }}
              className="mt-6 grid gap-4 sm:grid-cols-2"
            >
              {craftPoints.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-4 rounded-xl border border-white/45 bg-white/35 px-5 py-4 shadow-xl shadow-[#39461e]/7 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/55 hover:shadow-[#39461e]/14"
                >
                  <span className="grid size-11 place-items-center rounded-full bg-[#728341] text-white shadow-lg shadow-[#526632]/18">
                    <Icon className="size-5 stroke-[1.8]" />
                  </span>
                  <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-stone-900">
                    {text}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={reveal}
              className="mx-auto max-w-4xl text-center lg:mx-0 lg:text-left"
            >
              <p className="text-sm font-extrabold uppercase tracking-[0.34em] text-[#6d7d3e] sm:text-lg">
                Our Philosophy
              </p>
              <span className="mx-auto mt-5 block h-px w-20 bg-[#526632] lg:mx-0" />

              <h2 className="mt-7 font-serif text-[clamp(3.2rem,7vw,6.8rem)] font-medium leading-[0.9] tracking-normal">
                Premium Fabrics.
                <span className="block text-[#3f571f]">
                  Timeless Silhouettes.
                </span>
                <span className="block">Designed For Everyday Luxury.</span>
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-stone-800 sm:text-xl sm:leading-9 lg:mx-0">
                FASHO is built around elevated essentials with lasting presence.
                Every piece is shaped through considered fabric choices,
                precise proportions, and a restrained design language made for
                the rhythm of modern living.
              </p>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl sm:leading-9 lg:mx-0">
                We believe luxury should feel effortless: refined enough for a
                destination, comfortable enough for every day, and crafted to
                remain relevant season after season.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, delay: 0.16, ease: luxuryEase }}
              className="mt-10 grid gap-4 sm:grid-cols-2"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -6, scale: 1.015 }}
                  animate={{ y: [0, index % 2 === 0 ? -5 : 5, 0] }}
                  transition={{
                    y: {
                      duration: 6 + index,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                    scale: { duration: 0.3 },
                  }}
                  className="rounded-xl border border-white/50 bg-white/38 p-6 text-center shadow-2xl shadow-[#39461e]/8 backdrop-blur-md transition duration-300 hover:bg-white/55 hover:shadow-[#39461e]/16 lg:text-left"
                >
                  <p className="font-serif text-5xl font-medium leading-none text-[#405821] sm:text-6xl">
                    {stat.value}
                  </p>
                  <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.2em] text-stone-800">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.85, delay: 0.22, ease: luxuryEase }}
              className="mt-8 flex items-center justify-center gap-4 rounded-xl border border-white/45 bg-white/28 p-5 text-[#405821] shadow-xl shadow-[#39461e]/7 backdrop-blur-md lg:justify-start"
            >
              <Globe2 className="size-6 stroke-[1.8]" />
              <p className="text-sm font-extrabold uppercase tracking-[0.18em]">
                Crafted with intention. Delivered worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
