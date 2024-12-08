import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { AiOutlineHeart } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
});

const ShoppingCart = () => {
  return (
    <div className="flex flex-col md:flex-row p-8 mt-10 gap-10">
      
      <div className="flex-1 md:w-500.33px] h-[auto]">
        {/* Free Delivery Banner */}
        <div className="h-[62.89px] bg-gray-200 p-3 mb-4">
          <h1 className="text-[13px]">Free Delivery</h1>
          <div className="flex justify-start">
            <p className="text-[13px]">
              Applies to orders of ₹14,000.00 or more.
            </p>
            <a href="#" className="underline text-[13px]">
              View details
            </a>
          </div>
        </div>

        {/* Bag Title */}
        <h1 className="text-[25px] text-bold ml-7 mb-4">Bag</h1>

        {/* Item 1 */}
        <div className="flex justify-start gap-5 mb-4">
          <div>
            <Image
              src={"/images/Rectangle (38).png"}
              alt=""
              width={150}
              height={150}
            />
          </div>
          <div className="w-full md:w-[537.33px] h-[auto]">
            <div className="flex justify-between">
              <h1 className="text-black text-[15px] font-bold">
                Nike Dri-FIT ADV TechKnit Ultra
              </h1>
              <p>MRP: ₹3,895.00</p>
            </div>
            <p className="text-gray-500 text-[15px]">
              Men's Short-Sleeve Running Top
            </p>
            <p className="text-gray-500 text-[15px]">
              Ashen Slate/Cobalt Bliss
            </p>
            <div className="flex gap-3">
              <p className="text-gray-500 text-[15px]">Size L</p>
              <p className="text-gray-500 text-[15px]">Quantity 1</p>
            </div>
            <div className="flex gap-5 mt-5">
              <AiOutlineHeart
                size={20}
                className="cursor-pointer text-gray-600 hover:text-black"
              />
              <RiDeleteBin6Line
                size={20}
                className="cursor-pointer text-gray-600 hover:text-black"
              />
            </div>
          </div>
        </div>

        <Separator className="bg-gray-200 hidden md:block" />

        {/* Item 2 */}
        <div>
          <div className="flex justify-start gap-5 mb-4 mt-5">
            <div>
              <Image
                src={"/images/Image (6).png"}
                alt=""
                width={150}
                height={150}
              />
            </div>
            <div className="w-full md:w-[537.33px] h-[auto]">
              <div className="flex justify-between">
                <h1 className="text-black text-[15px] font-bold">
                  Nike Dri-FIT ADV TechKnit Ultra
                </h1>
                <p>MRP: ₹3,895.00</p>
              </div>
              <p className="text-gray-500 text-[15px]">
                Men's Short-Sleeve Running Top
              </p>
              <p className="text-gray-500 text-[15px]">
                Ashen Slate/Cobalt Bliss
              </p>
              <div className="flex gap-3">
                <p className="text-gray-500 text-[15px]">Size L</p>
                <p className="text-gray-500 text-[15px]">Quantity 1</p>
              </div>
              <div className="flex gap-5 mt-5">
                <AiOutlineHeart
                  size={20}
                  className="cursor-pointer text-gray-600 hover:text-black"
                />
                <RiDeleteBin6Line
                  size={20}
                  className="cursor-pointer text-gray-600 hover:text-black"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="w-full md:w-[350.67px] h-[auto] ml-auto">
        <h1 className="text-[25px] text-bold text-center">Summary</h1>
        <div className="flex justify-between mt-5">
          <h1 className="text-[15px]">Subtotal</h1>
          <h1 className="text-[15px]">₹20,890.00</h1>
        </div>
        <div className="flex justify-between mt-5">
          <h1 className="text-[15px]">Estimated Delivery & Handling</h1>
          <h1 className="text-[15px]">Free</h1>
        </div>
        <Separator className="my-5" />
        <div className="flex justify-between mt-5">
          <h1 className="text-[15px]">Total</h1>
          <h1 className="text-[15px]">₹20,890.00</h1>
        </div>
        <Separator className="my-5" />
        <Link href={"/order"}>
          {" "}
          <button className="bg-black text-white px-6 py-2 rounded-full w-full mt-5">
            Member Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
