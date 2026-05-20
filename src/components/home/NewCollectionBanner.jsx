import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import heroBg from '../../assets/hero-bg.png'

const luxuryEase = [0.22, 1, 0.36, 1]

export default function NewCollectionBanner() {
  return (
    <section className="relative overflow-hidden bg-[#ecead7] px-5 py-20 text-stone-950 sm:px-8 sm:py-24 lg:px-14 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#ecead7] via-[#ecead7]/95 to-transparent" />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 18, 0], y: [0, -16, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[-9%] top-24 h-96 w-96 rounded-full bg-[#cfd7a8]/45 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -20, 0], y: [0, 18, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-12 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-[#dbc5a4]/55 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.95, ease: luxuryEase }}
        className="relative mx-auto grid max-w-[1620px] overflow-hidden rounded-2xl border border-white/45 bg-white/30 shadow-2xl shadow-[#39461e]/14 backdrop-blur-sm lg:min-h-[720px] lg:grid-cols-[1.08fr_0.92fr]"
      >
        <motion.div
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.7, ease: luxuryEase }}
          className="relative min-h-[440px] overflow-hidden bg-[#dfdcc2] sm:min-h-[560px] lg:min-h-full"
        >
          <motion.img
            src={heroBg}
            alt="New season luxury fashion campaign"
            animate={{ y: [0, -16, 0], scale: [1.03, 1.07, 1.03] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="h-full w-full object-cover object-[64%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/28 via-transparent to-[#ecead7]/22" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-stone-950/42 to-transparent lg:hidden" />
        </motion.div>

        <div className="relative flex items-center px-6 py-14 sm:px-10 sm:py-16 lg:px-16 xl:px-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.72),transparent_34%),linear-gradient(135deg,rgba(242,237,214,0.86),rgba(221,226,187,0.68))]" />
          <div className="absolute left-6 top-6 hidden size-24 rounded-full border border-white/45 bg-white/20 backdrop-blur-md sm:block" />
          <div className="absolute bottom-8 right-8 hidden h-28 w-28 rounded-full border border-[#405821]/15 bg-[#748542]/12 backdrop-blur-sm lg:block" />

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            animate={{ y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.8, ease: luxuryEase },
              y: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="relative mx-auto max-w-2xl text-center lg:mx-0 lg:text-left"
          >
            <div className="mb-6 flex items-center justify-center gap-4 lg:justify-start">
              <Sparkles className="size-5 text-[#6d7d3e]" />
              <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-[#6d7d3e] sm:text-sm">
                New Season Collection
              </p>
            </div>

            <h2 className="font-serif text-[clamp(3.4rem,7.4vw,7.2rem)] font-medium leading-[0.88] tracking-normal">
              Crafted For
              <span className="block text-[#3f571f]">Modern Living</span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-stone-800 sm:text-xl sm:leading-9 lg:mx-0">
              A refined edit of timeless layers, tactile textures, and elevated
              essentials designed for quiet confidence from sunrise to evening.
            </p>

            <motion.a
              href="#collections"
              whileHover={{ y: -3, scale: 1.025 }}
              whileTap={{ scale: 0.98 }}
              className="mt-10 inline-flex items-center gap-5 rounded-full bg-[#405821] px-8 py-5 text-xs font-extrabold uppercase tracking-[0.22em] text-white shadow-2xl shadow-[#405821]/25 transition duration-300 hover:bg-[#314417] hover:shadow-[#405821]/45 sm:text-sm"
            >
              Explore Collection
              <ArrowRight className="size-5 stroke-[1.9] transition duration-300 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
