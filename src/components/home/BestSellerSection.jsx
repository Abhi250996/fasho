import { motion } from "framer-motion";
import { ArrowRight, Heart, ShoppingBag, Star } from "lucide-react";
import { bestSellerProducts } from "../../data/bestSellerProducts";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import { Check } from "lucide-react";
const revealTransition = {
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: revealTransition,
  },
};

function ProductRating({ rating }) {
  return (
    <div className="flex items-center gap-1 text-[#6d7d3e]">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`size-3.5 stroke-[1.8] ${
            index < rating ? "fill-[#6d7d3e]" : "fill-transparent opacity-35"
          }`}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -10 }}
      className="group relative rounded-xl border border-white/45 bg-white/35 p-3 shadow-2xl shadow-[#39461e]/8 backdrop-blur-sm transition-shadow duration-500 hover:shadow-[#39461e]/22"
    >
      <div className="relative aspect-[3/4.15] overflow-hidden rounded-lg bg-[#dfdcc2]">
        <img
          src={product.image}
          alt={product.name}
          className={`absolute inset-0 h-full w-full object-cover ${product.imagePosition} transition duration-[1100ms] ease-out group-hover:scale-110 group-hover:opacity-0`}
        />

        <img
          src={product.hoverImage}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full scale-105 object-cover ${product.hoverPosition} opacity-0 transition duration-[1100ms] ease-out group-hover:scale-110 group-hover:opacity-100`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/42 via-stone-950/0 to-[#f4ecd6]/5 opacity-0 transition duration-500 group-hover:opacity-100" />

        {product.isNew && (
          <span className="absolute left-4 top-4 rounded-full border border-white/45 bg-white/65 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#405821] shadow-lg shadow-stone-950/5 backdrop-blur-md">
            New
          </span>
        )}

        <button
          type="button"
          className="absolute right-4 top-4 grid size-11 translate-y-2 place-items-center rounded-full border border-white/45 bg-white/55 text-stone-950 opacity-0 shadow-xl shadow-stone-950/10 backdrop-blur-md transition duration-500 hover:bg-white hover:text-[#405821] group-hover:translate-y-0 group-hover:opacity-100"
          aria-label={`Add ${product.name} to wishlist`}
        >
          <Heart className="size-5 stroke-[1.8]" />
        </button>

        <motion.button
          type="button"
          onClick={(e) => {
            e.preventDefault();

            addToCart({
              id: product.id,
              name: product.name,
              image: product.image,
              price: product.price,
              quantity: 1,
            });

            setAdded(true);

            setTimeout(() => {
              setAdded(false);
            }, 1800);
          }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className={`absolute inset-x-4 bottom-4 z-20 flex translate-y-5 items-center justify-center gap-3 rounded-full px-5 py-4 text-xs font-extrabold uppercase tracking-[0.2em] text-white shadow-2xl transition duration-500 group-hover:translate-y-0 ${
            added
              ? "bg-[#6d8a3c] shadow-[#6d8a3c]/40"
              : "bg-[#405821] shadow-[#405821]/30 hover:bg-[#314417] hover:shadow-[#405821]/45"
          }`}
        >
          <motion.div
            initial={false}
            animate={{
              scale: added ? [1, 1.25, 1] : 1,
            }}
            transition={{ duration: 0.45 }}
            className="flex items-center gap-3"
          >
            {added ? (
              <>
                <Check className="size-4 stroke-[2.4]" />
                Added To Cart
              </>
            ) : (
              <>
                <ShoppingBag className="size-4 stroke-[1.9]" />
                Quick Add
                <ArrowRight className="size-4 stroke-[1.9] transition duration-300 group-hover:translate-x-1" />
              </>
            )}
          </motion.div>
        </motion.button>
      </div>

      <div className="px-1 pb-2 pt-5">
        <div className="mb-3 flex items-center justify-between gap-4">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d7d3e]">
            {product.category}
          </p>

          <ProductRating rating={product.rating} />
        </div>

        <div className="flex items-start justify-between gap-4">
          <h3 className="max-w-[14rem] text-xl font-semibold leading-snug text-stone-950 sm:text-2xl">
            {product.name}
          </h3>

          <p className="text-lg font-semibold text-[#405821]">
            {product.price}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function BestSellerSection() {
  return (
    <section className="relative overflow-hidden bg-[#ecead7] px-5 py-20 text-stone-950 sm:px-8 sm:py-24 lg:px-14 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#ecead7] via-[#ecead7]/94 to-transparent" />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -18, 0], x: [0, 14, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-8%] top-20 h-80 w-80 rounded-full bg-[#cdd5a6]/45 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 22, 0], x: [0, -12, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-16 left-[-10%] h-96 w-96 rounded-full bg-[#dcc8aa]/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1620px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={revealTransition}
          className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.34em] text-[#6d7d3e] sm:text-lg">
              Best Selling Pieces
            </p>
            <span className="mt-5 block h-px w-20 bg-[#526632]" />
            <h2 className="mt-7 max-w-5xl font-serif text-[clamp(3.4rem,7.8vw,7.3rem)] font-medium leading-[0.88] tracking-normal">
              Designed To
              <span className="block text-[#3f571f]">Stand Out</span>
            </h2>
          </div>

          <motion.a
            href="#products"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex w-fit items-center gap-5 rounded-full border border-[#405821]/25 bg-white/45 px-7 py-4 text-xs font-extrabold uppercase tracking-[0.22em] text-[#405821] shadow-xl shadow-[#39461e]/8 backdrop-blur-md transition duration-300 hover:bg-[#405821] hover:text-white hover:shadow-[#405821]/25 sm:text-sm"
          >
            View All Products
            <ArrowRight className="size-5 stroke-[1.8]" />
          </motion.a>
        </motion.div>

        <motion.div
          id="products"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 xl:grid-cols-4"
        >
          {bestSellerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
