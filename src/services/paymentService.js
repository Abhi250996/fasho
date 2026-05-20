const handleStripePayment = async (data) => {
  console.log("Initializing Stripe Payment Intent...", data);
  // Mock API Call for Stripe
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    success: true,
    transactionId: `st_${Math.random().toString(16).slice(2)}`,
  };
};

const handleRazorpayPayment = async (data) => {
  console.log("Initializing Razorpay Order...", data);
  // Mock API Call for Razorpay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    success: true,
    transactionId: `pay_${Math.random().toString(16).slice(2)}`,
  };
};

const handleApplePayPayment = async (data) => {
  console.log("Initializing Apple Pay...", data);
  return {
    success: true,
    transactionId: `ap_${Math.random().toString(16).slice(2)}`,
  };
};

const handleMockPayment = async (method, data) => {
  // Simulate a 95% success rate for the mock flow
  const isSuccess = Math.random() < 0.95;
  if (isSuccess) {
    return { success: true, transactionId: `mock_${method}_${Date.now()}` };
  } else {
    throw new Error(
      "Payment declined by the issuing bank. Please try another method.",
    );
  }
};

/**
 * Core Payment Processing Service
 * Dispatches to specific gateway handlers or mock processing.
 */
export const processPayment = async (method, data) => {
  console.log(`Processing payment with method: ${method}`, data);

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  switch (method) {
    case "stripe":
    case "card":
      return await handleStripePayment(data);
    case "razorpay":
      return await handleRazorpayPayment(data);
    case "applepay":
      return await handleApplePayPayment(data);
    case "upi":
    case "googlepay":
      return await handleMockPayment(method, data);
    default:
      return await handleMockPayment(method, data);
  }
};
