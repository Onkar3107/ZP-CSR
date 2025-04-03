import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    governmentId: "",
    organizationType: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created");

    console.log("Final account data:", formData);
    navigate("/dashboard");
  }

  return (
    <div className="text-black">
      <form onSubmit={submitHandler}>
        <div className="flex gap-x-4 mt-5">
          <label className="w-full">
            <p className="text-gray-800 mb-1">
              First Name<sup className="text-red-500">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
              className="bg-gray-100 rounded-md text-gray-800 w-full p-3"
            />
          </label>
          <label className="w-full">
            <p className="text-gray-800 mb-1">
              Last Name<sup className="text-red-500">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
              className="bg-gray-100 rounded-md text-gray-800 w-full p-3"
            />
          </label>
        </div>

        <div className="flex gap-x-4 mt-5">
          <label className="w-full">
            <p className="text-gray-800 mb-1">
              Email Address<sup className="text-red-500">*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              onChange={changeHandler}
              placeholder="Enter Email Address"
              value={formData.email}
              className="bg-gray-100 rounded-md text-gray-800 w-full p-3"
            />
          </label>
          <label className="w-full">
            <p className="text-gray-800 mb-1">
              Government ID<sup className="text-red-500">*</sup>
            </p>
            <input
              required
              type="text"
              name="governmentId"
              onChange={changeHandler}
              placeholder="Enter Government ID"
              value={formData.governmentId}
              className="bg-gray-100 rounded-md text-gray-800 w-full p-3"
            />
          </label>
        </div>

        {/* Organization Type Dropdown */}
        <div className="mt-5">
          <label className="w-full">
            <p className="text-gray-800 mb-1">
              Select Organization Type<sup className="text-red-500">*</sup>
            </p>
            <select
              required
              name="organizationType"
              onChange={changeHandler}
              value={formData.organizationType}
              className="bg-gray-100 rounded-md text-gray-800 w-full p-3"
            >
              <option value="">Select an organization type</option>
              <option value="Government">Government</option>
              <option value="Private">Private</option>
              <option value="NGO">NGO</option>
              <option value="Educational Institute">
                Educational Institute
              </option>
              <option value="Startup">Startup</option>
              <option value="Other">Other</option>
            </select>
          </label>
        </div>

        <div className="flex gap-x-4 mt-5">
          <label className="w-full relative">
            <p className="text-gray-800 mb-1">
              Create Password<sup className="text-red-500">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
              className="bg-gray-100 rounded-md text-gray-800 w-full p-3"
            />
            <span
              className="absolute right-3 top-10 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#666" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#666" />
              )}
            </span>
          </label>
          <label className="w-full relative">
            <p className="text-gray-800 mb-1">
              Confirm Password<sup className="text-red-500">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              className="bg-gray-100 rounded-md text-gray-800 w-full p-3"
            />
            <span
              className="absolute right-3 top-10 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#666" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#666" />
              )}
            </span>
          </label>
        </div>

        <button className="w-full bg-yellow-500 text-gray-900 rounded-md font-medium px-4 py-3 mt-6">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
