import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import CollectionProductCard from "./CollectionProductCard";

export default function CollectionProductsSection({ products, accent }) {
  const [visibleProducts, setVisibleProducts] = useState(20);

  return (
    <section>
      {/* PRODUCT GRID */}
      <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
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
        <div className="mt-12 flex justify-center sm:mt-16">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setVisibleProducts((prev) => prev + 8)}
            className="group flex items-center gap-4 rounded-full px-7 py-4 text-[10px] font-extrabold uppercase tracking-[0.24em] text-white shadow-2xl transition duration-300 sm:px-9 sm:py-5 sm:text-xs"
            style={{
              backgroundColor: accent,
              boxShadow: `0 10px 30px ${accent}30`,
            }}
          >
            Load More Products
            <ArrowRight className="size-4 transition duration-300 group-hover:translate-x-1" />
          </motion.button>
        </div>
      )}
    </section>
  );
}
