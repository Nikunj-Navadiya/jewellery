import React, { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [mode, setMode] = useState("login"); // 'login' | 'signup' | 'forgot' | 'reset'
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [otpData, setOtpData] = useState({
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [emailForReset, setEmailForReset] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const navigate = useNavigate();

  // 🔹 Validate password strength
  const validatePassword = (pass) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    setIsPasswordValid(passwordRegex.test(pass));
  };

  // 🔹 Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password" && mode === "signup") {
      validatePassword(value);
    }
  };

  // 🔹 Handle OTP form changes
  const handleOtpChange = (e) => {
    const { name, value } = e.target;
    setOtpData({ ...otpData, [name]: value });

    if (name === "newPassword") {
      validatePassword(value);
    }
  };

  // 🔹 Clear all input fields
  const clearAllFields = () => {
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    setOtpData({ otp: "", newPassword: "", confirmPassword: "" });
    setEmailForReset("");
    setIsPasswordValid(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let res;

      if (mode === "signup") {
        if (!isPasswordValid) {
          alert(
            "Password must be at least 8 characters, include uppercase, lowercase, number, and special character."
          );
          setLoading(false);
          return;
        }

        if (formData.password !== formData.confirmPassword) {
          alert("Passwords do not match!");
          setLoading(false);
          return;
        }

        res = await axios.post(`${API_URL}/api/auth/signup`, formData);
      } else if (mode === "login") {
        res = await axios.post(`${API_URL}/api/auth/login`, {
          email: formData.email,
          password: formData.password,
        });
      } else if (mode === "forgot") {
        res = await axios.post(`${API_URL}/api/auth/send-otp`, {
          email: formData.email,
        });
        alert(res.data.message);
        setEmailForReset(formData.email);
        setMode("reset");
        return;
      } else if (mode === "reset") {
        if (!isPasswordValid) {
          alert(
            "Password must be at least 8 characters, include uppercase, lowercase, number, and special character."
          );
          setLoading(false);
          return;
        }

        if (otpData.newPassword !== otpData.confirmPassword) {
          alert("Passwords do not match!");
          setLoading(false);
          return;
        }

        res = await axios.post(`${API_URL}/api/auth/reset-password`, {
          email: emailForReset,
          otp: otpData.otp,
          newPassword: otpData.newPassword,
        });

        alert(res.data.message);
        clearAllFields();
        setMode("login");
        return;
      }

      // 🔹 Handle Success (Login / Signup)
      alert(res.data.message || "Success!");

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        clearAllFields();
        navigate("/");
        setTimeout(() => {
          window.location.reload();
        });
      }
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-yellow-50 p-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8 transition-all duration-300">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          {mode === "login"
            ? "Welcome Back 👋"
            : mode === "signup"
              ? "Create Account ✨"
              : mode === "forgot"
                ? "Reset Password 🔑"
                : "Verify OTP 🔐"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name (Signup only) */}
          {mode === "signup" && (
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-500 outline-none"
                required
              />
            </div>
          )}

          {/* Email */}
          {(mode === "login" || mode === "signup" || mode === "forgot") && (
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-500 outline-none"
                required
              />
            </div>
          )}

          {/* Password (Login / Signup) */}
          {(mode === "login" || mode === "signup") && (
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10 focus:ring-2 focus:ring-yellow-500 outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-yellow-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* 🔹 Password validation message for signup */}
              {mode === "signup" && !isPasswordValid && formData.password && (
                <p className="text-red-500 text-sm text-left w-full mt-1">
                  Password must be at least 8 characters, include uppercase,
                  lowercase, number, and special character.
                </p>
              )}
            </div>
          )}


          {mode === "signup" && (
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10 focus:ring-2 focus:ring-yellow-500 outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-yellow-600"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {formData.confirmPassword &&
                formData.password !== formData.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    Passwords do not match
                  </p>
                )}
            </div>
          )}


          {/* Reset Password Section */}
          {mode === "reset" && (
            <>
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">
                  Enter OTP
                </label>
                <input
                  type="text"
                  name="otp"
                  value={otpData.otp}
                  onChange={handleOtpChange}
                  placeholder="Enter OTP from your email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    name="newPassword"
                    value={otpData.newPassword}
                    onChange={handleOtpChange}
                    placeholder="Enter new password"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10 focus:ring-2 focus:ring-yellow-500 outline-none"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-yellow-600"
                  >
                    {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                {/* 🔹 Password validation message for reset password */}
                {mode === "reset" && !isPasswordValid && otpData.newPassword && (
                  <p className="text-red-500 text-sm text-left w-full mt-1">
                    Password must be at least 8 characters, include uppercase,
                    lowercase, number, and special character.
                  </p>
                )}
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={otpData.confirmPassword}
                    onChange={handleOtpChange}
                    placeholder="Confirm new password"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10 focus:ring-2 focus:ring-yellow-500 outline-none"
                    required
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-yellow-600"
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full text-lg bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg transition-all disabled:opacity-70"
          >
            {loading
              ? "Please wait..."
              : mode === "login"
                ? "Login"
                : mode === "signup"
                  ? "Sign Up"
                  : mode === "forgot"
                    ? "Send OTP"
                    : "Submit"}
          </button>
        </form>

        {/* Forgot Password */}
        {mode === "login" && (
          <p className="text-right mt-3">
            <button
              onClick={() => setMode("forgot")}
              className="text-md text-yellow-600 hover:underline"
            >
              Forgot Password?
            </button>
          </p>
        )}

        {/* Footer Links */}
        <p className="text-center text-gray-600 mt-6 text-md">
          {mode === "login" ? (
            <>
              Don’t have an account?{" "}
              <button
                onClick={() => setMode("signup")}
                className="text-yellow-600 font-medium hover:underline"
              >
                Sign up
              </button>
            </>
          ) : mode === "signup" ? (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setMode("login")}
                className="text-yellow-600 font-medium hover:underline"
              >
                Login
              </button>
            </>
          ) : (
            (mode === "forgot" || mode === "reset") && (
              <>
                Remember your password?{" "}
                <button
                  onClick={() => setMode("login")}
                  className="text-yellow-600 font-medium hover:underline"
                >
                  Back to Login
                </button>
              </>
            )
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
