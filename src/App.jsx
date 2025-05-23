import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingScreen from "./components/LandingScreen";
import LoginScreen from "./components/LoginScreen";
import SignupScreen from "./components/SignupScreen";
import ProfileScreen from "./components/ProfileScreen";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center p-4">
        {/* Mobile App Container */}
        <div
          className="w-full max-w-sm bg-[#F7F8F9] rounded-sm border-2 border-gray-300 overflow-hidden nunito"
          style={{ height: "640px" }}
        >
          <Routes>
            <Route path="/" element={<LandingScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
