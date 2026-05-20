import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Menu,
  RefreshCw,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Tag,
  Truck,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBg from "../assets/hero-bg.png";
import BestSellerSection from "./home/BestSellerSection";
import NewCollectionBanner from "./home/NewCollectionBanner";
import TrendingProductsCarousel from "./home/TrendingProductsCarousel";
import AboutBrandSection from "./home/AboutBrandSection";
import TestimonialsSection from "./home/TestimonialsSection";
import InstagramGallerySection from "./home/InstagramGallerySection";
import NewsletterSection from "./home/NewsletterSection";
import Footer from "./layout/Footer";
import { createLuxuryTimeline, gsap } from "../lib/animations";
import { useParallax } from "../hooks/useParallax";
import { useCart } from "../context/CartContext";

const navItems = ["New In", "Men", "Women", "Collections", "About"];

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    copy: "On all orders over $99",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    copy: "14 days return policy",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    copy: "100% protected checkout",
  },
  {
    icon: Tag,
    title: "Premium Quality",
    copy: "Crafted to last",
  },
];

const categoryCards = [
  {
    label: "Tailored Essentials",
    title: "Men",
    imagePosition: "object-[62%_center]",
    className: "lg:col-span-7 lg:row-span-2 lg:min-h-[690px]",
  },
  {
    label: "Modern Silhouettes",
    title: "Women",
    imagePosition: "object-[74%_center]",
    className: "lg:col-span-5 lg:min-h-[420px]",
  },
  {
    label: "Just Landed",
    title: "New Arrivals",
    imagePosition: "object-[52%_center]",
    className: "lg:col-span-5 lg:min-h-[420px]",
  },
  {
    label: "Resort Mood",
    title: "Summer Collection",
    imagePosition: "object-[68%_center]",
    className: "lg:col-span-12 lg:min-h-[500px]",
  },
];

const revealTransition = {
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1],
};

function Navbar() {
  const { cartItems, setIsCartOpen } = useCart();
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  const navigate = useNavigate();
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="absolute inset-x-0 top-0 z-30"
    >
      <nav className="mx-auto flex w-full max-w-[1760px] items-center justify-between px-5 py-5 sm:px-8 lg:px-14 lg:py-9">
        <a
          href="#home"
          className="text-3xl font-black tracking-tight text-stone-950 transition duration-300 hover:text-[#405821] sm:text-4xl"
          aria-label="Fasho home"
        >
          FASHO.
        </a>

        <div className="hidden items-center gap-10 lg:flex xl:gap-16">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
              className="text-sm font-bold uppercase tracking-[0.22em] text-stone-950 transition duration-300 hover:text-[#53682d]"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 text-stone-950 sm:gap-4">
          {[Search, User].map((Icon, index) => (
            <button
              key={index}
              type="button"
              className="grid size-10 place-items-center rounded-full transition duration-300 hover:bg-white/45 hover:shadow-lg hover:shadow-[#526632]/15"
              aria-label={index === 0 ? "Search" : "Account"}
            >
              <Icon className="size-5 stroke-[1.8]" />
            </button>
          ))}
          <button
            type="button"
            onClick={() => navigate("/cart")}
            className="relative grid size-10 place-items-center rounded-full transition duration-300 hover:bg-white/45 hover:shadow-lg hover:shadow-[#526632]/15"
            aria-label="Shopping bag"
          >
            <ShoppingBag className="size-5 stroke-[1.8]" />

            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                key={totalItems}
                className="absolute -right-1 -top-1 grid min-h-[20px] min-w-[20px] place-items-center rounded-full bg-[#405821] px-1 text-[10px] font-bold text-white shadow-lg shadow-[#405821]/30"
              >
                {totalItems}
              </motion.span>
            )}
          </button>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full transition duration-300 hover:bg-white/45 lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-6 stroke-[1.8]" />
          </button>
        </div>
      </nav>
    </motion.header>
  );
}

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

function FloatingBadge() {
  return (
    <motion.div
      data-hero-badge
      initial={{ opacity: 0, scale: 0.86, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
      className="absolute bottom-[18%] right-[5%] z-20 hidden size-36 place-items-center rounded-full border border-white/25 bg-[#6e8142]/80 p-3 text-center text-white shadow-2xl shadow-[#33451a]/25 backdrop-blur-md md:grid xl:size-44"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute inset-2 rounded-full border border-white/20"
      />
      <div className="relative">
        <Sparkles className="mx-auto mb-3 size-5" />
        <p className="text-xs font-extrabold uppercase tracking-[0.22em] xl:text-sm">
          Live In Style
        </p>
        <span className="mx-auto my-3 block h-px w-12 bg-white/65" />
        <p className="text-sm font-extrabold uppercase tracking-[0.2em]">
          SS '24
        </p>
      </div>
    </motion.div>
  );
}

function BottomFeaturesBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.45, ease: "easeOut" }}
      className="relative z-30 mx-5 mb-5 mt-10 grid max-w-[1620px] overflow-hidden rounded-xl border border-white/55 bg-white/68 shadow-2xl shadow-[#38451f]/15 backdrop-blur-xl sm:mx-8 lg:absolute lg:inset-x-14 lg:bottom-0 lg:mx-auto lg:mb-9 lg:mt-0 lg:grid-cols-4"
    >
      {features.map(({ icon: Icon, title, copy }) => (
        <div
          key={title}
          className="group flex items-center gap-5 border-b border-[#526632]/15 px-7 py-5 text-left transition duration-300 hover:bg-white/45 lg:border-b-0 lg:border-r last:lg:border-r-0"
        >
          <span className="grid size-14 shrink-0 place-items-center rounded-full bg-[#728341] text-white shadow-xl shadow-[#526632]/20 transition duration-300 group-hover:scale-110 group-hover:bg-[#405821]">
            <Icon className="size-6 stroke-[1.8]" />
          </span>
          <span>
            <span className="block text-sm font-black uppercase tracking-[0.16em] text-stone-950">
              {title}
            </span>
            <span className="mt-1 block text-base text-stone-800">{copy}</span>
          </span>
        </div>
      ))}
    </motion.div>
  );
}

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

function FeaturedCategories() {
  return (
    <section
      id="collections"
      className="relative overflow-hidden bg-[#ecead7] px-5 py-20 text-stone-950 sm:px-8 sm:py-24 lg:px-14 lg:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#ecead7] via-[#ecead7]/92 to-transparent" />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-10%] top-24 h-80 w-80 rounded-full bg-[#cfd7a8]/45 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 20, 0], x: [0, -16, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-[-8%] h-96 w-96 rounded-full bg-[#dbc6a6]/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1620px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={revealTransition}
          className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.34em] text-[#6d7d3e] sm:text-lg">
              Curated Collections
            </p>
            <span className="mt-5 block h-px w-20 bg-[#526632]" />
            <h2 className="mt-7 font-serif text-[clamp(3.6rem,8vw,7.5rem)] font-medium leading-[0.88] tracking-normal">
              Shop By
              <span className="block text-[#3f571f]">Category</span>
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-stone-800 sm:text-xl">
            An edited wardrobe of quiet statements, sun-washed textures, and
            elevated everyday forms.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:gap-7 lg:grid-cols-12 lg:auto-rows-[minmax(320px,auto)]">
          {categoryCards.map((card, index) => (
            <CategoryCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function LuxuryHero() {
  const heroRef = useRef(null);
  const heroImageRef = useParallax({
    yPercent: -5,
    scale: 1.02,
    start: "top top",
    end: "bottom top",
    scrub: 1.4,
  });

  useEffect(() => {
    if (
      !heroRef.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    }

    const context = createLuxuryTimeline(heroRef.current);
    const ambient = gsap.to(
      heroRef.current.querySelectorAll("[data-ambient]"),
      {
        x: "random(-18, 18)",
        y: "random(-16, 16)",
        scale: "random(0.96, 1.04)",
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3,
      },
    );

    return () => {
      ambient.kill();
      context.revert();
    };
  }, []);

  return (
    <main className="bg-[#ecead7] text-stone-950">
      <div
        ref={heroRef}
        id="home"
        className="relative min-h-screen overflow-hidden bg-[#ecead7]"
      >
        <div
          data-ambient
          className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(246,247,220,0.92),transparent_34%),linear-gradient(105deg,rgba(216,224,184,0.96)_0%,rgba(239,235,209,0.8)_48%,rgba(237,221,196,0.9)_100%)]"
        />
        <div
          data-ambient
          className="absolute left-0 top-0 h-full w-[62%] bg-gradient-to-r from-[#e3e8c4]/95 via-[#eef0d8]/78 to-transparent"
        />
        <div className="absolute inset-y-0 left-[50%] z-10 hidden w-px bg-white/80 shadow-[0_0_0_8px_rgba(255,255,255,0.32)] lg:block" />

        <motion.div
          ref={heroImageRef}
          data-hero-image
          animate={{ y: [0, -12, 0], scale: [1, 1.012, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-y-0 right-0 z-0 h-full w-full lg:w-[55%]"
        >
          <img
            src={heroBg}
            alt="Fashion model wearing olive resort shirt and ivory trousers"
            className="h-full w-full object-cover object-[68%_center] opacity-95 lg:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f8efd9]/20 via-transparent to-[#e6dcc4]/25" />
          <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-[#eef0d8] via-[#eef0d8]/45 to-transparent lg:hidden" />
        </motion.div>

        <Navbar />

        <section className="relative z-20 flex min-h-screen flex-col justify-center pb-0 lg:pb-36">
          <HeroContent />
          <FloatingBadge />
        </section>

        <BottomFeaturesBar />
      </div>

      <div data-global-reveal>
        <FeaturedCategories />
      </div>
      <div data-global-reveal>
        <BestSellerSection />
      </div>
      <div data-global-reveal>
        <NewCollectionBanner />
      </div>
      {/* <div data-global-reveal>
        <TrendingProductsCarousel />
      </div> */}
      <div data-global-reveal>
        <AboutBrandSection />
      </div>
      <div data-global-reveal>
        <TestimonialsSection />
      </div>
      <div data-global-reveal>
        <InstagramGallerySection />
      </div>
      <div data-global-reveal>
        <NewsletterSection />
      </div>
      <div data-global-reveal>
        <Footer />
      </div>
    </main>
  );
}
