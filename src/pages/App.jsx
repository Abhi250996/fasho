// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { CartProvider } from "./context/CartContext"; // Assuming CartContext exists
// import { OrderProvider } from "./context/OrderContext";
// import CartDrawer from "./components/CartDrawer"; // Assuming CartDrawer is in src/components
// import CheckoutPage from "./pages/CheckoutPage";
// import OrderSuccessPage from "./pages/OrderSuccessPage";
// import ProductListingPage from "./pages/ProductListingPage";
// import ProductDetailsPage from "./pages/ProductDetailsPage";
// import CartPage from "./CartPage";

// function App() {
//   return (
//     <Router>
//       <CartProvider>
//         <OrderProvider>
//           {/* CartDrawer is rendered here as it's a global component that might need to be accessible across routes */}
//           <CartDrawer />
//           <Routes>
//             <Route path="/" element={<ProductListingPage />} />
//             <Route path="/cart" element={<CartPage />} />
//             <Route path="/products" element={<ProductListingPage />} />
//             <Route path="/product/:id" element={<ProductDetailsPage />} />
//             <Route path="/checkout" element={<CheckoutPage />} />
//             <Route path="/order-success" element={<OrderSuccessPage />} />
//           </Routes>
//         </OrderProvider>
//       </CartProvider>
//     </Router>
//   );
// }

// export default App;
