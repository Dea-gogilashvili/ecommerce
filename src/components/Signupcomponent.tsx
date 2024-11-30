import React from 'react';

const Login = () => {
  return (

<div>


    
        <div className="flex flex-col space-y-2 justify-center  bg-gray-200 h-[160px] max-w-[1600px] m-auto">
          <div className="flex flex-col gap-3 ml-28 ">
            <h2 className="text-xl font-black">Sign up</h2>
    
            <div className="flex gap-4">
              
                <span> Ecommerce </span>
           
              <img src="/img/Cartarrow.svg"></img>
              <span className="font-bold">Sign up</span>
            </div>
          </div>
        </div>
     
  
    




    <div className="flex items-center justify-center min-h-screen border-none ">
      <div className="w-full max-w-md bg-white p-8 ">
       
        <button
          className="flex items-center justify-center w-full border  rounded py-2 mb-6 hover:bg-gray-50">
        <img src='img/google.svg'
          
            alt="Google Logo"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button>

       
        <div className="flex items-center justify-between my-4">
          <hr className="w-full border-gray-300" />
          <span className="mx-2 text-gray-500">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

       
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <span className='text-slate-400'>By creating this account you agree with our terms of service,privacy policy,</span>
          </div>

          
          <div className="mb-6 text-right">
            <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

        
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
          >
            Create account
          </button>
        </form>

        
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?
          <span>
            Sign up
          </span>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;