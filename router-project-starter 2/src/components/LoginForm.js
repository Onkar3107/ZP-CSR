import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const LoginForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "", password: ""
    });

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData(prevData => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));
    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        console.log("Printing the formData ");
        console.log(formData);
        navigate("/dashboard");
    }

    return (
        <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
            <label className='w-full'>
                <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>
                    Email Address<sup className='text-red-500'>*</sup>
                </p>
                <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder="Enter email address"
                    name="email"
                    className='bg-gray-100 rounded-md text-black w-full p-3'
                />
            </label>

            <label className='w-full relative'>
                <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>
                    Password<sup className='text-red-500'>*</sup>
                </p>
                <input
                    required
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder="Enter Password"
                    name="password"
                    className='bg-gray-100 rounded-md text-black w-full p-3'
                />

                <span
                    className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={() => setShowPassword(prev => !prev)}>
                    {showPassword ? (
                        <AiOutlineEyeInvisible fontSize={24} fill='#000' />
                    ) : (
                        <AiOutlineEye fontSize={24} fill='#000' />
                    )}
                </span>

                <Link to="#">
                    <p className='text-xs mt-1 text-blue-600 max-w-max ml-auto'>
                        Forgot Password
                    </p>
                </Link>
            </label>

            <button className='bg-yellow-500 rounded-md font-medium text-black px-3 py-2 mt-6'>
                Sign In
            </button>
        </form>
    );
};

export default LoginForm;