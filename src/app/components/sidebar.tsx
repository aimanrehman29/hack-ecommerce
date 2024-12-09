"use client"
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[250px] bg-gray-100 p-4 h-screen overflow-y-auto">
      
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">New (500)</h2>
        <ul className="space-y-2">
          <li className="cursor-pointer hover:underline">Shorts</li>
          <li className="cursor-pointer hover:underline">Sports Bras</li>
          <li className="cursor-pointer hover:underline">Tops & T-Shirts</li>
          <li className="cursor-pointer hover:underline">Hoodies & Sweatshirts</li>
          <li className="cursor-pointer hover:underline">Jackets</li>
          <li className="cursor-pointer hover:underline">Trousers & Tights</li>
          <li className="cursor-pointer hover:underline">Socks</li>
        </ul>
      </div>

      
      <div className="mb-6">
        <h3 className="text-md font-medium mb-2">Gender</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Men
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Women
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Unisex
          </label>
        </div>
      </div>

     
      <div className="mb-6">
        <h3 className="text-md font-medium mb-2">Kids</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Boys
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Girls
          </label>
        </div>
      </div>

      {/* Price Section */}
      <div className="mb-6">
        <h3 className="text-md font-medium mb-2">Shop by Price</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="radio" name="price" />
            Under ₹2,500
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="price" />
            ₹2,501 - ₹5,000
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
