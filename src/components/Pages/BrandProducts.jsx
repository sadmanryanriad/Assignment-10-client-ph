import ProductCard from "./pageComponents/ProductCard";
import productsToShow from "../../../public/products.json";
import Advertisement from "./pageComponents/Advertisement";

const BrandProducts = () => {
  return (
    <div className="md:p-8 md:w-[95%] lg:w-[80%] mx-auto space-y-5">
        <div className="lg:w-2/3 mx-auto">
        <Advertisement></Advertisement>
        </div>
        <h2 className="text-4xl text-center">All Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {productsToShow.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;
