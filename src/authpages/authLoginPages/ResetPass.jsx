<<<<<<< HEAD
import React,{useState} from 'react'
import  EyeIcon from '../../assets/loginPageImages/eye-open.png'
import  EyeOffIcon from '../../assets/loginPageImages/eye.png'
import resetPass from '../../assets/loginPageImages/resetPass.png'

const ResetPass = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex w-[100%] flex-col-reverse items-center justify-center md:flex-row md:flex lg:h-screen md:h-screen h-full">
      <div className="lg:min-w-100 bg-white rounded-lg min-w- shadow-lg border border-[#878787] border-zinc-400 m-4 p-1">
        <div className="p-6 space-y-4 sm:p-8">
          <p className="py-2 text-xl text-[#282828]">Welcome back !</p>
          <h1 className="text-xl mb-1 font-semibold md:text-2xl">Reset Password</h1>
          <p className="text-sm text-[#282828]">
            Set a new password to your account
          </p>
          <form className="flex justify-center flex-col" action="#">
            <div className="mb-[8%]">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                New Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className="border border-gray-300 rounded-lg w-full p-2.5 pr-10 focus:ring-blue-500 focus:border-blue-500"
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
            <div className="mb-1">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className="border border-gray-300 rounded-lg w-full p-2.5 pr-10 focus:ring-blue-500 focus:border-blue-500"
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
            <div className="flex items-center justify-end mb-1.5 lg:mb-5 md:mb-2.5">
                <p className="text-sm font-light text-gray-500 text-gray-400 flex justify-center">
                  Go Back to<a href="#" className="pl-1 text-[#101450] font-medium hover:underline">Login</a>
                </p>
            </div>
            <button
              type="submit"
              className="my-4 lg:mb-6 md:mb-3 mb-2 w-full text-white bg-[#101450] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-primary-600  hover:bg-primary-700  focus:ring-primary-800"
            >
              Login
            </button>
            <div>
              <p className="text-sm font-light text-gray-500 text-gray-400 flex justify-center">
                Don’t have an Account ?{" "}
                <a
                  href="#"
                  className="font-medium hover:underline text-[#101450] "
                >
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="m-4">
        <img src={resetPass} alt="" className='size-70' />
      </div>
    </div>
  );
}

=======
import React,{useState} from 'react'
import  EyeIcon from '../../assets/loginPageImages/eye-open.png'
import  EyeOffIcon from '../../assets/loginPageImages/eye.png'
import resetPass from '../../assets/loginPageImages/resetPass.png'

const ResetPass = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex w-[100%] flex-col-reverse items-center justify-center md:flex-row md:flex lg:h-screen md:h-screen h-full">
      <div className="lg:min-w-100 bg-white rounded-lg min-w- shadow-lg border border-[#878787] border-zinc-400 m-4 p-1">
        <div className="p-6 space-y-4 sm:p-8">
          <p className="py-2 text-xl text-[#282828]">Welcome back !</p>
          <h1 className="text-xl mb-1 font-semibold md:text-2xl">Reset Password</h1>
          <p className="text-sm text-[#282828]">
            Set a new password to your account
          </p>
          <form className="flex justify-center flex-col" action="#">
            <div className="mb-[8%]">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                New Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className="border border-gray-300 rounded-lg w-full p-2.5 pr-10 focus:ring-blue-500 focus:border-blue-500"
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
            <div className="mb-1">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className="border border-gray-300 rounded-lg w-full p-2.5 pr-10 focus:ring-blue-500 focus:border-blue-500"
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
            <div className="flex items-center justify-end mb-1.5 lg:mb-5 md:mb-2.5">
                <p className="text-sm font-light text-gray-500 text-gray-400 flex justify-center">
                  Go Back to<a href="#" className="pl-1 text-[#101450] font-medium hover:underline">Login</a>
                </p>
            </div>
            <button
              type="submit"
              className="my-4 lg:mb-6 md:mb-3 mb-2 w-full text-white bg-[#101450] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-primary-600  hover:bg-primary-700  focus:ring-primary-800"
            >
              Login
            </button>
            <div>
              <p className="text-sm font-light text-gray-500 text-gray-400 flex justify-center">
                Don’t have an Account ?{" "}
                <a
                  href="#"
                  className="font-medium hover:underline text-[#101450] "
                >
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="m-4">
        <img src={resetPass} alt="" className='size-70' />
      </div>
    </div>
  );
}

>>>>>>> 77f0b7975a4ef4138d90afd297611dd1f7e1725e
export default ResetPass