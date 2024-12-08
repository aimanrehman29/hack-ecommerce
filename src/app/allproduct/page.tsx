import React from "react";
import Sidebar from "../components/sidebar";
import ProductGrid from "../components/productgrid";


const MainLayout = () => {
  return (
    <div className="flex">
      <div className="hidden md:flex">
        <Sidebar />
      </div>
      <div>
        <ProductGrid />
      </div>
    </div>
  );
};

export default MainLayout;
