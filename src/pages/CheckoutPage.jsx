import React from "react";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const { totalAmount } = useSelector((state) => state.cart);

  return (
    <div className="text-center">
      <div className="border-2 w-xl mx-auto p-3 mt-3 rounded-2xl">
        <h3 className="font-bold">Total: ₹{totalAmount.toFixed(2)}</h3>
        <button>Proceed to Payment</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
