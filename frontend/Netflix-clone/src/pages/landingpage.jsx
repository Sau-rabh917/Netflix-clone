import netflix from "../assets/netflix.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Landingpage = () => {
  const [language, setLanguage] = useState("English");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [email, setEmail] = useState("");

  // FAQ Section State
  const [openFAQ, setOpenFAQ] = useState(null);
  const faqs = [
    {
      question: 'What is Netflix?',
      answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.'
    },
    {
      question: 'How much does Netflix cost?',
      answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.'
    },
    {
      question: 'Where can I watch?',
      answer: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device.'
    },
    {
      question: 'How do I cancel?',
      answer: 'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks.'
    },
    {
      question: 'What can I watch on Netflix?',
      answer: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more.'
    },
    {
      question: 'Is Netflix good for kids?',
      answer: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.'
    },
  ];

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
      <div className="w-full min-h-screen relative overflow-x-hidden">
        {/* Background Image */}
        <div className="w-full min-h-screen relative">
          <img
            className="w-full h-full min-h-screen object-cover"
            src={netflix}
            alt="netflix"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-70"></div>
          
        </div>
        
        {/* Navbar */}
        <nav className="absolute top-0 w-full h-16 sm:h-20 flex items-center justify-between px-3 sm:px-6 md:px-8 lg:px-12 z-30 text-white">
          {/* Netflix Logo */}
          <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-wider">
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent drop-shadow-lg">
              NETFLIX
            </span>
          </div>
          
          {/* Right Side Buttons */}
          <div className="flex items-center gap-2 xs:gap-3 sm:gap-4">
            {/* Language Dropdown */}
            <div className="relative">
              <button 
                onClick={toggleLanguage}
                className="bg-black bg-opacity-70 text-white px-2 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2 rounded border border-gray-600 hover:bg-opacity-90 transition-all duration-200 text-xs xs:text-sm sm:text-base flex items-center gap-1"
              >
                {language}
                <svg className="w-3 h-3 xs:w-4 xs:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full mt-1 bg-black bg-opacity-90 border border-gray-600 rounded-md shadow-lg z-40 min-w-[100px] xs:min-w-[120px]">
                  <button 
                    onClick={() => selectLanguage("English")}
                    className="block w-full text-left px-3 py-2 text-xs xs:text-sm hover:bg-gray-800 transition-colors"
                  >
                    English
                  </button>
                  <button 
                    onClick={() => selectLanguage("हिंदी")}
                    className="block w-full text-left px-3 py-2 text-xs xs:text-sm hover:bg-gray-800 transition-colors"
                  >
                    हिंदी
                  </button>
                  <button 
                    onClick={() => selectLanguage("Español")}
                    className="block w-full text-left px-3 py-2 text-xs xs:text-sm hover:bg-gray-800 transition-colors"
                  >
                    Español
                  </button>
                </div>
              )}
            </div>
            
            {/* Sign Up Button */}
            <Link to="/signin">
              <button className="bg-red-600 px-3 py-1 xs:px-4 xs:py-1.5 sm:px-5 sm:py-2 rounded font-semibold hover:bg-red-700 transition-all duration-200 text-xs xs:text-sm sm:text-base">
                Sign Up
              </button>
            </Link>
          </div>
        </nav>
        
        {/* Content Section */}
        <div className="absolute inset-0 flex items-center justify-center z-20 py-8 xs:py-12 sm:py-0">
          <div className="text-center text-white px-2 xs:px-4 sm:px-6 md:px-8 max-w-full sm:max-w-4xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 xs:mb-4 sm:mb-6 md:mb-8 leading-tight">
              Unlimited movies, TV shows, and more
            </h1>
            
            {/* Sub Heading */}
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3 xs:mb-4 sm:mb-6 md:mb-8">
              Watch anywhere. Cancel anytime.
            </h3>
            
            {/* Description */}
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl mb-4 xs:mb-6 sm:mb-8 md:mb-10 max-w-full sm:max-w-2xl mx-auto leading-relaxed">
              Ready to watch? Enter your email to create or restart your membership.
            </p>
            
            {/* Email Input and Button */}
            <div className="flex flex-col sm:flex-row gap-2 xs:gap-3 sm:gap-4 justify-center items-center max-w-full sm:max-w-lg mx-auto w-full">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-80 px-3 xs:px-4 py-2 xs:py-3 sm:py-4 rounded bg-black bg-opacity-70 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors text-xs xs:text-sm sm:text-base"
              />
              <button
                onClick={handleGetStarted}
                className="w-full sm:w-auto bg-red-600 px-4 xs:px-6 py-2 xs:py-3 sm:py-4 rounded font-semibold hover:bg-red-700 transition-all duration-200 text-xs xs:text-sm sm:text-base whitespace-nowrap"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Now Section */}
      <div className="w-full bg-black bg-opacity-90 py-8 px-2 xs:px-4 sm:px-8 md:px-16 relative overflow-x-hidden">
        <h2 className="text-white text-xl xs:text-2xl sm:text-3xl font-bold mb-6">Trending Now</h2>
        <div className="relative">
          {/* Cards Container */}
          <div
            id="trending-scroll"
            className="flex gap-4 overflow-x-auto custom-scrollbar-hide scroll-smooth transition-all duration-300"
            style={{ scrollBehavior: 'smooth' }}
          >
            {[...Array(10)].map((_, idx) => (
              <div
                key={idx}
                className="relative min-w-[180px] sm:min-w-[220px] h-40 sm:h-56 bg-gray-800 rounded-lg flex items-center justify-center shadow-lg"
              >
                {/* Big Number */}
                <span className="absolute left-2 top-2 text-5xl sm:text-6xl md:text-7xl font-extrabold text-black  text-opacity-30 select-none pointer-events-none z-10">
                  {idx + 1}
                </span>
                {/* Card Content Placeholder */}
                <div className="z-20 flex flex-col items-center justify-center w-full h-full">
                  <span className="text-white text-lg sm:text-xl font-semibold">Movie {idx + 1}</span>
                  <span className="text-gray-400 text-xs sm:text-sm mt-2">Trending</span>
                </div>
              </div>
            ))}
          </div>
          {/* Right Arrow Button */}
          <button
            onClick={() => {
              const el = document.getElementById('trending-scroll');
              if (el) el.scrollBy({ left: 250, behavior: 'smooth' });
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-70 hover:bg-opacity-90 text-white rounded-full p-2 shadow-lg z-30"
            style={{ transform: 'translateY(-50%)' }}
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* More Reasons to Join Section */}
      <div className="w-full bg-black bg-opacity-95 py-10 px-2 xs:px-4 sm:px-8 md:px-16">
        <h2 className="text-white text-xl xs:text-2xl sm:text-3xl font-bold mb-8">More Reasons to Join</h2>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 items-stretch max-w-6xl">
          {/* Reason 1 */}
          <div className="flex-1 bg-gradient-to-br from-red-700 via-black to-gray-900 rounded-lg p-8 sm:p-10 flex flex-col items-start shadow-lg border-2 border-red-600 min-w-[320px] max-w-2xl h-48 sm:h-56 justify-center">
            <span className="text-4xl sm:text-5xl mb-4">🎬</span>
            <h3 className="text-white text-xl sm:text-2xl font-bold mb-3 text-left">Exclusive Content</h3>
            <p className="text-gray-300 text-base sm:text-lg text-left">Enjoy movies and shows you can't find anywhere else, only on Netflix.</p>
          </div>
          {/* Reason 2 */}
          <div className="flex-1 bg-gradient-to-br from-purple-700 via-black to-gray-900 rounded-lg p-8 sm:p-10 flex flex-col items-start shadow-lg border-2 border-red-600 min-w-[320px] max-w-2xl h-48 sm:h-56 justify-center">
            <span className="text-4xl sm:text-5xl mb-4">📱</span>
            <h3 className="text-white text-xl sm:text-2xl font-bold mb-3 text-left">Watch Anywhere</h3>
            <p className="text-gray-300 text-base sm:text-lg text-left">Stream on your phone, tablet, laptop, and TV without paying more.</p>
          </div>
          {/* Reason 3 */}
          <div className="flex-1 bg-gradient-to-br from-blue-700 via-black to-gray-900 rounded-lg p-8 sm:p-10 flex flex-col items-start shadow-lg border-2 border-red-600 min-w-[320px] max-w-2xl h-48 sm:h-56 justify-center">
            <span className="text-4xl sm:text-5xl mb-4">👨‍👩‍👧‍👦</span>
            <h3 className="text-white text-xl sm:text-2xl font-bold mb-3 text-left">For Everyone</h3>
            <p className="text-gray-300 text-base sm:text-lg text-left">Profiles for kids and adults, so everyone in the family can enjoy safely.</p>
          </div>
          {/* Reason 4 */}
          <div className="flex-1 bg-gradient-to-br from-yellow-600 via-red-500 to-gray-900 rounded-lg p-8 sm:p-10 flex flex-col items-start shadow-lg border-2 border-red-600 min-w-[320px] max-w-2xl h-48 sm:h-56 justify-center">
            <span className="text-4xl sm:text-5xl mb-4">💡</span>
            <h3 className="text-white text-xl sm:text-2xl font-bold mb-3 text-left">Cancel Anytime</h3>
            <p className="text-gray-300 text-base sm:text-lg text-left">No commitments, no cancellation fees. Join and leave as you wish.</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full bg-black bg-opacity-95 py-12 px-2 xs:px-4 sm:px-8 md:px-16 flex flex-col items-center">
        <h2 className="text-white text-2xl sm:text-3xl font-bold mb-8 ">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-4 w-3/4 max-w-3xl mx-auto items-start">
          {faqs.map((faq, idx) => (
            <div key={idx} className="w-full flex flex-col ">
              <div
                className="w-full h-20 bg-gray-800 rounded-md flex items-center justify-between px-6 cursor-pointer border border-gray-500 text-white text-base sm:text-lg font-semibold transition-colors duration-200 hover:bg-gray-800 text-left"
                onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
              >
                <span>{faq.question}</span>
                <span className="text-2xl font-bold select-none">
                  {openFAQ === idx ? '-' : '+'}
                </span>
              </div>
              {/* Dropdown answer */}
              {openFAQ === idx && (
                <div className="w-full bg-gray-800 bg-opacity-90 text-white text-sm sm:text-base rounded-b-md px-6 py-4 border-t border-gray-700 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Email Input and Get Started in FAQ Section */}
        <div className="w-full flex flex-col items-center mt-10">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-2xl">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full max-w-2xl px-8 py-6 rounded bg-black bg-opacity-80 border-2 border-gray-400 text-white placeholder-gray-300 focus:outline-none focus:border-red-500 transition-colors text-xl sm:text-2xl font-semibold"
            />
            <button
              onClick={handleGetStarted}
              className="sm:w-auto w-full bg-red-600 px-8 py-6 rounded font-bold hover:bg-red-700 transition-all duration-200 text-xl sm:text-2xl whitespace-nowrap"
              style={{ minWidth: 'fit-content' }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-black bg-opacity-95 border-t border-gray-800 mt-16 py-10 px-2 xs:px-4 sm:px-8 md:px-16">
        <div className="max-w-6xl mx-auto text-gray-400 text-sm">
          <div className="mb-8">
            <span className="block mb-2">Questions? Call <a href="tel:000-800-040-1843" className="underline hover:text-white">000-800-040-1843</a></span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
            <a href="#" className="hover:underline hover:text-white">FAQ</a>
            <a href="#" className="hover:underline hover:text-white">Help Center</a>
            <a href="#" className="hover:underline hover:text-white">Account</a>
            <a href="#" className="hover:underline hover:text-white">Media Center</a>
            <a href="#" className="hover:underline hover:text-white">Investor Relations</a>
            <a href="#" className="hover:underline hover:text-white">Jobs</a>
            <a href="#" className="hover:underline hover:text-white">Ways to Watch</a>
            <a href="#" className="hover:underline hover:text-white">Terms of Use</a>
            <a href="#" className="hover:underline hover:text-white">Privacy</a>
            <a href="#" className="hover:underline hover:text-white">Cookie Preferences</a>
            <a href="#" className="hover:underline hover:text-white">Corporate Information</a>
            <a href="#" className="hover:underline hover:text-white">Contact Us</a>
          </div>
          <div className="mb-4">
            <button className="bg-black bg-opacity-70 text-gray-300 px-3 py-1 rounded border border-gray-600 text-xs hover:bg-opacity-90">English</button>
          </div>
          <div className="text-xs text-gray-500">Netflix India Clone &copy; {new Date().getFullYear()}</div>
        </div>
      </footer>
    </>
  );
};

export default Landingpage;
