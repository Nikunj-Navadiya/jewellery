import React, { useState } from "react";
import assets from "../assets/assets";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const API_URL = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API_URL}/api/contact`, formData);
      alert("Message sent successfully!");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-14">
      <div className="flex flex-col lg:flex-row items-center gap-12">

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={assets.contact}
            alt="Contact"
            className="w-full max-w-sm mx-auto"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-6 text-gray-900">
            Contact Us
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>

            {/* Name */}
            <div>
              <label className="block text-lg font-medium text-gray-800 mb-1">
                Full Name
              </label>
              <input
                 name="name"
                value={formData.name} onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div className="flex w-full gap-10">

              {/* Phone */}
              <div className="w-full">
                <label className="block text-lg font-medium text-gray-800 mb-1">
                  Phone Number
                </label>
                <input
                  name="phone"
                  value={formData.phone} onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>

              {/* Email */}
              <div className="w-full">
                <label className="block text-lg font-medium text-gray-800 mb-1">
                  Email
                </label>
                <input
                  name="email"
                  value={formData.email} onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>

            </div>

            {/* Message */}
            <div>
              <label className="block text-lg font-medium text-gray-800 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                value={formData.message} onChange={handleChange}
                placeholder="Write your message..."
                className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full text-xl bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
