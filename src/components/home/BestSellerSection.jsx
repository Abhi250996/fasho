import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Heart, ShoppingBag, Star, Check } from "lucide-react";

import { bestSellerProducts } from "../../data/bestSellerProducts";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const revealTransition = {
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1],
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

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
          className={`size-3 stroke-[1.8] ${
            index < rating ? "fill-[#6d7d3e]" : "fill-transparent opacity-30"
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
      whileHover={{ y: -4 }}
      className="group relative rounded-[1.1rem] border border-white/40 bg-white/35 p-2 shadow-lg shadow-black/5 backdrop-blur-sm transition duration-300 hover:shadow-black/10"
    >
      {/* IMAGE */}
      <div className="relative aspect-[3/3.45] overflow-hidden rounded-[0.9rem] bg-[#dfdcc2]">
        <img
          src={product.image}
          alt={product.name}
          className={`absolute inset-0 h-full w-full object-cover ${product.imagePosition} transition duration-[1100ms] ease-out group-hover:scale-105 group-hover:opacity-0`}
        />

        <img
          src={product.hoverImage}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full scale-105 object-cover ${product.hoverPosition} opacity-0 transition duration-[1100ms] ease-out group-hover:scale-105 group-hover:opacity-100`}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

        {/* NEW BADGE */}
        {product.isNew && (
          <span className="absolute left-3 top-3 rounded-full bg-white/80 px-3 py-1 text-[8px] font-extrabold uppercase tracking-[0.16em] text-[#405821] shadow-md backdrop-blur-md sm:text-[9px]">
            New
          </span>
        )}

        {/* WISHLIST */}
        <button
          type="button"
          className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-white/70 text-stone-950 opacity-0 shadow-md backdrop-blur-md transition duration-300 hover:bg-white hover:text-[#405821] group-hover:opacity-100 sm:size-9"
        >
          <Heart className="size-4 stroke-[1.8]" />
        </button>

        {/* QUICK ADD */}
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
          whileTap={{ scale: 0.96 }}
          className={`absolute inset-x-3 bottom-3 flex items-center justify-center rounded-full px-4 py-3 text-[9px] font-extrabold uppercase tracking-[0.16em] text-white shadow-lg transition duration-300 ${
            added ? "bg-[#6d8a3c]" : "bg-[#405821] hover:bg-[#314417]"
          }`}
        >
          <motion.div
            initial={false}
            animate={{
              scale: added ? [1, 1.14, 1] : 1,
            }}
            transition={{
              duration: 0.4,
            }}
            className="flex items-center gap-2"
          >
            {added ? (
              <>
                <Check className="size-3.5 stroke-[2.4]" />
                Added
              </>
            ) : (
              <>
                <ShoppingBag className="size-3.5 stroke-[1.9]" />
                Quick Add
              </>
            )}
          </motion.div>
        </motion.button>
      </div>

      {/* CONTENT */}
      <div className="px-1 pb-1 pt-3">
        {/* CATEGORY + RATING */}
        <div className="mb-2 flex items-center justify-between gap-2">
          <p className="text-[8px] font-extrabold uppercase tracking-[0.18em] text-[#6d7d3e] sm:text-[9px]">
            {product.category}
          </p>

          <ProductRating rating={product.rating} />
        </div>

        {/* TITLE + PRICE */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-2 max-w-[9rem] text-sm font-semibold leading-snug text-stone-950 sm:max-w-[12rem] sm:text-[15px] lg:text-base">
            {product.name}
          </h3>

          <p className="shrink-0 text-sm font-semibold text-[#405821]">
            {product.price}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function BestSellerSection() {
  return (
    <section className="relative overflow-hidden bg-[#ecead7] px-4 py-10 text-stone-950 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
      {/* GLOW */}
      <motion.div
        aria-hidden="true"
        animate={{
          y: [0, -14, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-10%] top-16 h-56 w-56 rounded-full bg-[#cdd5a6]/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1700px]">
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
            amount: 0.3,
          }}
          transition={revealTransition}
          className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#6d7d3e] sm:text-xs">
              Best Sellers
            </p>

            <div className="mt-3 h-px w-14 bg-[#526632]" />

            <h2 className="mt-4 max-w-4xl font-serif text-[clamp(2.2rem,5vw,4.8rem)] leading-[0.92] tracking-[-0.04em] text-stone-950">
              Designed To
              <span className="block text-[#3f571f]">Stand Out</span>
            </h2>
          </div>

          <motion.div
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            <Link
              to="/collections"
              className="inline-flex w-fit items-center gap-3 rounded-full border border-[#405821]/10 bg-white/50 px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#405821] shadow-md shadow-black/5 backdrop-blur-md transition duration-300 hover:bg-[#405821] hover:text-white"
            >
              View All
              <ArrowRight className="size-4 stroke-[1.8]" />
            </Link>
          </motion.div>
        </motion.div>

        {/* PRODUCTS */}
        <motion.div
          id="products"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5"
        >
          {bestSellerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
