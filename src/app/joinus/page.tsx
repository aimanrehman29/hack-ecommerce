"use client"
import React, { useState } from "react";
import { SiNike } from "react-icons/si";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    country: "India",
    gender: "",
    agreeToEmails: false,
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
    <div className="flex justify-center items-center h-[1000px] bg-white">
      <div className="w-full max-w-md p-6 bg-white  rounded-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
        <SiNike size={60}/>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-4">
          BECOME A NIKE MEMBER
        </h2>
        <p className="text-center text-gray-600 mb-8 text-sm">
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration, and community.
        </p>

       
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

          
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          
          <input
            type="date"
            name="dateOfBirth"
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
          <p className="text-xs text-gray-500 mb-4">
            Get a Nike Member Reward every year on your Birthday.
          </p>

         
          <select
            name="country"
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
          </select>

         
          <div className="flex justify-between mb-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              Male
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              Female
            </label>
          </div>

          
          <div className="flex items-center gap-2 mb-6">
            <input
              type="checkbox"
              name="agreeToEmails"
              checked={formData.agreeToEmails}
              onChange={handleChange}
            />
            <p className="text-xs text-gray-600">
              Sign up for emails to get updates from Nike on products, offers,
              and your Member benefits.
            </p>
          </div>

        
          <p className="text-xs text-gray-500 mb-6">
            By creating an account, you agree to Nike’s{" "}
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

        
        <p className="text-center text-sm text-gray-600 mt-4">
          Already a Member?{" "}
          <a href="/login" className="underline">
            Sign In.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
