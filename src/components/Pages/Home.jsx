import Banner from "../Header/Banner";
import BrandList from "./pageComponents/BrandList";
import BrandSpotlight from "./pageComponents/BrandSpotLight";
import LatestDeals from "./pageComponents/LatestDeals";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div className="w-[90%] mx-auto">
        <BrandList></BrandList>
        <BrandSpotlight></BrandSpotlight>
        <LatestDeals></LatestDeals>
      </div>
    </div>
  );
};

export default Home;
