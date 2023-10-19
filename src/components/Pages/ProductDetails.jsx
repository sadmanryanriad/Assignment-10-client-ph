import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  // const { name, type, image, price, description, rating, brand } = product;

  const { id } = useParams();

  const [product,setProduct] = useState({});

  useEffect(()=>{
    fetch(`http://localhost:3000/brands/product/${id}`)
    .then(res=>res.json())
    .then(data=>{
      setProduct(data);
    })
  },[id])

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
          <Link to={`/updateproduct/}`}>
            <button className="bg-green-400 text-gray-800 font-semibold px-4 py-2 rounded-md mt-4">
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

