import Banner from "../components/Header/Banner";
import Navbar from "../components/Header/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="relative">
      <img
        className="w-screen h-screen fixed top-0 left-0 z-0"
        src="/scattered-forcefields.svg"
        alt=""
      />
      <div className="max-w-6xl mx-auto relative">
        <Navbar />
        <Banner></Banner>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
