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
        required
        placeholder={placeholder}
        className="relative z-10 peer h-13 w-full border border-[#CBCBCB] rounded-lg px-4 pt-5 pb-5 text-sm text-gray-900 placeholder-gray-400 placeholder:font-semibold focus:outline-none"
      />
      <label
        htmlFor={name}
        className="absolute left-4 top-[-9.5px] pl-1 pr-5 text-sm text-[#6C25FF] font-medium peer-placeholder-shown:text-sm z-30 bg-[#F7F8F9]"
      >
        {label}
      </label>
    </div>
  );
};

const LoginScreen = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-[#F7F8F9] py-8 px-4">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900">
          Signin to your <br /> PopX account
        </h2>
        <p className="text-md text-gray-500 mt-1 mb-9">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <FloatingInput
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            placeholder="Enter email address"
            onChange={handleInputChange}
          />
          <FloatingInput
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            placeholder="Enter password"
            onChange={handleInputChange}
          />

          <button
            type="submit"
            className="w-full py-3 rounded-md bg-[#CBCBCB] text-white text-sm font-medium cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
