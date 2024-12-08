import React from "react";
import Image from "next/image";
import { ChevronDown,SlidersHorizontal } from "lucide-react"

import Link from "next/link"; // Import Link for navigation

const products = Array.from({ length: 96 }, (_, index) => ({
  id: index + 1,
  name: `as you want new in demand ${index + 1}`,
  price: `₹${(index + 1) * 100}`,
  category: "Sample Category",
  image: `/images/Rectangle (${(index % 43) + 1}).png`,
}));

const ProductGrid = () => {
  return (
    <div className="w-full px-4 lg:px-8 mt-5">
      {/* Product Grid */}
      <div className="">
        {/* Filter and Sort */}
        <div className="flex justify-end mb-2">
          <div className="flex justify-end gap-1">
            <h3>Hide Filters</h3>
            <SlidersHorizontal size={18} />
          </div>{" "}
          <div className="flex justify-end ml-5">
            <h3>Sort By</h3> <ChevronDown size={25} />
          </div>
        </div>

        {/* Grid of Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-1">
          {products.map((product) => (
            <Link key={product.id} href={`/productDetail`} passHref>
              <div
                className="border rounded-lg shadow-md overflow-hidden md:w-[200px] lg:w-[348px] cursor-pointer"
                style={{
                  height: "533px",
                }}
              >
                {/* Product Image */}
                <div
                  className="relative bg-gray-200"
                  style={{
                    width: "100%",
                    height: "348px", // Set the image height
                  }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                {/* Product Details */}
                <div className="p-4" style={{ height: "185px" }}>
                  <p className="text-red-800">just in</p>
                  <h3 className="text-base lg:text-lg font-medium">
                    {product.name}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-500">
                    {product.category}
                  </p>
                  <p className="text-sm lg:text-base font-semibold mt-2">
                    {product.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
