import { useState } from "react";
import { LockClosedIcon, UserPlusIcon } from "@heroicons/react/24/solid";

export default function AuthCard() {
  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "login") {
      console.log("Login Data:", { email: formData.email, password: formData.password });
      // TODO: call login API
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log("Signup Data:", formData);
      // TODO: call signup API
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-12">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        {/* Tabs */}
        <div className="flex justify-center space-x-6 border-b pb-4">
          <button
            onClick={() => setMode("login")}
            className={`flex items-center space-x-2 text-sm font-medium cursor-pointer ${mode === "login" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500"
              }`}
          >
            <LockClosedIcon className="h-5 w-5" />
            <span>Login</span>
          </button>
          <button
            onClick={() => setMode("signup")}
            className={`flex items-center space-x-2 text-sm font-medium cursor-pointer ${mode === "signup" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500"
              }`}
          >
            <UserPlusIcon className="h-5 w-5" />
            <span>Register</span>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          {mode === "signup" && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 h-12 px-3 shadow-sm 
              focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none sm:text-sm"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 h-12 px-3 shadow-sm 
              focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 h-12 px-3 shadow-sm 
              focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none sm:text-sm"
            />
          </div>

          {mode === "signup" && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 h-12 px-3 shadow-sm 
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none sm:text-sm"
              />
            </div>
          )}

          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
          >
            {mode === "login" ? "Login" : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
