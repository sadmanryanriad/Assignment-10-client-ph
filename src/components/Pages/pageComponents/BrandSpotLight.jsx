
const BrandSpotlight = () => {
  return (
    <div className="py-6 text-center">
      <h2 className="text-2xl font-semibold">Toyota Spotlight</h2>
      <p className="text-gray-500 mb-4">
        Discover the best products from Toyota.
      </p>
      <img
        src="https://i.ibb.co/bPxRVr3/car.png"
        alt="Toyota"
        className="w-full lg:w-[50%] mx-auto"
      />
      <p className="mt-4 w-2/3 mx-auto">
        Toyota is known for its reliability and innovation in the automotive
        industry. Explore a wide range of Toyota vehicles and accessories
        designed to enhance your driving experience.
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
        Explore Toyota
      </button>
    </div>
  );
};

export default BrandSpotlight;
