import { useEffect, useRef, lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";

import LuxuryHero from "./components/LuxuryHero";
import CartDrawer from "./components/cart/CartDrawer";

import { createPageTransition } from "./lib/animations";

import { useRevealAnimation } from "./hooks/useRevealAnimation";

import ScrollToTop from "./common/ScrollToTop";

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
    <div ref={appRef} className="min-h-screen overflow-x-hidden bg-[#f5f1e8]">
      {/* CART */}
      <CartDrawer />

      <div ref={revealRef}>
        {/* AUTO SCROLL TOP */}
        <ScrollToTop />

        {/* ROUTES */}
        <Suspense
          fallback={
            <div className="flex min-h-screen items-center justify-center bg-[#f5f1e8]">
              <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#405821] border-t-transparent" />
            </div>
          }
        >
          <Routes>
            {/* HOME */}
            <Route path="/" element={<LuxuryHero />} />

            {/* ABOUT */}
            <Route path="/about" element={<LuxuryAboutSection />} />

            {/* CHECKOUT */}
            <Route path="/checkout" element={<CheckoutPage />} />

            {/* CART */}
            <Route path="/cart" element={<CartPage />} />

            {/* SUCCESS */}
            <Route path="/order-success" element={<OrderSuccessPage />} />

            {/* ACCOUNT */}
            <Route path="/account" element={<ProfilePage />} />

            {/* COLLECTIONS */}
            <Route path="/:type" element={<CollectionPage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
