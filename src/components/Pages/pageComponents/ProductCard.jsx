import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  const { name, brand, type, price, rating, image } = product;

  return (
    <div className="border p-4 m-4 md:m-0 rounded-lg text-center">
      <img src={image} alt={name} className="w-80 mx-auto rounded-lg" />
<div className="p-3">
<p className="mt-2 text-lg font-semibold">{name}</p>
      <p className="text-sm text-gray-500">Brand: {brand}</p>
      <p className="text-sm text-gray-500">Type: {type}</p>
      <p className="text-green-600 text-lg font-semibold">Price: ${price}</p>
      <p className="text-sm text-yellow-500">Rating: {rating}</p>
      <div className="mt-4">
        <button className="bg-[#2B3440] text-white px-4 py-2 rounded-md mr-2">
          See Details
        </button>
        <button className="bg-green-400 text-white px-4 py-2 rounded-md mr-2">
          Update
        </button>
      </div>
</div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
  onDeleteClick: PropTypes.func, // Function to handle delete
};

export default ProductCard;
