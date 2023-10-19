import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";


const ProductDetails = () => {

  const {id} = useParams();
  console.log(id);

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
        <div>
          <img src="https://i.ibb.co/YhWdptt/joey-banks-YApi-Wyp0lqo-unsplash-1.jpg" alt="" className="w-full" />
        </div>
        <div className="w-[90%] mx-auto md:mx-0 text-center space-y-4">
          <h2 className="text-2xl font-semibold">name</h2>
          <p className="text-lg text-gray-500">brand</p>
          <p className="text-lg text-gray-500">type</p>
          <p className="text-2xl text-green-600">$ price</p>
          <div className="flex items-center w-max mx-auto">
            <span className="text-yellow-400 text-lg mr-2">rating</span>
          </div>
          <p className="mt-4 w-[80%] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta velit nisi ut reprehenderit aperiam. Ipsum suscipit asperiores in consequuntur voluptate iusto. Dolor necessitatibus veritatis tenetur dolore amet. Placeat, recusandae laudantium.</p>
          <Link to={`/updateproduct/}`}>
          <button className="bg-green-400 text-gray-800 font-semibold px-4 py-2 rounded-md mt-4">
            Add to Cart
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;


ProductDetails.propTypes = {
    product: PropTypes.object,
  };