import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { useCart } from "../context/CartContext";
import { useOrder } from "../context/OrderContext";

import PaymentSection from "../components/checkout/PaymentSection";

const CheckoutPage = () => {
  const navigate = useNavigate();

  const { cartItems, subtotal, clearCart } = useCart();

  const { saveOrder } = useOrder();

  const [isProcessing, setIsProcessing] = useState(false);

  const [error, setError] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("stripe");

  const [shippingDetails, setShippingDetails] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setShippingDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (
      !shippingDetails.fullName ||
      !shippingDetails.email ||
      !shippingDetails.address
    ) {
      setError("Please fill all required fields.");

      return false;
    }

    return true;
  };

  const handlePayment = async () => {
    setError("");

    if (cartItems.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    if (!validateForm()) {
      return;
    }

    try {
      setIsProcessing(true);

      const paymentResult = await processPayment({
        paymentMethod,
        amount: subtotal,
      });

      if (paymentResult.success) {
        const orderData = {
          id: Date.now(),
          items: cartItems,
          total: subtotal,
          shipping: shippingDetails,
          paymentMethod,
        };

        saveOrder(orderData);

        clearCart();

        navigate("/order-success");
      } else {
        setError("Payment failed. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong during payment.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f1e8] px-4 py-16">
      {" "}
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {" "}
          <div className="mb-10 text-center">
            {" "}
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#7b8477]">
              Secure Checkout{" "}
            </p>
            <h1 className="text-5xl font-semibold text-[#2d3b36]">
              Complete Your Order
            </h1>
          </div>
          {error && (
            <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-600">
              {error}
            </div>
          )}
          <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
            <div className="space-y-8">
              <div className="rounded-3xl border border-white/40 bg-white/60 p-8 backdrop-blur-xl">
                <h2 className="mb-6 text-2xl font-semibold text-[#2d3b36]">
                  Shipping Details
                </h2>

                <div className="grid gap-5 md:grid-cols-2">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={shippingDetails.fullName}
                    onChange={handleInputChange}
                    className="rounded-2xl border border-[#d8d2c5] bg-white/80 px-5 py-4 outline-none"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={shippingDetails.email}
                    onChange={handleInputChange}
                    className="rounded-2xl border border-[#d8d2c5] bg-white/80 px-5 py-4 outline-none"
                  />

                  <input
                    type="text"
                    name="address"
                    placeholder="Street Address"
                    value={shippingDetails.address}
                    onChange={handleInputChange}
                    className="rounded-2xl border border-[#d8d2c5] bg-white/80 px-5 py-4 outline-none md:col-span-2"
                  />

                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={shippingDetails.city}
                    onChange={handleInputChange}
                    className="rounded-2xl border border-[#d8d2c5] bg-white/80 px-5 py-4 outline-none"
                  />

                  <input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP Code"
                    value={shippingDetails.zipCode}
                    onChange={handleInputChange}
                    className="rounded-2xl border border-[#d8d2c5] bg-white/80 px-5 py-4 outline-none"
                  />

                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={shippingDetails.country}
                    onChange={handleInputChange}
                    className="rounded-2xl border border-[#d8d2c5] bg-white/80 px-5 py-4 outline-none md:col-span-2"
                  />
                </div>
              </div>

              <PaymentSection
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
              />
            </div>

            <div className="h-fit rounded-3xl border border-white/40 bg-white/60 p-8 backdrop-blur-xl">
              <h2 className="mb-6 text-2xl font-semibold text-[#2d3b36]">
                Order Summary
              </h2>

              <div className="space-y-5">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-16 rounded-xl object-cover"
                    />

                    <div className="flex-1">
                      <h3 className="font-medium text-[#2d3b36]">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-sm text-[#7b8477]">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <p className="font-medium text-[#2d3b36]">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>

              <div className="my-8 border-t border-[#d8d2c5]" />

              <div className="mb-8 flex items-center justify-between">
                <span className="text-lg text-[#2d3b36]">Total</span>

                <span className="text-3xl font-semibold text-[#2d3b36]">
                  ₹{subtotal}
                </span>
              </div>

              <button
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full rounded-full bg-[#2d3b36] py-4 text-lg font-medium text-white transition-all duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isProcessing
                  ? "Processing Payment..."
                  : "Complete Secure Payment"}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CheckoutPage;
