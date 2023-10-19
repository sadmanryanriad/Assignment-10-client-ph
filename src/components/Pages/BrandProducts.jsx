import ProductCard from "./pageComponents/ProductCard";
import Advertisement from "./pageComponents/Advertisement";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import NoProductFound from "./pageComponents/NoProductFound";

const BrandProducts = () => {
  const {brand} = useParams();
  const [products,setProducts] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:3000/brands/${brand.toLowerCase()}`)
    .then(res=>res.json())
    .then(data=>{
      setProducts(data);
    })
  },[brand])


  return (
    <>
    {
      products.length?
      <div className="md:p-8 md:w-[95%] lg:w-[80%] mx-auto space-y-5">
        <div className="lg:w-2/3 mx-auto">
        <Advertisement></Advertisement>
        </div>
        <h2 className="text-4xl text-center">All Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
    : 
    <NoProductFound></NoProductFound>
    }
    </>
  );
};

export default BrandProducts;
