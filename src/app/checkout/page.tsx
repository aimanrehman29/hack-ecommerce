"use client";
import React from "react";
import { RiInbox2Line } from "react-icons/ri";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const Checkout = () => {
  return (
    <div className="flex flex-col md:flex-row p-5 md:p-20 gap-8 overflow-x-hidden">
      {/* Left Side: Form */}
      <div className="w-full md:w-[800px] mt-5">
        <div>
          <h1 className="font-bold mt-5 text-lg md:text-2xl">How would you like to get your order?</h1>
          <p className="text-sm md:text-base">
            Customs regulation for India require a copy of the recipient's KYC.
            The address on the KYC needs to match the shipping address. Our
            courier will contact you via SMS/email to obtain a copy of your KYC.
            The KYC will be stored securely and used solely for the purpose of
            clearing customs (including sharing it with customs officials) for
            all orders and returns. If your KYC does not match your shipping
            address, please click the link for more information. Learn More
          </p>
          <button className="w-full border border-black text-black py-2 px-4 rounded-md hover:bg-gray-500 hover:text-white flex justify-start text-xs gap-4 mt-5">
            <RiInbox2Line size={20} />
            Deliver It
          </button>
        </div>

        {/* Address Section */}
        <div>
          <h1 className="font-bold mt-5 text-lg md:text-2xl">Enter your name and address:</h1>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full p-3 border border-gray-300 rounded-md mb-4 mt-5"
            required
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full p-3 border border-gray-300 rounded-md mb-4 mt-5"
            required
          />

          <input
            type="text"
            name="Address Line 1"
            placeholder="Address Line 1"
            className="w-full p-3 border border-gray-300 rounded-md mb-4 mt-5"
            required
          />
          <p className="text-xs text-gray-500 mb-4">We do not ship to P.O. boxes</p>

          <input
            type="text"
            name="Address Line 2"
            placeholder="Address Line 2"
            className="w-full p-3 border border-gray-300 rounded-md mb-4 mt-5"
            required
          />

          <input
            type="text"
            name="Address Line 3"
            placeholder="Address Line 3"
            className="w-full p-3 border border-gray-300 rounded-md mb-4 mt-5"
            required
          />

          <div className="flex flex-col md:flex-row justify-between gap-3 mt-5">
            <input
              type="text"
              name="Postal Code"
              placeholder="Postal Code"
              className="p-3 border border-gray-300 rounded-md mb-4 mt-5 w-full md:w-auto"
              required
            />
            <input
              type="text"
              name="Locality"
              placeholder="Locality"
              className="p-3 border border-gray-300 rounded-md mb-4 mt-5 w-full md:w-auto"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-3 mt-5">
            <input
              type="text"
              name="State/Territory"
              placeholder="State/Territory"
              className="p-3 border border-gray-300 rounded-md mb-4 mt-5 w-full md:w-auto"
              required
            />
            <select
              name="country"
              className="w-full p-3 border border-gray-300 rounded-md mb-4 mt-5"
            >
              <option value="India">India</option>
              <option value="Pakistan">Pakistan</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Australia">Australia</option>
            </select>
          </div>
        </div>

        {/* Save Information */}
        <label className="text-gray-400 gap-4 mt-5">
          <input type="checkbox" name="Save" value="fill it" />
          Save this address to my profile
        </label>
        <br />
        <label className="text-gray-400 gap-4 mt-5">
          <input type="checkbox" name="Save" value="fill it" />
          Make this my preferred address
        </label>

        {/* Contact Information */}
        <h1 className="font-bold mt-5 text-lg md:text-2xl">What's your contact information?</h1>
        <input
          type="email"
          name="Email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-md mb-4 mt-5"
          required
        />

        <input
          type="number"
          name="Number"
          placeholder="Phone Number"
          className="w-full p-3 border border-gray-300 rounded-md mb-4 mt-5"
          required
        />
        <p className="text-xs text-gray-500 mb-4 mt-5">
          A carrier might contact you to confirm delivery.
        </p>

        {/* PAN Information */}
        <h1 className="font-bold text-lg mt-5">What's your PAN?</h1>
        <input
          type="number"
          name="PAN"
          placeholder="PAN"
          className="w-full p-3 border border-gray-300 rounded-md mb-4 mt-5"
          required
        />
        <p className="text-xs text-gray-500 mb-4 mt-5">
          Enter your PAN to enable payment with UPI, Net Banking or local card methods.
        </p>

        {/* Save PAN Details */}
        <label className="text-gray-400 gap-4 mt-5">
          <input type="checkbox" name="Save" value="fill it" />
          Save PAN details to Nike Profile
        </label>
        <br />
        <label className="text-gray-400 gap-4 mt-5">
          <input type="checkbox" name="Save" value="fill it" />
          I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy. eShopWorld is a trusted Nike partner.
        </label>
        
        <button className="w-full border border-black text-black py-2 px-4 rounded-full hover:bg-gray-500 hover:text-white mt-5 flex justify-center items-center text-xs gap-4">
          Continue
        </button>

        <Separator className="mt-10 mb-10" />
        <h1>Delivery</h1>
        <Separator className="mt-10 mb-10" />
        <h1>Billing</h1>
        <Separator className="mt-10 mb-10" />
        <h1>Payment</h1>
      </div>

      {/* Right Side: Summary Section */}
      <div className="w-full md:w-[350px] h-auto ml-auto mt-5">
        <h1 className="text-[25px] font-bold text-center">Order Summary</h1>
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

        <button className="bg-black text-white px-6 py-2 rounded-full w-full mt-5">
          Member Checkout
        </button>
        <p className="text-xs text-gray-500 mt-2">The total reflects the price of your order, including all duties and taxes.</p>

        <h1 className="font-bold mt-5">Arrives Mon, 27 Mar - Wed, 12 Apr</h1>

        <div className="w-full md:w-[320px] h-auto mt-5">
          <div className="flex justify-between mb-5">
            <Image src={"/images/Image (9).png"} alt="Product 1" width={208} height={208} className="p-3" />
            <div className="py-4">
              <h1 className="text-sm">Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top</h1>
              <p className="text-xs text-gray-400">Qty 1</p>
              <p className="text-xs text-gray-400">Size L</p>
              <p className="text-xs text-gray-400">₹3,895.00</p>
            </div>
          </div>
          <div className="flex justify-between mb-5">
            <Image src={"/images/Image (6).png"} alt="Product 2" width={208} height={208} className="p-3" />
            <div className="py-4">
              <h1 className="text-sm">Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top</h1>
              <p className="text-xs text-gray-400">Qty 1</p>
              <p className="text-xs text-gray-400">Size L</p>
              <p className="text-xs text-gray-400">₹3,895.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
