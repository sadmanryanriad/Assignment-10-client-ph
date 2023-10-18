import Banner from "../Header/Banner";
import BrandList from "./pageComponents/BrandList";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div className="w-[80%] mx-auto">
        <BrandList></BrandList>
      </div>
    </div>
  );
};

export default Home;
