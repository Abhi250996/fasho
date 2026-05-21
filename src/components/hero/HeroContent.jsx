import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { motion } from "framer-motion";
import { navItems } from "../../constants/homeData";
import { ArrowRight, Menu, Search, ShoppingBag, User } from "lucide-react";

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
      className="relative z-20 flex max-w-3xl flex-col items-start px-5 pt-32 text-left sm:px-8 sm:pt-40 lg:w-[52%] lg:px-20 lg:pt-0 xl:px-36"
    >
      <div data-hero-reveal className="mb-6">
        <p className="text-sm font-extrabold uppercase tracking-[0.34em] text-[#6d7d3e] sm:text-lg">
          New Season '24
        </p>
        <span className="mt-5 block h-px w-20 bg-[#526632]" />
      </div>

      <h1
        data-hero-reveal
        className="max-w-4xl font-serif text-[clamp(4.6rem,14vw,9.8rem)] font-medium leading-[0.82] tracking-normal text-stone-950"
      >
        Elevated.
        <span className="block text-[#3f571f]">Everyday.</span>
      </h1>

      <p
        data-hero-reveal
        className="mt-7 max-w-lg text-xl leading-8 text-stone-900 sm:text-2xl sm:leading-9"
      >
        Timeless style. Premium quality.
        <span className="block">Designed to define you.</span>
      </p>

      <motion.a
        data-hero-reveal
        href="#collections"
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-9 inline-flex items-center gap-8 rounded-sm bg-[#405821] px-7 py-5 text-sm font-extrabold uppercase tracking-[0.24em] text-white shadow-2xl shadow-[#405821]/25 transition duration-300 hover:bg-[#314417] hover:shadow-[#405821]/40 sm:px-9"
      >
        Shop Collection
        <ArrowRight className="size-6 stroke-[1.8]" />
      </motion.a>
    </motion.div>
  );
}
export default HeroContent;
