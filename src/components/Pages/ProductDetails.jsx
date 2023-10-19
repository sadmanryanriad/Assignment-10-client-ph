import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const ProductDetails = () => {
  // const { name, type, image, price, description, rating, brand } = product;

  const { id } = useParams();

  const [product,setProduct] = useState({});
  const {user} = useContext(AuthContext);

  useEffect(()=>{
    fetch(`http://localhost:3000/brands/product/${id}`)
    .then(res=>res.json())
    .then(data=>{
      setProduct(data);
    })
  },[id])

  const handleAddToCart = ()=>{
    console.log(user?.email, id);
    const updatedUer = {
      email: user?.email,
      cart: id
    }
          // send data to the server
          fetch("http://localhost:3000/cart", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updatedUer),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              toast.success("Added to cart!");
            });
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
        <div>
          <img
            src="https://i.ibb.co/YhWdptt/joey-banks-YApi-Wyp0lqo-unsplash-1.jpg"
            alt=""
            className="w-full"
          />
        </div>
        <div className="w-[90%] mx-auto md:mx-0 text-center space-y-4">
          <h2 className="text-2xl font-semibold">{product?.name}</h2>
          <p className="text-lg text-gray-500">{product?.brand}</p>
          <p className="text-lg text-gray-500">{product?.type}</p>
          <p className="text-2xl text-green-600">$ {product?.price}</p>
          <div className="flex items-center w-max mx-auto">
            <span className="text-yellow-400 text-lg mr-2">{product?.rating}</span>
          </div>
          <p className="mt-4 w-[80%] mx-auto">
            {product?.description}
          </p>
            <button onClick={handleAddToCart} className="bg-green-400 text-gray-800 font-semibold px-4 py-2 rounded-md mt-4">
              Add to Cart
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

