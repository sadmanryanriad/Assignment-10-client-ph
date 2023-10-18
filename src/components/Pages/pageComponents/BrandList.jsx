import { Link } from "react-router-dom";

const BrandList = () => {
  const brands = [
    { name: "Toyota", imageUrl: "https://i.ibb.co/PjdHGW1/toyota.png" },
    { name: "Ford", imageUrl: "https://i.ibb.co/NT5NST9/ford.png" },
    { name: "BMW", imageUrl: "https://i.ibb.co/6bGdp2G/bmw.png" },
    {
      name: "Mercedes-Benz",
      imageUrl: "https://i.ibb.co/S6nSV4k/mercedes.png",
    },
    { name: "Tesla", imageUrl: "https://i.ibb.co/Dr08WMZ/tesla.png" },
    { name: "Honda", imageUrl: "https://i.ibb.co/S08ZQdK/honda.png" },
  ];

  return (
    <div className="w-full md:my-20 my-10">
      <h2 className="text-4xl text-center md:my-10 my-5">Our Top Brands</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 ">
        {brands.map((brand, index) => (
          //change this key later
          <Link to={`/${brand.name}`} key={index}>
            <div className="text-center border p-3 rounded-lg">
              <img
                src={brand.imageUrl}
                alt={brand.name}
                className="h-24 mx-auto"
              />
              <p className="mt-2 text-lg font-semibold">{brand.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrandList;
