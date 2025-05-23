import { Camera } from "lucide-react";

const ProfileScreen = () => {
  return (
    <div className="h-full max-w-md mx-auto rounded-lg shadow-md bg-[#F7F8F9">
      <div className="px-6 py-4 border-b border-gray-100 bg-white">
        <h2 className="text-lg font-semibold text-gray-800">
          Account Settings
        </h2>
      </div>

      <div className="px-6 py-6">
        <div className="flex items-start space-x-4 relative">
          <div className="relative w-16 h-16">
            <img
              src="/women.jpg"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <button className="absolute bottom-0 right-0 bg-[#6C25FF] p-1 rounded-full border-2 border-white">
              <Camera className="w-4 h-4 text-white" />
            </button>
          </div>

          <div>
            <p className="text-md font-bold text-gray-800">Marry Doe</p>
            <p className="text-md text-gray-500">Marry@Gmail.Com</p>
          </div>
        </div>
      </div>

      <div className="px-5 w-full">
        <p className="mt-3 text-md text-gray-800 leading-relaxed font-semibold text-balance">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
};

export default ProfileScreen;
