import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";

import CartDrawer from "./components/cart/CartDrawer";

import ProductListingPage from "./pages/ProductListingPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";

function App() {
  return (
    <Router>
      <CartProvider>
        <OrderProvider>
          {/* Global Cart Drawer */}
          <CartDrawer />

          {/* Main Routes */}
          <Routes>
            <Route path="/" element={<ProductListingPage />} />
            <Route path="/products" element={<ProductListingPage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-success" element={<OrderSuccessPage />} />
          </Routes>
        </OrderProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
