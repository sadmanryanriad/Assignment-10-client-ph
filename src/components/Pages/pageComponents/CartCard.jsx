import PropTypes from "prop-types";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const CartCard = ({ card }) => {
  const id = card?.cart;
  const userProductId = card?._id;

  const [product, setProduct] = useState({});
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:3000/brands/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  const toDelete = () => {
    return {
      email: user?.email,
      deleteId: id,
    };
  };

  const handleDelete = () => {
    fetch(`http://localhost:3000/cart/${userProductId}`, {
      method: "DELETE",
    })
      .then((res) => res.json(toDelete))
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div className="border p-4 m-4 md:m-0 rounded-lg text-center">
        <img
          src={product.image}
          alt=""
          className="w-80 h-48 mx-auto rounded-lg"
        />
        <div className="p-3">
          <p className="mt-2 text-lg font-semibold">{product.name}</p>
          <p className="text-sm text-gray-500">Brand: {product.brand}</p>
          <p className="text-sm text-gray-500">Type: {product.type}</p>
          <p className="text-green-600 text-lg font-semibold">
            Price: ${product.price}
          </p>
          <p className="text-sm text-yellow-500">Rating: {product.rating}</p>
          <div className="mt-4">
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CartCard.propTypes = {
  card: PropTypes.object,
};

export default CartCard;
