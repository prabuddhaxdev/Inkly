import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="px-4 md:px-5 lg:px-10 lx:px-20 2xl:px-40">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
