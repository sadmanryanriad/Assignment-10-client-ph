import PropTypes from "prop-types";


const ProductDetails = () => {

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img src="https://i.ibb.co/YhWdptt/joey-banks-YApi-Wyp0lqo-unsplash-1.jpg" alt="" className="w-full" />
        </div>
        <div className="">
          <h2 className="text-2xl font-semibold">name</h2>
          <p className="text-lg text-gray-500">brand</p>
          <p className="text-lg text-gray-500">type</p>
          <p className="text-2xl text-green-600">$ price</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-400 text-lg mr-2">rating</span>
          </div>
          <p className="mt-4 w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta velit nisi ut reprehenderit aperiam. Ipsum suscipit asperiores in consequuntur voluptate iusto. Dolor necessitatibus veritatis tenetur dolore amet. Placeat, recusandae laudantium.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;


ProductDetails.propTypes = {
    product: PropTypes.object,
  };