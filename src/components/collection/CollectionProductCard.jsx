import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star, Eye, Check } from "lucide-react";

import { useCart } from "../../context/CartContext";

function CollectionProductCard({ product, accent }) {
  const { addToCart } = useCart();

  const [added, setAdded] = useState(false);

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.45 }}
      className="group relative"
    >
      {/* CARD */}
      <div className="overflow-hidden rounded-[1.7rem] border border-white/45 bg-white/45 shadow-xl shadow-black/5 backdrop-blur-md transition duration-500 hover:shadow-black/10">
        {/* IMAGE */}
        <div className="relative overflow-hidden bg-[#e7e2d4]">
          <img
            src={product.image}
            alt={product.name}
            className="h-[220px] w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-105 sm:h-[300px] xl:h-[340px]"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

          {/* TOP ACTIONS */}
          <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
            <span
              className="rounded-full border border-white/30 bg-white/70 px-3 py-2 text-[9px] font-extrabold uppercase tracking-[0.24em] shadow-lg backdrop-blur-md sm:text-[10px]"
              style={{
                color: accent,
              }}
            >
              {product.category}
            </span>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white backdrop-blur-md transition duration-300 hover:bg-white"
              style={{
                color: "white",
              }}
            >
              <Heart className="size-4" />
            </button>
          </div>

          {/* QUICK ACTIONS */}
          <div className="absolute inset-x-4 bottom-4 flex translate-y-4 items-center gap-3 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
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
              className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-[10px] font-extrabold uppercase tracking-[0.22em] text-white shadow-2xl transition duration-300 ${
                added ? "bg-[#6d8a3c]" : ""
              }`}
              style={{
                backgroundColor: added ? "#6d8a3c" : accent,

                boxShadow: added
                  ? "0 10px 30px rgba(109,138,60,0.35)"
                  : `0 10px 30px ${accent}30`,
              }}
            >
              <motion.div
                initial={false}
                animate={{
                  scale: added ? [1, 1.18, 1] : 1,
                }}
                transition={{
                  duration: 0.45,
                }}
                className="flex items-center gap-2"
              >
                {added ? (
                  <>
                    <Check className="size-4 stroke-[2.4]" />
                    Added
                  </>
                ) : (
                  <>
                    <ShoppingBag className="size-4" />
                    Quick Add
                  </>
                )}
              </motion.div>
            </motion.button>

            <button
              className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-white/20 bg-white/15 text-white backdrop-blur-md transition duration-300 hover:bg-white"
              style={{
                color: "white",
              }}
            >
              <Eye className="size-4" />
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-4 sm:p-5">
          {/* RATING */}
          <div className="mb-3 flex items-center gap-1">
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

            <span className="ml-2 text-xs text-stone-500">(124)</span>
          </div>

          {/* TITLE + PRICE */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="line-clamp-2 text-base font-semibold leading-snug text-stone-950 transition duration-300 sm:text-lg">
                {product.name}
              </h3>

              <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-stone-500">
                Premium Collection
              </p>
            </div>

            <p
              className="shrink-0 text-sm font-bold sm:text-base"
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
