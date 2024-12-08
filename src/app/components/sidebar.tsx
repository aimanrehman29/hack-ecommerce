"use client"
import React, { useState } from "react";

const Sidebar = () => {
  const [genderFilter, setGenderFilter] = useState([]);
  const [kidsFilter, setKidsFilter] = useState([]);
  const [priceFilter, setPriceFilter] = useState("");

  const toggleFilter = (filter, setFilter, value) => {
    setFilter((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="w-[250px] bg-gray-100 p-4 h-screen overflow-y-auto">
      {/* Category Section */}
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

      {/* Gender Section */}
      <div className="mb-6">
        <h3 className="text-md font-medium mb-2">Gender</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={genderFilter.includes("Men")}
              onChange={() => toggleFilter(genderFilter, setGenderFilter, "Men")}
            />
            Men
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={genderFilter.includes("Women")}
              onChange={() =>
                toggleFilter(genderFilter, setGenderFilter, "Women")
              }
            />
            Women
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={genderFilter.includes("Unisex")}
              onChange={() =>
                toggleFilter(genderFilter, setGenderFilter, "Unisex")
              }
            />
            Unisex
          </label>
        </div>
      </div>

      {/* Kids Section */}
      <div className="mb-6">
        <h3 className="text-md font-medium mb-2">Kids</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={kidsFilter.includes("Boys")}
              onChange={() => toggleFilter(kidsFilter, setKidsFilter, "Boys")}
            />
            Boys
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={kidsFilter.includes("Girls")}
              onChange={() => toggleFilter(kidsFilter, setKidsFilter, "Girls")}
            />
            Girls
          </label>
        </div>
      </div>

      {/* Price Section */}
      <div className="mb-6">
        <h3 className="text-md font-medium mb-2">Shop by Price</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="price"
              checked={priceFilter === "Under 2,500"}
              onChange={() => setPriceFilter("Under 2,500")}
            />
            Under ₹2,500
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="price"
              checked={priceFilter === "2,501 - 5,000"}
              onChange={() => setPriceFilter("2,501 - 5,000")}
            />
            ₹2,501 - ₹5,000
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
