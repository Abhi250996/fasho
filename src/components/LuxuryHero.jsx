import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import heroBg from "../assets/hero-bg.png";

import BestSellerSection from "./home/BestSellerSection";
import NewCollectionBanner from "./home/NewCollectionBanner";
import AboutBrandSection from "./home/AboutBrandSection";
import TestimonialsSection from "./home/TestimonialsSection";
import InstagramGallerySection from "./home/InstagramGallerySection";
import NewsletterSection from "./home/NewsletterSection";

import Footer from "./layout/Footer";

import HeroContent from "./hero/HeroContent";
import FloatingBadge from "./hero/FloatingBadge";
import BottomFeaturesBar from "./hero/BottomFeaturesBar";
import FeaturedCategories from "./hero/FeaturedCategories";

import { createLuxuryTimeline, gsap } from "../lib/animations";

export default function LuxuryHero() {
  const heroRef = useRef(null);

  const heroImageRef = useRef(null);

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
    <main className="overflow-x-hidden bg-[#ecead7] text-stone-950">
      {/* HERO */}
      <section
        ref={heroRef}
        id="home"
        className="relative min-h-screen overflow-hidden bg-[#ecead7]"
      >
        {/* BACKGROUND */}
        <div
          data-ambient
          className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(246,247,220,0.92),transparent_34%),linear-gradient(105deg,rgba(216,224,184,0.96)_0%,rgba(239,235,209,0.8)_48%,rgba(237,221,196,0.9)_100%)]"
        />

        {/* LEFT LIGHT */}
        <div
          data-ambient
          className="absolute left-0 top-0 h-full w-[62%] bg-gradient-to-r from-[#e3e8c4]/95 via-[#eef0d8]/78 to-transparent"
        />

        {/* DESKTOP DIVIDER */}
        <div className="absolute inset-y-0 left-1/2 z-10 hidden w-px bg-white/80 shadow-[0_0_0_8px_rgba(255,255,255,0.32)] lg:block" />

        {/* HERO IMAGE */}
        <motion.div
          ref={heroImageRef}
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-0 top-0 z-0 h-[55vh] w-full overflow-hidden lg:h-full lg:w-[55%]"
        >
          <img
            fetchPriority="high"
            decoding="async"
            src={heroBg}
            alt="Fashion model wearing olive resort shirt and ivory trousers"
            className="h-full w-full object-cover object-center opacity-95"
          />

          {/* LIGHT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#f8efd9]/10 via-transparent to-[#e6dcc4]/15" />

          {/* MOBILE FADE */}
          <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-[#eef0d8] via-[#eef0d8]/35 to-transparent lg:hidden" />

          {/* MOBILE OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-[#ecead7] lg:hidden" />
        </motion.div>

        {/* HERO CONTENT */}
        <div className="relative z-20 flex min-h-screen flex-col justify-end pb-8 pt-[48vh] lg:justify-center lg:pb-36 lg:pt-0">
          <HeroContent />

          <FloatingBadge />
        </div>

        {/* FEATURES */}
        <BottomFeaturesBar />
      </section>

      {/* SECTIONS */}
      <div data-global-reveal>
        <FeaturedCategories />
      </div>

      <div data-global-reveal>
        <BestSellerSection />
      </div>

      <div data-global-reveal>
        <NewCollectionBanner />
      </div>

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
