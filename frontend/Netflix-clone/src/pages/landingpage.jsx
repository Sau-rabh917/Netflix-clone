import netflix from "../assets/netflix.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Landingpage = () => {
  const [language, setLanguage] = useState("English");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [email, setEmail] = useState("");

  const toggleLanguage = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
  };

  const handleGetStarted = () => {
    if (email) {
      console.log("Email submitted:", email);
      // Handle email submission
    }
  };

  return (
    <>
      {/* Main Container */}
      <div className="w-full min-h-screen relative">
        {/* Background Image */}
        <div className="w-full h-screen relative">
          <img
            className="w-full h-full object-cover"
            src={netflix}
            alt="netflix"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-70"></div>
          
        </div>
        
        {/* Navbar */}
        <nav className="absolute top-0 w-full h-16 sm:h-20 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 z-30 text-white">
          {/* Netflix Logo */}
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-wider">
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent drop-shadow-lg">
              NETFLIX
            </span>
          </div>
          
          {/* Right Side Buttons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Language Dropdown */}
            <div className="relative">
              <button 
                onClick={toggleLanguage}
                className="bg-black bg-opacity-70 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded border border-gray-600 hover:bg-opacity-90 transition-all duration-200 text-sm sm:text-base flex items-center gap-1"
              >
                {language}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full mt-1 bg-black bg-opacity-90 border border-gray-600 rounded-md shadow-lg z-40 min-w-[120px]">
                  <button 
                    onClick={() => selectLanguage("English")}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-800 transition-colors"
                  >
                    English
                  </button>
                  <button 
                    onClick={() => selectLanguage("हिंदी")}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-800 transition-colors"
                  >
                    हिंदी
                  </button>
                  <button 
                    onClick={() => selectLanguage("Español")}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-800 transition-colors"
                  >
                    Español
                  </button>
                </div>
              )}
            </div>
            
            {/* Sign Up Button */}
            <Link to="/signin">
              <button className="bg-red-600 px-4 py-1.5 sm:px-5 sm:py-2 rounded font-semibold hover:bg-red-700 transition-all duration-200 text-sm sm:text-base">
                Sign Up
              </button>
            </Link>
          </div>
        </nav>
        
        {/* Content Section */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
              Unlimited movies, TV shows, and more
            </h1>
            
            {/* Sub Heading */}
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 md:mb-8">
              Watch anywhere. Cancel anytime.
            </h3>
            
            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
              Ready to watch? Enter your email to create or restart your membership.
            </p>
            
            {/* Email Input and Button */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-80 px-4 py-3 sm:py-4 rounded bg-black bg-opacity-70 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors text-sm sm:text-base"
              />
              <button
                onClick={handleGetStarted}
                className="w-full sm:w-auto bg-red-600 px-6 py-3 sm:py-4 rounded font-semibold hover:bg-red-700 transition-all duration-200 text-sm sm:text-base whitespace-nowrap"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
