"use client"
import React, { useState } from "react";
import { SiNike } from "react-icons/si";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    keepSignedIn: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-full max-w-md p-6 bg-white  rounded-md">
        
        <div className="flex justify-center mb-6">
        <SiNike size={60}/>
        </div>

       
        <h2 className="text-2xl font-semibold text-center mb-4">
          YOUR ACCOUNT FOR EVERYTHING NIKE
        </h2>

        
        <form onSubmit={handleSubmit}>
         
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
            value={formData.email}
            onChange={handleChange}
            required
          />

          
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
            value={formData.password}
            onChange={handleChange}
            required
          />

        
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="keepSignedIn"
                checked={formData.keepSignedIn}
                onChange={handleChange}
              />
              Keep me signed in
            </label>
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Forgot your password?
            </a>
          </div>

          =
          <p className="text-xs text-gray-500 mb-6">
            By logging in, you agree to Nike’s{" "}
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
            SIGN IN
          </button>
        </form>

       
        <p className="text-center text-sm text-gray-600 mt-4">
          Not a Member?{" "}
          <a href="/joinus" className="underline">
            Join Us.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
