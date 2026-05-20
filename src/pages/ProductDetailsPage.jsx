import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { useCart } from "../context/CartContext";
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  Heart,
  Lock,
  Minus,
  PackageCheck,
  Plus,
  RefreshCw,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";
import {
  productDetailsData,
  productReviews,
  recommendedProducts,
} from "../data/productDetailsData";

const luxuryEase = [0.22, 1, 0.36, 1];
const product = productDetailsData;

const { addToCart } = useCart();

const [activeImage, setActiveImage] = useState(0);
const shippingItems = [
  { icon: Truck, title: "Free Shipping", copy: "On orders over $99" },
  { icon: RefreshCw, title: "Easy Returns", copy: "14 day return window" },
  { icon: ShieldCheck, title: "Secure Payments", copy: "Protected checkout" },
  {
    icon: PackageCheck,
    title: "Delivery Estimate",
    copy: "3 to 5 business days",
  },
];

function Rating({ rating, count }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex items-center gap-1 text-[#6d7d3e]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`size-4 stroke-[1.8] ${
              index < rating ? "fill-[#6d7d3e]" : "fill-transparent opacity-35"
            }`}
          />
        ))}
      </div>
      {count && (
        <p className="text-sm font-semibold text-stone-700">{count} reviews</p>
      )}
    </div>
  );
}

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#526632]/15 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-5 text-left"
      >
        <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-stone-950">
          {item.title}
        </span>
        <ChevronDown
          className={`size-5 text-[#405821] transition duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: luxuryEase }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-base leading-8 text-stone-700">
              {item.content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function RecommendedCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="group rounded-xl border border-white/45 bg-white/35 p-3 shadow-2xl shadow-[#39461e]/8 backdrop-blur-sm transition-shadow duration-500 hover:shadow-[#39461e]/22"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-[#dfdcc2]">
        <img
          src={product.image}
          alt={product.name}
          className={`absolute inset-0 h-full w-full object-cover ${product.imagePosition} transition duration-[1100ms] group-hover:scale-110 group-hover:opacity-0`}
        />

        <img
          src={product.hoverImage}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full scale-105 object-cover ${product.hoverPosition} opacity-0 transition duration-[1100ms] group-hover:scale-110 group-hover:opacity-100`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/42 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

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
        <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d7d3e]">
          {product.category}
        </p>

        <div className="mt-3 flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold leading-snug text-stone-950">
            {product.name}
          </h3>

          <p className="text-lg font-semibold text-[#405821]">
            ${product.price}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProductDetailsPage() {
  const product = productDetailsData;
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(0);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#ecead7] px-5 py-16 text-stone-950 sm:px-8 lg:px-14 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_8%,rgba(246,247,220,0.76),transparent_32%),linear-gradient(135deg,rgba(236,234,215,1),rgba(221,226,187,0.62),rgba(236,218,194,0.7))]" />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 18, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-10%] top-24 h-96 w-96 rounded-full bg-[#cdd5a6]/45 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -16, 0], y: [0, 22, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-[-10%] h-[30rem] w-[30rem] rounded-full bg-[#dbc5a4]/55 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1620px]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: luxuryEase }}
          className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start xl:gap-16"
        >
          <section className="lg:sticky lg:top-8">
            <div className="hidden gap-5 lg:grid lg:grid-cols-[92px_1fr]">
              <div className="flex flex-col gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={image.alt}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={`aspect-[3/4] overflow-hidden rounded-xl border bg-white/30 shadow-xl transition duration-300 ${
                      activeImage === index
                        ? "border-[#405821] shadow-[#405821]/18"
                        : "border-white/45 shadow-[#39461e]/8 hover:-translate-y-1"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`h-full w-full object-cover ${image.position}`}
                    />
                  </button>
                ))}
              </div>

              <div className="group relative min-h-[760px] overflow-hidden rounded-2xl border border-white/45 bg-white/30 shadow-2xl shadow-[#39461e]/14 backdrop-blur-sm">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImage}
                    src={product.images[activeImage].src}
                    alt={product.images[activeImage].alt}
                    initial={{ opacity: 0, scale: 1.035 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.55, ease: luxuryEase }}
                    className={`h-full w-full object-cover ${product.images[activeImage].position} transition duration-[1200ms] group-hover:scale-110`}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/38 via-transparent to-[#f4ecd6]/8" />
              </div>
            </div>

            <div className="lg:hidden">
              <Swiper
                modules={[FreeMode]}
                freeMode
                grabCursor
                slidesPerView={1.08}
                spaceBetween={16}
                className="!overflow-visible"
              >
                {product.images.map((image) => (
                  <SwiperSlide key={image.alt}>
                    <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-white/45 bg-white/30 shadow-2xl shadow-[#39461e]/12">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className={`h-full w-full object-cover ${image.position}`}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>

          <section>
            <div className="rounded-2xl border border-white/50 bg-white/36 p-6 shadow-2xl shadow-[#39461e]/10 backdrop-blur-md sm:p-8 lg:p-10">
              <p className="text-sm font-extrabold uppercase tracking-[0.34em] text-[#6d7d3e]">
                {product.category}
              </p>
              <span className="mt-5 block h-px w-20 bg-[#526632]" />
              <h1 className="mt-7 font-serif text-[clamp(3.6rem,7vw,6.8rem)] font-medium leading-[0.88] tracking-normal">
                {product.name}
              </h1>
              <p className="mt-4 text-lg font-semibold uppercase tracking-[0.18em] text-[#405821]">
                {product.subtitle}
              </p>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-5">
                <p className="font-serif text-5xl font-medium text-[#405821]">
                  ${product.price}
                </p>
                <Rating rating={product.rating} count={product.reviewCount} />
              </div>

              <p className="mt-7 text-lg leading-8 text-stone-800 sm:text-xl sm:leading-9">
                {product.description}
              </p>

              <div className="mt-9 space-y-8">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-sm font-extrabold uppercase tracking-[0.2em]">
                      Size
                    </h2>
                    <button className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#405821]">
                      Size Guide
                    </button>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`rounded-full border py-3 text-sm font-extrabold transition duration-300 ${
                          selectedSize === size
                            ? "border-[#405821] bg-[#405821] text-white shadow-xl shadow-[#405821]/20"
                            : "border-[#405821]/16 bg-white/32 text-stone-700 hover:bg-white/60 hover:text-[#405821]"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="mb-4 text-sm font-extrabold uppercase tracking-[0.2em]">
                    Color: {selectedColor}
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        type="button"
                        onClick={() => setSelectedColor(color.name)}
                        className={`grid size-11 place-items-center rounded-full border transition duration-300 hover:-translate-y-1 ${
                          selectedColor === color.name
                            ? "border-[#405821] shadow-lg shadow-[#405821]/20"
                            : "border-white/70 shadow-lg shadow-[#39461e]/7"
                        }`}
                        aria-label={`Choose ${color.name}`}
                      >
                        <span
                          className="size-8 rounded-full border border-stone-950/10"
                          style={{ backgroundColor: color.value }}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="flex h-14 w-full items-center justify-between rounded-full border border-[#405821]/16 bg-white/36 px-5 shadow-xl shadow-[#39461e]/6 sm:w-40">
                    <button
                      type="button"
                      onClick={() =>
                        setQuantity((value) => Math.max(1, value - 1))
                      }
                      aria-label="Decrease quantity"
                    >
                      <Minus className="size-5 text-[#405821]" />
                    </button>
                    <span className="font-bold">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity((value) => value + 1)}
                      aria-label="Increase quantity"
                    >
                      <Plus className="size-5 text-[#405821]" />
                    </button>
                  </div>

                  <motion.button
                    type="button"
                    onClick={() =>
                      addToCart({
                        id: product.id,
                        name: product.name,
                        image: product.images[0].src,
                        price: product.price,
                        quantity,
                        size: selectedSize,
                        color: selectedColor,
                      })
                    }
                    whileHover={{ y: -2, scale: 1.015 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex h-14 flex-1 items-center justify-center gap-4 rounded-full bg-[#405821] px-8 text-xs font-extrabold uppercase tracking-[0.22em] text-white shadow-2xl shadow-[#405821]/24 transition duration-300 hover:bg-[#314417] hover:shadow-[#405821]/45 sm:text-sm"
                  >
                    Add To Cart
                    <ArrowRight className="size-5 stroke-[1.8]" />
                  </motion.button>
                </div>

                <button
                  type="button"
                  className="flex h-14 w-full items-center justify-center gap-3 rounded-full border border-[#405821]/18 bg-white/36 text-sm font-extrabold uppercase tracking-[0.2em] text-[#405821] shadow-xl shadow-[#39461e]/6 transition duration-300 hover:bg-white/65"
                >
                  <Heart className="size-5 stroke-[1.8]" />
                  Add To Wishlist
                </button>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {shippingItems.map(({ icon: Icon, title, copy }) => (
                <div
                  key={title}
                  className="flex items-center gap-4 rounded-xl border border-white/45 bg-white/34 p-5 shadow-xl shadow-[#39461e]/7 backdrop-blur-md"
                >
                  <span className="grid size-12 place-items-center rounded-full bg-[#728341] text-white shadow-lg shadow-[#526632]/18">
                    <Icon className="size-5 stroke-[1.8]" />
                  </span>
                  <div>
                    <p className="text-sm font-extrabold uppercase tracking-[0.16em]">
                      {title}
                    </p>
                    <p className="mt-1 text-sm text-stone-700">{copy}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/50 bg-white/34 px-6 shadow-2xl shadow-[#39461e]/8 backdrop-blur-md">
              {product.details.map((item, index) => (
                <AccordionItem
                  key={item.title}
                  item={item}
                  isOpen={openAccordion === index}
                  onToggle={() =>
                    setOpenAccordion(openAccordion === index ? -1 : index)
                  }
                />
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/45 bg-white/28 p-5 text-[#405821] shadow-xl shadow-[#39461e]/7 backdrop-blur-md">
              <Lock className="size-5 stroke-[1.8]" />
              <p className="text-sm font-extrabold uppercase tracking-[0.18em]">
                Secure checkout and encrypted payment
              </p>
            </div>
          </section>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: luxuryEase }}
          className="mt-20 lg:mt-28"
        >
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.34em] text-[#6d7d3e]">
                Customer Notes
              </p>
              <h2 className="mt-5 font-serif text-[clamp(3.2rem,6vw,5.8rem)] font-medium leading-[0.9]">
                Reviewed With
                <span className="block text-[#3f571f]">Quiet Confidence</span>
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {productReviews.map((review) => (
              <div
                key={review.id}
                className="rounded-2xl border border-white/50 bg-white/36 p-7 shadow-2xl shadow-[#39461e]/8 backdrop-blur-md"
              >
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <img
                      src={review.image}
                      alt={review.name}
                      className={`size-16 rounded-full border border-white/70 object-cover ${review.imagePosition} ring-4 ring-white/35`}
                    />
                    {review.verified && (
                      <span className="absolute -bottom-1 -right-1 grid size-7 place-items-center rounded-full bg-[#405821] text-white">
                        <BadgeCheck className="size-4 stroke-[2]" />
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{review.name}</h3>
                    <Rating rating={review.rating} />
                  </div>
                </div>
                <p className="mt-6 text-lg leading-8 text-stone-800">
                  “{review.text}”
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: luxuryEase }}
          className="mt-20 lg:mt-28"
        >
          <div className="mb-10">
            <p className="text-sm font-extrabold uppercase tracking-[0.34em] text-[#6d7d3e]">
              Recommended Pairings
            </p>
            <h2 className="mt-5 font-serif text-[clamp(3.2rem,6vw,5.8rem)] font-medium leading-[0.9]">
              Complete
              <span className="block text-[#3f571f]">The Look</span>
            </h2>
          </div>

          <Swiper
            modules={[FreeMode]}
            freeMode
            grabCursor
            slidesPerView={1.15}
            spaceBetween={24}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 26 },
              1024: { slidesPerView: 3, spaceBetween: 28 },
              1280: { slidesPerView: 4, spaceBetween: 28 },
            }}
            className="!overflow-visible pb-6"
          >
            {recommendedProducts.map((product) => (
              <SwiperSlide key={product.id} className="h-auto">
                <RecommendedCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.section>
      </div>
    </main>
  );
}
