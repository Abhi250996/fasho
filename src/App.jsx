import { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";

import LuxuryHero from "./components/LuxuryHero";
import CartDrawer from "./components/cart/CartDrawer";

import CheckoutPage from "./pages/CheckoutPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";

import { createPageTransition } from "./lib/animations";
import { useRevealAnimation } from "./hooks/useRevealAnimation";
import CartPage from "./pages/CartPage";
import CollectionPage from "./pages/CollectionPage";
import LuxuryAboutSection from "./pages/LuxuryAboutSection";
import ProfilePage from "./pages/ProfilePage";
import ScrollToTop from "./common/ScrollToTop";

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
      {" "}
      <CartDrawer />
      <div ref={revealRef}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LuxuryHero />} />
          <Route path="/about" element={<LuxuryAboutSection />} />

          <Route path="/checkout" element={<CheckoutPage />} />

          <Route path="/cart" element={<CartPage />} />

          <Route path="/order-success" element={<OrderSuccessPage />} />
          <Route path="/account" element={<ProfilePage />} />

          {/* DYNAMIC COLLECTION ROUTES */}
          <Route path="/:type" element={<CollectionPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
