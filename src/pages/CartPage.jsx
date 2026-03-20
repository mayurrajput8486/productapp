import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "../features/cart/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="text-center border-4 w-2xl mx-auto mt-3 rounded-3xl p-3">
      <h2>Cart</h2>

      {cartItems.length === 0 && (
        <p>Cart is empty , Add at least one Product</p>
      )}

      {cartItems.map((item) => (
        <div key={item.id}>
          <h4 className="font-bold text-xl">{item.title}</h4>

          <button
            className="bg-black text-white text-xl p-2 w-10 rounded-l-lg"
            onClick={() => dispatch(decreaseQty(item.id))}
          >
            -
          </button>
          <span className="bg-orange-400 text-white text-xl p-2 w-20">
            {item.qty}
          </span>

          <button
            onClick={() => dispatch(increaseQty(item.id))}
            className="bg-black text-white text-xl p-2 w-10 rounded-r-lg"
          >
            +
          </button>

          <br />
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className=" bg-red-600 mt-4 p-2 rounded-2xl "
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
