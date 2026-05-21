import { X, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function CartDrawer() {
  const navigate = useNavigate();

  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    subtotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          initial={{ x: "120%" }}
          animate={{ x: 0 }}
          exit={{ x: "120%" }}
          transition={{
            type: "spring",
            stiffness: 140,
            damping: 20,
          }}
          className="fixed right-5 top-1/2 z-50 flex h-[92vh] w-full max-w-md -translate-y-1/2 flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#f5f1e8] shadow-[0_30px_80px_rgba(0,0,0,0.18)]"
        >
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute -right-16 top-[-80px] h-64 w-64 rounded-full bg-[#556b2f]/10 blur-2xl" />
          <div className="pointer-events-none absolute bottom-[-80px] left-[-80px] h-56 w-56 rounded-full bg-[#d7ccb8]/30 blur-2xl" />

          {/* Header */}
          <div className="relative flex items-center justify-between border-b border-[#2d3b36]/10 px-6 py-6">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#6d7d3e]">
                FASHO
              </p>

              <h2 className="mt-2 text-3xl font-light tracking-wide text-[#2d3b36]">
                Your Cart
              </h2>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2d3b36]/10 bg-white/70 transition-all duration-300 hover:bg-white"
            >
              <X size={18} className="text-[#2d3b36]" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {cartItems.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="mb-6 rounded-full bg-[#556b2f]/10 p-8">
                  <div className="h-10 w-10 rounded-full border border-[#556b2f]/20" />
                </div>

                <h3 className="text-2xl font-light text-[#2d3b36]">
                  Your cart is empty
                </h3>

                <p className="mt-4 max-w-xs text-sm leading-7 text-[#2d3b36]/60">
                  Curated luxury essentials await. Continue exploring timeless
                  fashion pieces.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="group rounded-3xl border border-[#2d3b36]/8 bg-white/60 p-4 backdrop-blur-md"
                  >
                    <div className="flex gap-4">
                      {/* Image */}
                      <div className="h-28 w-24 overflow-hidden rounded-2xl bg-[#ebe6da]">
                        <img
                          loading="lazy"
                          decoding="async"
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h3 className="text-base font-medium text-[#2d3b36]">
                                {item.name}
                              </h3>

                              <p className="mt-2 text-sm text-[#2d3b36]/60">
                                ₹{item.price}
                              </p>
                            </div>

                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-xs uppercase tracking-[0.18em] text-red-500 transition hover:opacity-70"
                            >
                              Remove
                            </button>
                          </div>
                        </div>

                        {/* Quantity */}
                        <div className="mt-5 flex items-center justify-between">
                          <div className="flex items-center overflow-hidden rounded-full border border-[#2d3b36]/10 bg-white">
                            <button
                              onClick={() => decreaseQuantity(item.id)}
                              className="flex h-10 w-10 items-center justify-center text-[#2d3b36] transition hover:bg-[#556b2f]/10"
                            >
                              <Minus size={14} />
                            </button>

                            <div className="flex h-10 min-w-[40px] items-center justify-center text-sm font-medium text-[#2d3b36]">
                              {item.quantity}
                            </div>

                            <button
                              onClick={() => increaseQuantity(item.id)}
                              className="flex h-10 w-10 items-center justify-center text-[#2d3b36] transition hover:bg-[#556b2f]/10"
                            >
                              <Plus size={14} />
                            </button>
                          </div>

                          <p className="text-sm font-medium text-[#2d3b36]">
                            ₹{item.price * item.quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-[#2d3b36]/10 bg-white/70 px-6 py-6 backdrop-blur-md">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#6d7d3e]">
                    Subtotal
                  </p>

                  <h3 className="mt-1 text-3xl font-light text-[#2d3b36]">
                    ₹{subtotal}
                  </h3>
                </div>

                <div className="text-right text-xs leading-relaxed text-[#2d3b36]/50">
                  Taxes & shipping
                  <br />
                  calculated at checkout
                </div>
              </div>

              <button
                onClick={() => {
                  setIsCartOpen(false);
                  navigate("/checkout");
                }}
                className="group relative flex w-full items-center justify-center overflow-hidden rounded-full bg-[#2d3b36] px-6 py-4 text-sm uppercase tracking-[0.22em] text-white transition-all duration-300 hover:bg-[#1f2925]"
              >
                <span className="relative z-10">Proceed To Checkout</span>
              </button>

              <p className="mt-4 text-center text-[11px] uppercase tracking-[0.2em] text-[#2d3b36]/40">
                Secure Luxury Checkout
              </p>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CartDrawer;
