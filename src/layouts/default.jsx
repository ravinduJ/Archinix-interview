import { Outlet } from "react-router-dom";
import Navigation from "../components/UI/Navigation/Navigation";
import Footer from "../components/UI/Footer";
const Layout = () => {
  return (
    <>
     <Navigation/>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
