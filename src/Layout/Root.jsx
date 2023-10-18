import Navbar from "../components/Header/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import { Toaster } from "react-hot-toast";
import ScrollToTopEffect from "../Utilities/ScrollToTopEffect";

const Root = () => {
  return (
    <div>
      <ScrollToTopEffect></ScrollToTopEffect>
      <Navbar />
      <Outlet />
      <Footer></Footer>
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </div>
  );
};

export default Root;
