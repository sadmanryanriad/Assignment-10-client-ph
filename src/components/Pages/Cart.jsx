import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import CartCard from "./pageComponents/CartCard";
import toast from "react-hot-toast";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/cart/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [user]);

  const handleDelete = (userProductId) => {
    fetch(`http://localhost:3000/cart/${userProductId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = products.filter(product=> product._id !== userProductId);
        setProducts(remaining);
        toast.success("item removed");
      });
  };

  return (
    <div className="rounded-lg max-w-max mx-auto">
      <h2 className="text-2xl font-bold text-center mt-5 mb-5 md:mb-10">
        Cart Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {products?.length ? (
          products.map((card) => (
            <CartCard key={card._id} card={card} handleDelete={handleDelete}></CartCard>
          ))
        ) : (
          <p className="text-5xl">
            No data found.{" "}
            <span className="text-red-500">Add product to show!</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;
