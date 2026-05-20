import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Heart, ShoppingBag, Star } from "lucide-react";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { trendingProducts } from "../../data/trendingProducts";
import { useCart } from "../../context/CartContext";

const tabs = ["Trending", "New Season", "Limited Edition"];
const luxuryEase = [0.22, 1, 0.36, 1];

const revealTransition = {
  duration: 0.9,
  ease: luxuryEase,
};

const badgeStyles = {
  NEW: "bg-white/70 text-[#405821]",
  LIMITED: "bg-[#405821]/80 text-white",
  TRENDING: "bg-[#e9e5c9]/75 text-stone-950",
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

function TrendingProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={revealTransition}
      whileHover={{ y: -10 }}
      className="group relative h-full rounded-xl border border-white/45 bg-white/35 p-3 shadow-2xl shadow-[#39461e]/8 backdrop-blur-sm transition-shadow duration-500 hover:shadow-[#39461e]/24"
    >
      <div className="relative aspect-[3/4.1] overflow-hidden rounded-lg bg-[#dfdcc2]">
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

        <span
          className={`absolute left-4 top-4 rounded-full border border-white/45 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em] shadow-lg shadow-stone-950/5 backdrop-blur-md ${badgeStyles[product.badge]}`}
        >
          {product.badge}
        </span>

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
              scale: added ? [1, 1.2, 1] : 1,
            }}
            transition={{ duration: 0.45 }}
            className="flex items-center gap-3"
          >
            {added ? (
              <>
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Check className="size-4 stroke-[2.5]" />
                </motion.div>
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

        {added && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
          >
            <motion.div
              animate={{
                y: [-6, -18],
                opacity: [1, 0],
                scale: [1, 1.08],
              }}
              transition={{ duration: 1.2 }}
              className="rounded-full border border-white/30 bg-[#405821]/92 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.24em] text-white shadow-2xl shadow-[#405821]/30 backdrop-blur-md"
            >
              Added
            </motion.div>
          </motion.div>
        )}
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
export default function TrendingProductsCarousel() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const swiperRef = useRef(null);

  const filteredProducts = useMemo(
    () =>
      trendingProducts.filter((product) => product.tabs.includes(activeTab)),
    [activeTab],
  );

  return (
    <section className="relative overflow-hidden bg-[#ecead7] px-5 py-20 text-stone-950 sm:px-8 sm:py-24 lg:px-14 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#ecead7] via-[#ecead7]/94 to-transparent" />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 18, 0], y: [0, -18, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-8%] top-28 h-80 w-80 rounded-full bg-[#cdd5a6]/45 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -16, 0], y: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-[-9%] h-96 w-96 rounded-full bg-[#dbc5a4]/55 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1620px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={revealTransition}
          className="mb-10 flex flex-col gap-8 lg:mb-12 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.34em] text-[#6d7d3e] sm:text-lg">
              Curated Essentials
            </p>
            <span className="mt-5 block h-px w-20 bg-[#526632]" />
            <h2 className="mt-7 max-w-5xl font-serif text-[clamp(3.4rem,7.8vw,7.3rem)] font-medium leading-[0.88] tracking-normal">
              Trending
              <span className="block text-[#3f571f]">Right Now</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className="grid size-12 place-items-center rounded-full border border-[#405821]/25 bg-white/45 text-[#405821] shadow-xl shadow-[#39461e]/8 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#405821] hover:text-white hover:shadow-[#405821]/25"
              aria-label="Previous trending products"
            >
              <ArrowLeft className="size-5 stroke-[1.9]" />
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className="grid size-12 place-items-center rounded-full border border-[#405821]/25 bg-white/45 text-[#405821] shadow-xl shadow-[#39461e]/8 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#405821] hover:text-white hover:shadow-[#405821]/25"
              aria-label="Next trending products"
            >
              <ArrowRight className="size-5 stroke-[1.9]" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ ...revealTransition, delay: 0.08 }}
          className="mb-10 flex flex-wrap gap-3"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full border px-5 py-3 text-xs font-extrabold uppercase tracking-[0.2em] shadow-lg backdrop-blur-md transition duration-300 sm:text-sm ${
                activeTab === tab
                  ? "border-[#405821] bg-[#405821] text-white shadow-[#405821]/20"
                  : "border-[#405821]/20 bg-white/38 text-[#405821] shadow-[#39461e]/6 hover:bg-white/65"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={revealTransition}
          className="-mx-5 overflow-hidden px-5 sm:-mx-8 sm:px-8 lg:-mx-14 lg:px-14"
        >
          <Swiper
            modules={[FreeMode]}
            loop
            freeMode={{ enabled: true, momentum: true }}
            grabCursor
            speed={850}
            spaceBetween={24}
            slidesPerView={1.2}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 26,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 28,
              },
            }}
            className="!overflow-visible pb-6"
          >
            {filteredProducts.map((product) => (
              <SwiperSlide
                key={`${activeTab}-${product.id}`}
                className="h-auto"
              >
                <TrendingProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
