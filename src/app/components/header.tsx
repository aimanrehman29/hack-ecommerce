"use client";
import React, { useState } from "react";
import { SiNike } from "react-icons/si";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { IoBagOutline } from "react-icons/io5";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="w-full sm:h-[50px] lg:h-[80px] bg-white flex items-center justify-between px-6 lg:px-10 border-b border-gray-200">
        
        <div className="flex items-center">
          <SiNike className="w-[48px] h-[48px] lg:w-[78.47px] lg:h-[78.47px]" />
        </div>

        {/* Navigation Links (Hidden on small screens) */}
        <div className="hidden lg:flex space-x-6 text-sm font-medium ml-[150px]">
          <a href="#" className="hover:underline text-[16px] font-bold">
            New & Featured
          </a>
          <a href="#" className="hover:underline text-[16px] font-bold">
            Men
          </a>
          <a href="#" className="hover:underline text-[16px] font-bold">
            Women
          </a>
          <a href="#" className="hover:underline text-[16px] font-bold">
            Kids
          </a>
          <a href="#" className="hover:underline text-[16px] font-bold">
            Sale
          </a>
          <a href="#" className="hover:underline text-[16px] font-bold">
            SNKRS
          </a>
        </div>

        <div className="flex items-center space-x-4">
        <div className=" lg:flex items-center bg-gray-100 rounded-full px-1 py-2 text-center flex  justify-between">
            <AiOutlineSearch className="text-black-500" size={20} />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none ml-2 text-sm placeholder-gray-500"
            />
          </div>

          <AiOutlineHeart
            size={20}
            className="cursor-pointer text-gray-600 hover:text-black"
          />
          <Link href="/cart">
          <IoBagOutline
            size={20}
            className="cursor-pointer text-gray-600 hover:text-black"
            
          /></Link>

          <HiOutlineMenuAlt3
            size={28}
            className="lg:hidden cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      {/* Sidebar (Mobile Navigation) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
          {/* Sidebar Content */}
          <div className="w-64 bg-white h-full p-6 space-y-6">
            {/* Close Icon */}
            <HiOutlineX
              size={28}
              className="cursor-pointer text-black"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <div className="flex flex-col space-y-4 text-sm font-medium">
              <a href="#" className="hover:underline text-[16px] font-bold">
                New & Featured
              </a>
              <a href="#" className="hover:underline text-[16px] font-bold">
                Men
              </a>
              <a href="#" className="hover:underline text-[16px] font-bold">
                Women
              </a>
              <a href="#" className="hover:underline text-[16px] font-bold">
                Kids
              </a>
              <a href="#" className="hover:underline text-[16px] font-bold">
                Sale
              </a>
              <a href="#" className="hover:underline text-[16px] font-bold">
                SNKRS
              </a>
            </div>
          </div>

          <div className="flex-1" onClick={() => setIsOpen(false)}></div>
        </div>
      )}
    </div>
  );
};

export default Header;
