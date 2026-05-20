import { motion } from 'framer-motion'
import { BadgeCheck, Quote, Star } from 'lucide-react'
import { testimonialsData } from '../../data/testimonialsData'

const luxuryEase = [0.22, 1, 0.36, 1]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: luxuryEase },
  },
}

function Rating({ rating }) {
  return (
    <div className="flex items-center gap-1.5 text-[#6d7d3e]">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`size-4 stroke-[1.8] transition duration-300 group-hover:scale-110 ${
            index < rating ? 'fill-[#6d7d3e]' : 'fill-transparent opacity-35'
          }`}
        />
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -10, scale: 1.01 }}
      animate={{ y: [0, index % 2 === 0 ? -4 : 4, 0] }}
      transition={{
        y: {
          duration: 7 + index,
          repeat: Infinity,
          ease: 'easeInOut',
        },
        scale: { duration: 0.3 },
      }}
      className="group relative overflow-hidden rounded-xl border border-white/50 bg-white/38 p-7 shadow-2xl shadow-[#39461e]/8 backdrop-blur-md transition duration-500 hover:bg-white/52 hover:shadow-[#39461e]/20 sm:p-8 lg:p-9"
    >
      <div className="absolute right-6 top-6 text-[#405821]/10 transition duration-500 group-hover:text-[#405821]/18">
        <Quote className="size-16 stroke-[1.2]" />
      </div>
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/35 to-transparent opacity-70" />

      <div className="relative">
        <div className="mb-8 flex items-center gap-5">
          <div className="relative">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className={`size-18 rounded-full border border-white/70 object-cover ${testimonial.imagePosition} shadow-2xl shadow-[#405821]/18 ring-4 ring-white/35 transition duration-500 group-hover:scale-105`}
            />
            {testimonial.verified && (
              <span className="absolute -bottom-1 -right-1 grid size-7 place-items-center rounded-full bg-[#405821] text-white shadow-lg shadow-[#405821]/25">
                <BadgeCheck className="size-4 stroke-[2]" />
              </span>
            )}
          </div>

          <div>
            <h3 className="text-xl font-semibold leading-tight text-stone-950 sm:text-2xl">
              {testimonial.name}
            </h3>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-stone-600">
              {testimonial.role}
            </p>
          </div>
        </div>

        <Rating rating={testimonial.rating} />

        <p className="mt-7 text-lg leading-8 text-stone-800 sm:text-xl sm:leading-9">
          “{testimonial.review}”
        </p>

        <div className="mt-8 h-px w-full bg-gradient-to-r from-[#526632]/28 via-white/70 to-transparent" />

        <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.22em] text-[#405821]">
          {testimonial.verified ? 'Verified Client' : 'Editorial Client'}
        </p>
      </div>
    </motion.article>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#ecead7] px-5 py-20 text-stone-950 sm:px-8 sm:py-24 lg:px-14 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#ecead7] via-[#ecead7]/95 to-transparent" />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 18, 0], y: [0, -18, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[-8%] top-28 h-80 w-80 rounded-full bg-[#cdd5a6]/45 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -18, 0], y: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-16 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-[#dbc5a4]/55 blur-3xl"
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
              What Our Clients Say
            </p>
            <span className="mt-5 block h-px w-20 bg-[#526632]" />
            <h2 className="mt-7 max-w-5xl font-serif text-[clamp(3.2rem,7vw,6.8rem)] font-medium leading-[0.9] tracking-normal">
              Trusted By Thousands
              <span className="block text-[#3f571f]">
                Who Value Timeless Style
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-stone-800 sm:text-xl">
            A quiet luxury experience shaped by considered design, premium
            service, and pieces customers return to season after season.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7"
        >
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
