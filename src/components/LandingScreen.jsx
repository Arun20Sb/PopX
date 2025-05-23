import { useNavigate } from "react-router-dom";

const LandingScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-end h-full bg-[#F7F8F9] p-6">
      <div className="mb-5">
        <h1 className="text-3xl font-bold text-gray-900">Welcome to PopX</h1>
        <p className="text-xl text-gray-500 mt-1">
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
        </p>

        <button
          onClick={() => navigate("/signup")}
          className="cursor-pointer w-full bg-[#6C25FF] text-md text-white font-semibold py-3 rounded-lg mt-6"
        >
          Create Account
        </button>
        <button
          onClick={() => navigate("/login")}
          className="cursor-pointer w-full bg-[#CEBAFB] text-md font-bold text-gray-950 py-3 rounded-lg mt-3"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default LandingScreen;
