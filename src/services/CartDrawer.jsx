import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "../../context/CartContext";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const drawerVariants = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.35,
      ease: "easeInOut",
    },
  },
};

function CartDrawer() {
  const navigate = useNavigate();

  const {
    cartItems,
    subtotal,
    isCartOpen,
    setIsCartOpen,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Drawer */}
          <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed right-0 top-0 z-50 flex h-screen w-full max-w-md flex-col overflow-hidden border-l border-[#2d3b36]/10 bg-[#f5f1e8] shadow-[0_30px_80px_rgba(0,0,0,0.18)]"
          >
            {/* Ambient Luxury Glow */}
            <div className="pointer-events-none absolute -top-32 right-[-100px] h-[260px] w-[260px] rounded-full bg-[#556b2f]/20 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-100px] left-[-100px] h-[220px] w-[220px] rounded-full bg-[#8d9d5f]/10 blur-3xl" />

            {/* Header */}
            <div className="relative flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#8d9d5f]">
                  FASHO
                </p>

                <h2 className="mt-2 text-2xl font-light tracking-wide text-white">
                  Your Cart
                </h2>
              </div>

              <button
                onClick={() => setIsCartOpen(false)}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:border-[#556b2f]/40 hover:bg-[#556b2f]/20"
              >
                <X className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-90" />
              </button>
            </div>

            {/* Empty State */}
            {cartItems.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
                  <ShoppingBag className="h-10 w-10 text-[#8d9d5f]" />
                </div>

                <h3 className="text-2xl font-light text-white">
                  Your cart is empty
                </h3>

                <p className="mt-4 max-w-xs text-sm leading-7 text-gray-400">
                  Curated luxury essentials await. Add timeless pieces to your
                  collection.
                </p>

                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-8 rounded-full border border-[#556b2f]/40 bg-[#556b2f]/15 px-6 py-3 text-xs uppercase tracking-[0.25em] text-[#dbe5c2] transition-all duration-300 hover:bg-[#556b2f]/30"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto px-5 py-6">
                  <div className="space-y-5">
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#556b2f]/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                        <div className="relative flex gap-4">
                          {/* Image */}
                          <div className="h-28 w-24 overflow-hidden rounded-2xl bg-[#23281f]">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>

                          {/* Content */}
                          <div className="flex flex-1 flex-col justify-between">
                            <div>
                              <div className="flex items-start justify-between gap-3">
                                <div>
                                  <h3 className="text-base font-medium tracking-wide text-white">
                                    {item.name}
                                  </h3>

                                  <p className="mt-2 text-sm text-[#d4dec0]">
                                    ₹{item.price}
                                  </p>
                                </div>

                                <button
                                  onClick={() => removeFromCart(item.id)}
                                  className="text-xs uppercase tracking-[0.18em] text-red-400 transition-opacity duration-300 hover:opacity-70"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>

                            {/* Quantity */}
                            <div className="mt-5 flex items-center justify-between">
                              <div className="flex items-center overflow-hidden rounded-full border border-white/10 bg-white/5">
                                <button
                                  onClick={() => decreaseQuantity(item.id)}
                                  className="flex h-10 w-10 items-center justify-center text-white transition-colors hover:bg-[#556b2f]/20"
                                >
                                  <Minus className="h-4 w-4" />
                                </button>

                                <div className="flex h-10 min-w-[40px] items-center justify-center text-sm font-medium text-white">
                                  {item.quantity}
                                </div>

                                <button
                                  onClick={() => increaseQuantity(item.id)}
                                  className="flex h-10 w-10 items-center justify-center text-white transition-colors hover:bg-[#556b2f]/20"
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                              </div>

                              <div className="text-sm tracking-wide text-[#dbe5c2]">
                                ₹{item.price * item.quantity}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="border-t border-white/10 bg-black/10 px-6 py-6 backdrop-blur-xl">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-[#8d9d5f]">
                        Subtotal
                      </p>

                      <h3 className="mt-1 text-3xl font-light text-white">
                        ₹{subtotal}
                      </h3>
                    </div>

                    <div className="text-right text-xs leading-relaxed text-gray-400">
                      Taxes & shipping
                      <br />
                      calculated at checkout
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCheckout}
                    className="group relative flex w-full items-center justify-center overflow-hidden rounded-full border border-[#7b8f55]/30 bg-[#556b2f]/20 px-6 py-4 text-sm uppercase tracking-[0.25em] text-[#edf3df] transition-all duration-300 hover:border-[#8fa56a]/60 hover:bg-[#556b2f]/40"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Proceed To Checkout
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>

                    <div className="absolute inset-0 translate-y-full bg-gradient-to-r from-[#6d8248]/30 to-[#8aa060]/20 transition-transform duration-500 group-hover:translate-y-0" />
                  </motion.button>

                  <p className="mt-4 text-center text-[11px] uppercase tracking-[0.2em] text-gray-500">
                    Secure Luxury Checkout Experience
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default CartDrawer;
