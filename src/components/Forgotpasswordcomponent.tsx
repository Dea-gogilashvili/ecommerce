const Forgotpasswordcomponent = () => {
  return (

<div> 

    <div className="flex flex-col space-y-2 justify-center  bg-gray-200 h-[160px] max-w-[1600px] m-auto">
        <div className="flex flex-col gap-3 ml-28 ">
          <h2 className="text-xl font-black">Forgot password</h2>
  
          <div className="flex gap-4">
            
              <span> Ecommerce </span>
         
            <img src="/img/Cartarrow.svg"></img>
            <span className="font-bold">Forgot password</span>
          </div>
        </div>
      </div>
    <div className="w-[360px] h-[75px] mt-36 mb-80 flex flex-col  ml-[600px] ">
     
     <div className="">
         <span>Please enter the email address associated with your account. We'll promptly send you a link to reset your password.</span>
     </div>



      <div className="mb-4 font-extrabold mt-6">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          required
        />
      </div>

      <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
          >
            Send reset link
          </button>


    </div>
    </div>
  );
};

export default Forgotpasswordcomponent;
