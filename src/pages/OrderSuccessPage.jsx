import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../context/OrderContext"; // Assuming OrderContext exists
import { useCart } from "../context/CartContext";

const OrderSuccessPage = () => {
  const { order } = useOrder();
  const navigate = useNavigate();

  useEffect(() => {
    if (!order) navigate("/products");
  }, [order, navigate]);

  if (!order) {
    return null; // Or a loading spinner, or redirect immediately
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-[#1a1c18] text-[#e2e2d5] flex flex-col items-center justify-center px-4 py-32"
    >
      <div className="max-w-3xl w-full text-center space-y-12 p-12 border border-[#3d4039]/30 bg-[#3d4039]/5 shadow-2xl cinematic-glass relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#e2e2d5]/20 to-transparent" />

        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="w-20 h-20 border border-[#e2e2d5]/20 rounded-full flex items-center justify-center mx-auto"
        >
          <span className="text-3xl">✧</span>
        </motion.div>

        <h1 className="text-5xl font-serif tracking-tight text-[#e2e2d5]">
          Your selection is confirmed.
        </h1>

        <div className="space-y-4 max-w-md mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-[#e2e2d5]/60">
            Confirmation details sent to
          </p>
          <p className="text-lg font-light italic">{order.shipping?.email}</p>
        </div>

        <div className="grid grid-cols-2 gap-8 border-y border-[#3d4039]/50 py-8 text-left">
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-[#e2e2d5]/40 mb-2">
              Order Reference
            </h4>
            <p className="font-mono text-xs uppercase">{order.id}</p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-[#e2e2d5]/40 mb-2">
              Total Value
            </h4>
            <p className="text-sm">${order.subtotal?.toFixed(2)} USD</p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-[#e2e2d5]/40 mb-2">
              Delivery To
            </h4>
            <p className="text-xs font-light leading-relaxed">
              {order.shipping?.fullName}
              <br />
              {order.shipping?.address}, {order.shipping?.city}
            </p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-[#e2e2d5]/40 mb-2">
              Estimated Arrival
            </h4>
            <p className="text-xs font-light italic">3—5 Business Days</p>
          </div>
        </div>

        <button
          onClick={() => navigate("/products")}
          className="px-12 py-4 border border-[#e2e2d5]/20 text-[#e2e2d5] uppercase tracking-[0.4em] text-[10px] font-bold hover:bg-[#e2e2d5] hover:text-[#1a1c18] transition-all duration-500"
        >
          Continue Shopping
        </button>
      </div>
    </motion.div>
  );
};

export default OrderSuccessPage;
