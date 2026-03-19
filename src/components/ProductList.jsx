import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";
const ProductList = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <h2>Loading....</h2>;
  return (
    <div className="text-center">
      <h2 className="text-xl font-bold mb-4">Products</h2>

      <div className="grid grid-cols-4 gap-4 mx-3">
        {items.map((product) => {
          return (
            <div key={product.id} className="border-2 p-4 rounded-2xl">
              <h4 className="font-semibold">{product.title}</h4>
              <p>₹{product.price}</p>
              <img src={product.thumbnail} className="mx-auto w-24" alt="" />

              <button className="bg-black p-2 text-white mt-2 w-full">
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
