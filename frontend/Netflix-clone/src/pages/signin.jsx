import netflix from "../assets/netflix.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation and API call here
    alert("Signed in! (Demo)");
  };

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center">
      {/* Background Image */}
      <img
        src={netflix}
        alt="netflix background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
      {/* Signin Form */}
      <div className="relative z-20 w-full max-w-md bg-zinc-900 bg-opacity-90 rounded-lg shadow-lg p-8 mx-2">
        <div className="text-3xl font-black text-red-600 text-center mb-6 font-serif tracking-wider">
          NETFLIX
        </div>
        <h2 className="text-white text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded bg-zinc-800 text-white border border-gray-700 focus:outline-none focus:border-red-500"
          />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded bg-zinc-800 text-white border border-gray-700 focus:outline-none focus:border-red-500"
          />
          <label className="flex items-center text-gray-400 text-sm">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword((v) => !v)}
              className="mr-2"
            />
            Show Password
          </label>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded transition-colors"
          >
            Sign In
          </button>
        </form>
        <div className="text-gray-400 text-sm mt-6 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-red-500 hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
