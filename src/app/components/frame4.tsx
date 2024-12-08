import React from "react";
import Image from "next/image";

const mensProducts = [
  {
    id: 1,
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    price: "₹3,895",
    category: "Men&apos;s Short-Sleeve Running Top", // Escape the apostrophe
    image: "/images/Image (9).png",
  },
  {
    id: 2,
    name: "Nike Dri-FIT Challenger",
    price: "₹2,495",
    category: "Men&apos;s 18cm (approx.) 2-in-1 Versatile Shorts", // Escape the apostrophe
    image: "/images/Image (10).png",
  },
];

const womensProducts = [
  {
    id: 1,
    name: "Nike Dri-FIT ADV Run Division",
    price: "₹5,295",
    category: "Women&apos;s Long-Sleeve Running Top", // Escape the apostrophe
    image: "/images/Image (11).png",
  },
  {
    id: 2,
    name: "Nike Fast",
    price: "₹3,795",
    category: "Women&apos;s Mid-Rise 7/8 Running Leggings with Pockets", // Escape the apostrophe
    image: "/images/Image (12).png",
  },
];

const Frame4 = () => {
  return (
    <div className="w-full px-6 lg:px-9 mt-10 p-6">
      {/* Title Section */}
      <h2 className="hideen md:flex text-lg lg:text-2xl font-semibold mb-2">Gear Up</h2>
      <div className="flex justify-between mb-5 ">
        <div className="flex justify-end items-center gap-2 ml-[470px] ">
          <h3>Shop Men&apos;s</h3> {/* Escape the apostrophe */}
          <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-200">
            {"<"}
          </button>
          <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-200">
            {">"}
          </button>
        </div>
        <div className="flex justify-end items-center gap-2 mt-4">
          <h3>Shop Women&apos;s</h3> {/* Escape the apostrophe */}
          <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-200">
            {"<"}
          </button>
          <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-200">
            {">"}
          </button>
        </div>
      </div>

      {/* Men's Products */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Men's Products */}
        {mensProducts.map((product) => (
          <div key={product.id} className="flex flex-col ">
            {/* Product Image */}
            <div className="w-full aspect-square relative bg-gray-100 mr-[20px]">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            {/* Product Info */}
            <div className="mt-1 ">
              <h3 className="text-sm lg:text-base font-medium">
                {product.name}
              </h3>
              <div className="flex justify-between">
                <p className="text-sm text-gray-600 w-[150px]">{product.category}</p>
                <p className="text-sm lg:text-base font-medium text-end mt-0">
                  {product.price}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Women's Products */}
        {womensProducts.map((product) => (
          <div key={product.id} className="flex flex-col  ">
            {/* Product Image */}
            <div className="w-full aspect-square relative bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            {/* Product Info */}
            <div className="mt-1 ">
              <h3 className="text-sm lg:text-base font-medium">
                {product.name}
              </h3>
              <div className="flex justify-between">
                <p className="text-sm text-gray-600 w-[150px]">{product.category}</p>
                <p className="text-sm lg:text-base font-medium text-end mt-0">
                  {product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frame4;
