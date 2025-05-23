import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FloatingInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="relative z-10 peer h-11 w-full border border-[#CBCBCB] rounded-lg px-4 pt-5 pb-5 text-[13px] font-semibold text-gray-900 placeholder-gray-400 placeholder:font-semibold focus:outline-none"
        required
      />
      <label
        htmlFor={name}
        className="absolute left-4 top-[-9.5px] pl-1 pr-5 text-[12px] font-semibold text-[#6C25FF] font-sm z-30 bg-[#F7F8F9]"
      >
        {label.includes("*") ? (
          <>
            {label.split("*")[0]}
            <span className="text-red-500">*</span>
          </>
        ) : (
          label
        )}
      </label>
    </div>
  );
};

const SignupScreen = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgent: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, phoneNumber, email, password, companyName } = formData;
    if (!fullName || !phoneNumber || !email || !password || !companyName) {
      alert("Please fill all required fields");
      return;
    }
    navigate("/profile");
  };

  return (
    <div className="h-full bg-[#F7F8F9] px-8 py-8 overflow-y-auto flex flex-col">
      <div className="h-full relative">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Create your <br />
            PopX account
          </h2>
        </div>

        <div className="space-y-5">
          <FloatingInput
            label="Full Name*"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter full name"
          />

          <FloatingInput
            label="Phone Number*"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Enter phone number"
          />

          <FloatingInput
            label="Email address*"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter email address"
          />

          <FloatingInput
            label="Password*"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter password"
          />

          <FloatingInput
            label="Company Name*"
            name="companyName"
            type="text"
            value={formData.companyName}
            onChange={handleInputChange}
            placeholder="Enter company name"
          />

          <div className="py-2">
            <p className="text-sm font-medium text-gray-700 mb-3">
              Are you an Agency? <span className="text-red-500">*</span>
            </p>
            <div className="flex space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isAgent"
                  value="true"
                  checked={formData.isAgent === true}
                  onChange={() =>
                    setFormData((prev) => ({ ...prev, isAgent: true }))
                  }
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isAgent"
                  value="false"
                  checked={formData.isAgent === false}
                  onChange={() =>
                    setFormData((prev) => ({ ...prev, isAgent: false }))
                  }
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">No</span>
              </label>
            </div>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="cursor-pointer w-full bg-[#6C25FF] text-md text-white font-semibold py-3 rounded-lg mt-6 absolute bottom-0"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default SignupScreen;
