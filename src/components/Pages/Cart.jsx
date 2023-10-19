import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import CartProduct from "./pageComponents/CartProduct";

const Cart = () => {


  const {user} = useContext(AuthContext);
  const [products,setProducts] = useState([]);
  
  useEffect(()=>{
    fetch(`http://localhost:3000/cart/${user?.email}`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setProducts(data);
    })
  },[user])

  const handleCheckout = ()=>{
    
  }

  return (
    <div className="pt-10">
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {products?.length ? (
            products.map((card) => (
              <CartProduct key={card._id} id={card.cart}></CartProduct>
            ))
          ) : (
            <p className="text-5xl">
              No data found.{" "}
              <span className="text-red-500">Add product to show!</span>
            </p>
          )}
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Sub total</p>
            <p className="text-gray-700">${products?.price}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Additional</p>
            <p className="text-gray-700">${products?.price && 50}</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">${products?.price && products?.price + 50}</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button
            onClick={handleCheckout}
            className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
          >
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;