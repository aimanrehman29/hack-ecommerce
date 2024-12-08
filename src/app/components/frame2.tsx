import React from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Nike Air Max Pulse",
    price: "₹13,995",
    category: "Women's Shoes",
    image: "/images/Image (4).png",
  },
  {
    id: 2,
    name: "Nike Air Max Pulse",
    price: "₹13,995",
    category: "Men's Shoes",
    image: "/images/Image (5).png",
  },
  {
    id: 3,
    name: "Nike Air Max 97 SE",
    price: "₹16,995",
    category: "Men's Shoes",
    image: "/images/Image (6).png",
  },
  {
    id: 4,
    name: "Nike Air Max",
    price: "₹13,995",
    category: "Women's Shoes",
    image: "/images/Rectangle.png",
  },
];

const Frame2 = () => {
  return (
    <div className="w-full px-6 lg:px-20 mt-10">
      <div className="flex justify-between items-center">
        <h2 className="text-lg lg:text-2xl font-semibold">Best of Air Max</h2>

        <div className="flex justify-end items-center gap-2 mt-4">
          <button className="text-sm lg:text-base font-medium hover:underline">
            Shop
          </button>
          <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-200">
            {"<"}
          </button>
          <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-200">
            {">"}
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col ">
            {/* Product Image */}
            <div className="w-full aspect-square bg-gray-100 relative">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded w-[441.36] h-[441.36]"
              />
            </div>

            <div className="mt-3">
              <h3 className="text-sm lg:text-base font-medium">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600">{product.category}</p>
              <p className="text-sm lg:text-base font-medium">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frame2;
