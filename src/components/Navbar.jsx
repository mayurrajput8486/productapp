import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="relative bg-black after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
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
                </div>
              </div>
           </div>
          </div>
        </div>

        <el-disclosure id="mobile-menu" hidden className="block sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <NavLink
              to="#"
              aria-current="page"
              className="block rounded-md bg-gray-950/50 px-3 py-2 text-base font-medium text-white"
            >
              Dashboard
            </NavLink>
            <NavLink
              to="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              Team
            </NavLink>
            <NavLink
              to="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              Projects
            </NavLink>
            <NavLink
              to="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              Calendar
            </NavLink>
          </div>
        </el-disclosure>
      </nav>
    </div>
  );
};

export default Navbar;
