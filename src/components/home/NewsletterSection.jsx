import { motion } from 'framer-motion'
import { ArrowRight, Mail, Sparkles } from 'lucide-react'

const luxuryEase = [0.22, 1, 0.36, 1]

export default function NewsletterSection() {
  return (
    <section className="relative overflow-hidden bg-[#ecead7] px-5 py-20 text-stone-950 sm:px-8 sm:py-24 lg:px-14 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#ecead7] via-[#ecead7]/95 to-transparent" />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 18, 0], y: [0, -22, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[-9%] top-20 h-96 w-96 rounded-full bg-[#cdd5a6]/45 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -18, 0], y: [0, 20, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 right-[-10%] h-[30rem] w-[30rem] rounded-full bg-[#dbc5a4]/55 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1620px]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.95, ease: luxuryEase }}
          className="relative overflow-hidden rounded-2xl border border-white/50 bg-white/34 px-6 py-16 text-center shadow-2xl shadow-[#39461e]/12 backdrop-blur-md sm:px-10 sm:py-20 lg:px-20 lg:py-28"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.72),transparent_36%),linear-gradient(135deg,rgba(242,237,214,0.82),rgba(221,226,187,0.58),rgba(236,218,194,0.62))]" />
          <div className="absolute left-8 top-8 hidden size-28 rounded-full border border-white/45 bg-white/18 backdrop-blur-md sm:block" />
          <div className="absolute bottom-8 right-8 hidden h-32 w-32 rounded-full border border-[#405821]/15 bg-[#748542]/12 backdrop-blur-sm lg:block" />

          <div className="relative mx-auto max-w-4xl">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="mx-auto mb-6 grid size-14 place-items-center rounded-full bg-[#405821] text-white shadow-2xl shadow-[#405821]/24"
            >
              <Sparkles className="size-6 stroke-[1.8]" />
            </motion.div>

            <p className="text-sm font-extrabold uppercase tracking-[0.34em] text-[#6d7d3e] sm:text-lg">
              Exclusive Access
            </p>
            <span className="mx-auto mt-5 block h-px w-20 bg-[#526632]" />

            <h2 className="mx-auto mt-7 max-w-5xl font-serif text-[clamp(3.2rem,7vw,6.8rem)] font-medium leading-[0.9] tracking-normal">
              Join The FASHO
              <span className="block text-[#3f571f]">Community</span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-stone-800 sm:text-xl sm:leading-9">
              Receive early access to exclusive collections, private edits,
              luxury fashion updates, and curated inspiration designed for a
              refined modern wardrobe.
            </p>

            <motion.form
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.85, delay: 0.12, ease: luxuryEase }}
              className="mx-auto mt-10 flex w-full max-w-3xl flex-col gap-4 rounded-[2rem] border border-white/55 bg-white/42 p-3 shadow-2xl shadow-[#39461e]/10 backdrop-blur-md focus-within:border-[#405821]/35 focus-within:shadow-[#405821]/20 sm:flex-row sm:rounded-full"
            >
              <label className="flex flex-1 items-center gap-4 rounded-full px-4 py-2 text-left sm:px-5">
                <Mail className="size-5 shrink-0 text-[#6d7d3e] stroke-[1.8]" />
                <span className="sr-only">Email address</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="min-h-12 w-full bg-transparent text-base font-medium text-stone-950 outline-none placeholder:text-stone-500 sm:text-lg"
                />
              </label>

              <motion.button
                type="submit"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-4 rounded-full bg-[#405821] px-8 py-4 text-xs font-extrabold uppercase tracking-[0.22em] text-white shadow-2xl shadow-[#405821]/24 transition duration-300 hover:bg-[#314417] hover:shadow-[#405821]/45 sm:text-sm"
              >
                Subscribe
                <ArrowRight className="size-5 stroke-[1.8]" />
              </motion.button>
            </motion.form>

            <p className="mx-auto mt-6 max-w-lg text-sm leading-6 text-stone-600">
              No noise. Just considered releases, editorial styling, and
              first-look access.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
