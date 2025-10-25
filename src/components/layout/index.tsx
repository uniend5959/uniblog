import Footer from "./footer";
import Header from "./header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="">
      <Header />
      <div className="mt-[70px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default MainLayout;
