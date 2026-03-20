import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);

  // total quantity
  const totalQty = cartItems.reduce((total, item) => total + item.qty, 0);

  return (
    <div>
      <nav className="relative bg-sky-600 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
        <div className="mx-auto px-5">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div>
                <h2 className="text-2xl text-orange-300">ShopEasy</h2>
              </div>

              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavLink
                    to="/"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white hover:text-white"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/cart"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                    Cart
                  </NavLink>
                  <NavLink
                    to="/checkout"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                    Checkout
                  </NavLink>

                  
                  <span>${totalAmount.toFixed(2)}</span>
                
                  <NavLink
                    to="/cart"
                    className="relative text-white text-xl ml-3"
                  >
                    🛒
                    {/* Badge */}
                    {totalQty > 0 && (
                      <span className="absolute -top-2 -right-3 bg-red-500 text-yellow-300 text-xs px-2 py-0.5 rounded-full">
                        {totalQty}
                      </span>
                    )}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
