"use client"
import React from "react";
import { SiNike } from "react-icons/si";

const Register = () => {
  return (
    <div className="flex justify-center items-center h-[1000px] bg-white">
      <div className="w-full max-w-md p-6 bg-white rounded-md">
        
        <div className="flex justify-center mb-6">
          <SiNike size={60} />
        </div>

        
        <h2 className="text-2xl font-semibold text-center mb-4">
          BECOME A NIKE MEMBER
        </h2>
        <p className="text-center text-gray-600 mb-8 text-sm">
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration, and community.
        </p>

        <form>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
            required
          />

          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
            required
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
            required
          />

          <input
            type="date"
            name="dateOfBirth"
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
            required
          />
          <p className="text-xs text-gray-500 mb-4">
            Get a Nike Member Reward every year on your Birthday.
          </p>

          <select
            name="country"
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
          >
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
          </select>

          <div className="flex justify-between mb-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" value="Male" />
              Male
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" value="Female" />
              Female
            </label>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <input type="checkbox" name="agreeToEmails" />
            <p className="text-xs text-gray-600">
              Sign up for emails to get updates from Nike on products, offers,
              and your Member benefits.
            </p>
          </div>

          <p className="text-xs text-gray-500 mb-6">
            By creating an account, you agree to Nike&rsquo;s{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Terms of Use
            </a>
            .
          </p>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            JOIN US
          </button>
        </form>

        <div className="text-center text-sm text-gray-600 mt-4">
          Already a Member?{" "}
          <a href="/login" className="underline">
            Sign In.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
