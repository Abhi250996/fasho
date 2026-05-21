import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { revealTransition } from "../../constants/homeData";
import heroBg from "../../assets/hero-bg.png";

function CategoryCard({ card, index }) {
  return (
    <motion.a
      href="#collections"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ ...revealTransition, delay: index * 0.08 }}
      whileHover={{ y: -10 }}
      className={`group relative min-h-[430px] overflow-hidden rounded-xl border border-white/45 bg-white/35 shadow-2xl shadow-[#39461e]/10 backdrop-blur-sm transition-shadow duration-500 hover:shadow-[#39461e]/25 ${card.className}`}
    >
      <motion.img
        src={heroBg}
        alt={`${card.title} fashion collection`}
        className={`absolute inset-0 h-full w-full object-cover ${card.imagePosition}`}
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/18 to-[#f4ecd6]/6 transition duration-500 group-hover:from-stone-950/82 group-hover:via-[#405821]/32" />
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1d260d]/70 to-transparent" />
      </div>

      <span className="absolute right-6 top-6 grid size-12 translate-y-2 place-items-center rounded-full border border-white/35 bg-white/20 text-white opacity-0 shadow-xl shadow-black/10 backdrop-blur-md transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <ArrowRight className="size-5 stroke-[1.8]" />
      </span>

      <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9 lg:p-11">
        <motion.div
          initial={false}
          className="transition duration-500 group-hover:-translate-y-3"
        >
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#e9e5c9] sm:text-sm">
            {card.label}
          </p>
          <h3 className="mt-3 max-w-lg font-serif text-5xl font-medium leading-none tracking-normal sm:text-6xl lg:text-7xl">
            {card.title}
          </h3>
          <div className="mt-5 flex translate-y-4 items-center gap-3 text-xs font-extrabold uppercase tracking-[0.22em] text-white/95 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:text-sm">
            Explore Collection
            <ArrowRight className="size-5 stroke-[1.8]" />
          </div>
        </motion.div>
      </div>
    </motion.a>
  );
}
export default CategoryCard;
