<<<<<<< HEAD
import React, { useState } from "react";
import axios from "axios";
import EyeIcon from '../../assets/loginPageImages/eye-open.png';
import EyeOffIcon from '../../assets/loginPageImages/eye.png';
import panaLogo from "../../assets/signUpPageImages/pana.png";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    console.log(formData.username)

    
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccessMessage("");

        axios.post(
            "https://newsportalbackend-crdw.onrender.com/api/users/signup",
            formData
        )
        .then((response) => {
          
            setSuccessMessage(response.data.message);
            setFormData({
                username: "",
                email: "",
                phone: "",
                password: "",
                confirmPassword: ""
            });
        })
        .catch((err) => {
            setError(err.response?.data?.message || "Something went wrong!");
        })
        .finally(() => {
            setLoading(false);
        });
    };

    return (
        <div className="flex w-full flex-col-reverse items-center justify-center md:flex-row h-full">
            <div className="lg:min-w-100 bg-white rounded-lg shadow-lg border border-gray-400 m-4 p-1">
                <div className="p-6 space-y-4 sm:p-8">
                    <p className="py-2 text-xl text-gray-800">Welcome</p>
                    <h1 className="text-xl mb-1 font-semibold md:text-2xl">Sign up</h1>
                    <p className="text-sm text-gray-800">Join us today! Get the latest news at your fingertips.</p>
                    
                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
                    
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg w-full p-2.5"
                                placeholder="Enter your username"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg w-full p-2.5"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg w-full p-2.5"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg w-full p-2.5 pr-10"
                                    placeholder="Enter your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                                >
                                    {showPassword ? <img src={EyeOffIcon} className="w-6" /> : <img src={EyeIcon} className="w-6" />}
                                </button>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Confirm Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg w-full p-2.5 pr-10"
                                    placeholder="Confirm your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                                >
                                    {showPassword ? <img src={EyeOffIcon} className="w-6" /> : <img src={EyeIcon} className="w-6" />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="my-4 w-full text-white bg-[#101450] font-medium rounded-lg text-sm px-5 py-2.5"
                            disabled={loading}
                        >
                            {loading ? "Signing up..." : "Sign Up"}
                        </button>

                        <p className="text-sm font-light text-black flex justify-center border">
                            Already have an account? <a href="#" className="font-medium hover:underline text-[#101450]"> Login</a>
                        </p>
                    </form>
                </div>
            </div>
            <div className="m-4">
                <img src={panaLogo} alt="" className="size-70" />
            </div>
        </div>
    );
};

export default Signup;
=======
import React, { useState } from "react";
import axios from "axios";
import EyeIcon from '../../assets/loginPageImages/eye-open.png';
import EyeOffIcon from '../../assets/loginPageImages/eye.png';
import panaLogo from "../../assets/SignuppageImages/pana.png";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccessMessage("");

        axios.post(
            "https://newsportalbackend-crdw.onrender.com/api/users/signup",
            formData
        )
        .then((response) => {
            setSuccessMessage(response.data.message);
            setFormData({
                username: "",
                email: "",
                phone: "",
                password: "",
                confirmPassword: ""
            });
        })
        .catch((err) => {
            setError(err.response?.data?.message || "Something went wrong!");
        })
        .finally(() => {
            setLoading(false);
        });
    };

    return (
        <div className="flex w-full flex-col-reverse items-center justify-center md:flex-row h-full">
            <div className="lg:min-w-100 bg-white rounded-lg shadow-lg border border-gray-400 m-4 p-1">
                <div className="p-6 space-y-4 sm:p-8">
                    <p className="py-2 text-xl text-gray-800">Welcome</p>
                    <h1 className="text-xl mb-1 font-semibold md:text-2xl">Sign up</h1>
                    <p className="text-sm text-gray-800">Join us today! Get the latest news at your fingertips.</p>
                    
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
                    
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg w-full p-2.5"
                                placeholder="Enter your username"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg w-full p-2.5"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg w-full p-2.5"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg w-full p-2.5 pr-10"
                                    placeholder="Enter your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                                >
                                    {showPassword ? (
                                        <img src={EyeOffIcon} className="w-6" />
                                    ) : (
                                        <img src={EyeIcon} className="w-6" />
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Confirm Password</label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg w-full p-2.5 pr-10"
                                    placeholder="Confirm your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                                >
                                    {showConfirmPassword ? (
                                        <img src={EyeOffIcon} className="w-6" />
                                    ) : (
                                        <img src={EyeIcon} className="w-6" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="my-4 w-full text-white bg-[#101450] font-medium rounded-lg text-sm px-5 py-2.5"
                            disabled={loading}
                        >
                            {loading ? "Signing up..." : "Sign Up"}
                        </button>

                        <p className="text-sm font-light text-black flex justify-center border">
                            Already have an account? <a href="#" className="font-medium hover:underline text-[#101450]"> Login</a>
                        </p>
                    </form>
                </div>
            </div>
            <div className="m-4">
                <img src={panaLogo} alt="" className="size-70" />
            </div>
        </div>
    );
};

export default Signup;
>>>>>>> 77f0b7975a4ef4138d90afd297611dd1f7e1725e
