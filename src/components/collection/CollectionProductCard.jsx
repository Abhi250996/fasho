import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star, Eye, Check } from "lucide-react";

import { useCart } from "../../context/CartContext";

function CollectionProductCard({ product, accent }) {
  const { addToCart } = useCart();

  const [added, setAdded] = useState(false);

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35 }}
      className="group relative"
    >
      {/* CARD */}
      <div className="overflow-hidden rounded-2xl border border-white/45 bg-white/50 shadow-lg shadow-black/5 transition duration-300 hover:shadow-black/10 sm:rounded-[1.7rem]">
        {/* IMAGE */}
        <div className="relative overflow-hidden bg-[#e7e2d4]">
          <img
            loading="lazy"
            decoding="async"
            src={product.image}
            alt={product.name}
            className="h-[170px] w-full object-cover transition duration-700 ease-out group-hover:scale-105 sm:h-[240px] lg:h-[300px] xl:h-[340px]"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent opacity-100 transition duration-300 sm:opacity-0 sm:group-hover:opacity-100" />

          {/* TOP ACTIONS */}
          <div className="absolute left-3 right-3 top-3 flex items-center justify-between sm:left-4 sm:right-4 sm:top-4">
            {/* CATEGORY */}
            <span
              className="rounded-full border border-white/30 bg-white/85 px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[0.12em] shadow-md sm:px-3 sm:py-2 sm:text-[10px] sm:tracking-[0.2em]"
              style={{
                color: accent,
              }}
            >
              {product.category}
            </span>

            {/* WISHLIST */}
            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white transition duration-300 hover:bg-white hover:text-stone-950 sm:h-10 sm:w-10">
              <Heart className="size-4" />
            </button>
          </div>

          {/* QUICK ACTIONS */}
          <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 opacity-100 transition duration-300 sm:inset-x-4 sm:bottom-4 sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
            {/* ADD TO CART */}
            <motion.button
              whileTap={{ scale: 0.96 }}
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
              className={`flex flex-1 items-center justify-center gap-1 rounded-full px-3 py-2.5 text-[9px] font-bold uppercase tracking-[0.08em] text-white shadow-lg transition duration-300 sm:gap-2 sm:px-4 sm:py-3 sm:text-[10px] sm:tracking-[0.18em] ${
                added ? "bg-[#6d8a3c]" : ""
              }`}
              style={{
                backgroundColor: added ? "#6d8a3c" : accent,

                boxShadow: added
                  ? "0 10px 30px rgba(109,138,60,0.25)"
                  : `0 10px 30px ${accent}25`,
              }}
            >
              <motion.div
                initial={false}
                animate={{
                  scale: added ? [1, 1.12, 1] : 1,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="flex items-center gap-1 sm:gap-2"
              >
                {added ? (
                  <>
                    <Check className="size-4 stroke-[2.4]" />
                    Added
                  </>
                ) : (
                  <>
                    <ShoppingBag className="size-4" />
                    Add
                  </>
                )}
              </motion.div>
            </motion.button>

            {/* QUICK VIEW */}
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white transition duration-300 hover:bg-white hover:text-stone-950 sm:h-[46px] sm:w-[46px]">
              <Eye className="size-4" />
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-3 sm:p-5">
          {/* RATING */}
          <div className="mb-2 flex items-center gap-1 sm:mb-3">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className="size-3"
                style={{
                  fill: accent,
                  color: accent,
                }}
              />
            ))}

            <span className="ml-1 text-[11px] text-stone-500 sm:ml-2 sm:text-xs">
              (124)
            </span>
          </div>

          {/* TITLE + PRICE */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              {/* TITLE */}
              <h3 className="line-clamp-2 text-sm font-semibold leading-6 text-stone-950 transition duration-300 sm:text-base lg:text-lg">
                {product.name}
              </h3>

              {/* SUBTITLE */}
              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.08em] text-stone-500 sm:mt-2 sm:text-xs sm:tracking-[0.18em]">
                Premium Collection
              </p>
            </div>

            {/* PRICE */}
            <p
              className="shrink-0 text-xs font-bold sm:text-sm lg:text-base"
              style={{
                color: accent,
              }}
            >
              {product.price}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default CollectionProductCard;
