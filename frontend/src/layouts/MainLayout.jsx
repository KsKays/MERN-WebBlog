import { Outlet } from "react-router";

import Navbar from "../components/Navbar";


const Layout = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;