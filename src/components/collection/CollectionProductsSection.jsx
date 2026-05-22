import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import CollectionProductCard from "./CollectionProductCard";

export default function CollectionProductsSection({ products, accent }) {
  const [visibleProducts, setVisibleProducts] = useState(8);

  return (
    <section>
      {/* PRODUCT GRID */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5">
        {products.slice(0, visibleProducts).map((product) => (
          <CollectionProductCard
            key={product.id}
            product={product}
            accent={accent}
          />
        ))}
      </div>

      {/* LOAD MORE */}
      {visibleProducts < products.length && (
        <div className="mt-10 flex justify-center sm:mt-14">
          <motion.button
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={() => setVisibleProducts((prev) => prev + 8)}
            className="group flex items-center gap-2 rounded-full px-5 py-3 text-[9px] font-bold uppercase tracking-[0.12em] text-white shadow-lg transition duration-300 sm:gap-3 sm:px-7 sm:py-4 sm:text-[10px] sm:tracking-[0.2em]"
            style={{
              backgroundColor: accent,
              boxShadow: `0 10px 25px ${accent}25`,
            }}
          >
            Load More
            <ArrowRight className="size-4 transition duration-300 group-hover:translate-x-1" />
          </motion.button>
        </div>
      )}
    </section>
  );
}
