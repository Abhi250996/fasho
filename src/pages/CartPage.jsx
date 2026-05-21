import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function CartPage() {
  const navigate = useNavigate();

  const {
    cartItems,
    subtotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <main className="min-h-screen bg-[#ecead7] px-5 pb-20 pt-32 text-stone-950 sm:px-8 lg:px-14">
      <Navbar />
      {/* Ambient Background */}
      <div className="pointer-events-none fixed left-[-10%] top-20 h-96 w-96 rounded-full bg-[#cfd7a8]/35 blur-3xl" />
      <div className="pointer-events-none fixed bottom-[-10%] right-[-10%] h-[30rem] w-[30rem] rounded-full bg-[#d8c9ae]/35 blur-3xl" />

      <div className="relative mx-auto max-w-[1680px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.34em] text-[#6d7d3e] sm:text-lg">
              FASHO Cart
            </p>

            <span className="mt-5 block h-px w-20 bg-[#526632]" />

            <h1 className="mt-7 font-serif text-[clamp(3.8rem,8vw,7rem)] font-medium leading-[0.9] tracking-normal">
              Shopping
              <span className="block text-[#3f571f]">Cart</span>
            </h1>
          </div>

          <p className="max-w-xl text-lg leading-8 text-stone-800 sm:text-xl">
            Refined essentials curated for modern luxury living.
          </p>
        </motion.div>

        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex min-h-[60vh] flex-col items-center justify-center rounded-[2rem] border border-white/50 bg-white/45 px-8 py-20 text-center shadow-2xl shadow-[#39461e]/10 backdrop-blur-xl"
          >
            <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-[#405821]/10">
              <ShoppingBag className="size-12 text-[#405821]" />
            </div>

            <h2 className="text-4xl font-light text-[#2d3b36]">
              Your cart is empty
            </h2>

            <p className="mt-5 max-w-md text-lg leading-8 text-[#2d3b36]/65">
              Explore timeless silhouettes and elevated essentials crafted for
              every moment.
            </p>

            <button
              onClick={() => navigate("/products")}
              className="mt-10 rounded-full bg-[#405821] px-8 py-4 text-sm font-extrabold uppercase tracking-[0.24em] text-white shadow-2xl shadow-[#405821]/25 transition duration-300 hover:bg-[#314417]"
            >
              Continue Shopping
            </button>
          </motion.div>
        ) : (
          <div className="grid gap-8 xl:grid-cols-[1fr_420px]">
            {/* Cart Items */}
            <div className="space-y-6">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.6 }}
                  className="group overflow-hidden rounded-[2rem] border border-white/50 bg-white/45 p-5 shadow-2xl shadow-[#39461e]/10 backdrop-blur-xl"
                >
                  <div className="flex flex-col gap-6 sm:flex-row">
                    {/* Product Image */}
                    <div className="relative h-[240px] w-full overflow-hidden rounded-[1.5rem] bg-[#dfdcc2] sm:h-44 sm:w-36">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d7d3e]">
                            Premium Collection
                          </p>

                          <h2 className="mt-3 text-3xl font-semibold leading-tight text-stone-950">
                            {item.name}
                          </h2>

                          <p className="mt-4 text-lg text-[#2d3b36]/65">
                            Timeless tailoring with elevated comfort and modern
                            structure.
                          </p>
                        </div>

                        <div className="text-right">
                          <p className="text-sm uppercase tracking-[0.2em] text-[#6d7d3e]">
                            Price
                          </p>

                          <h3 className="mt-2 text-3xl font-semibold text-[#405821]">
                            ₹{item.price}
                          </h3>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                        {/* Quantity */}
                        <div className="flex items-center overflow-hidden rounded-full border border-[#405821]/10 bg-white">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="flex h-12 w-12 items-center justify-center text-[#2d3b36] transition duration-300 hover:bg-[#405821]/10"
                          >
                            <Minus size={16} />
                          </button>

                          <div className="flex h-12 min-w-[56px] items-center justify-center text-sm font-bold text-[#2d3b36]">
                            {item.quantity}
                          </div>

                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="flex h-12 w-12 items-center justify-center text-[#2d3b36] transition duration-300 hover:bg-[#405821]/10"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        <div className="flex items-center gap-6">
                          <p className="text-xl font-semibold text-[#2d3b36]">
                            ₹{item.price * item.quantity}
                          </p>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.2em] text-red-500 transition duration-300 hover:bg-red-100"
                          >
                            <Trash2 className="size-4" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary */}
            <motion.aside
              initial={{ opacity: 0, x: 26 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="sticky top-28 h-fit overflow-hidden rounded-[2rem] border border-white/50 bg-white/45 p-8 shadow-2xl shadow-[#39461e]/10 backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-56 w-56 rounded-full bg-[#cfd7a8]/35 blur-3xl" />

              <div className="relative">
                <p className="text-sm font-extrabold uppercase tracking-[0.34em] text-[#6d7d3e]">
                  Order Summary
                </p>

                <h2 className="mt-5 text-4xl font-light text-[#2d3b36]">
                  Checkout
                </h2>

                <div className="mt-10 space-y-5 border-y border-[#405821]/10 py-8">
                  <div className="flex items-center justify-between">
                    <span className="text-[#2d3b36]/70">Subtotal</span>

                    <span className="font-semibold text-[#2d3b36]">
                      ₹{subtotal}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[#2d3b36]/70">Shipping</span>

                    <span className="font-semibold text-[#405821]">Free</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[#2d3b36]/70">Taxes</span>

                    <span className="font-semibold text-[#2d3b36]">
                      Calculated later
                    </span>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-lg font-medium text-[#2d3b36]">
                    Total
                  </span>

                  <span className="text-4xl font-semibold text-[#405821]">
                    ₹{subtotal}
                  </span>
                </div>

                <button
                  onClick={() => navigate("/checkout")}
                  className="mt-10 flex w-full items-center justify-center rounded-full bg-[#405821] px-8 py-5 text-sm font-extrabold uppercase tracking-[0.24em] text-white shadow-2xl shadow-[#405821]/25 transition duration-300 hover:bg-[#314417]"
                >
                  Proceed To Checkout
                </button>

                <p className="mt-5 text-center text-xs uppercase tracking-[0.2em] text-[#2d3b36]/45">
                  Secure Luxury Checkout Experience
                </p>
              </div>
            </motion.aside>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}

export default CartPage;
