import { useEffect, useRef, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import LuxuryHero from "./components/LuxuryHero";
import CartDrawer from "./components/cart/CartDrawer";

import { createPageTransition } from "./lib/animations";

import { useRevealAnimation } from "./hooks/useRevealAnimation";

import ScrollToTop from "./common/ScrollToTop";

import Navbar from "./components/layout/Navbar";
import ScrollToTopButton from "./common/ScrollToTopButton";

/* LAZY LOADED PAGES */
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));

const OrderSuccessPage = lazy(() => import("./pages/OrderSuccessPage"));

const CartPage = lazy(() => import("./pages/CartPage"));

const CollectionPage = lazy(() => import("./pages/CollectionPage"));

const LuxuryAboutSection = lazy(() => import("./pages/LuxuryAboutSection"));

const ProfilePage = lazy(() => import("./pages/ProfilePage"));

function App() {
  const appRef = useRef(null);

  const revealRef = useRevealAnimation({
    selector: "[data-global-reveal]",
    y: 20,
    stagger: 0.05,
  });

  useEffect(() => {
    if (
      !appRef.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const transition = createPageTransition(appRef.current);

    return () => {
      if (transition) {
        transition.kill();
      }
    };
  }, []);

  return (
    <>
      {/* GLOBAL COMPONENTS */}
      <ScrollToTop />

      <Navbar />

      <ScrollToTopButton />

      {/* APP CONTENT */}
      <div ref={appRef} className="min-h-screen overflow-x-hidden bg-[#f5f1e8]">
        <CartDrawer />

        <div ref={revealRef}>
          <Suspense
            fallback={
              <div className="flex min-h-screen items-center justify-center bg-[#f5f1e8]">
                <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#405821] border-t-transparent" />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<LuxuryHero />} />

              <Route path="/about" element={<LuxuryAboutSection />} />

              <Route path="/checkout" element={<CheckoutPage />} />

              <Route path="/cart" element={<CartPage />} />

              <Route path="/order-success" element={<OrderSuccessPage />} />

              <Route path="/account" element={<ProfilePage />} />

              <Route path="/:type" element={<CollectionPage />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </>
  );
}
export default App;
