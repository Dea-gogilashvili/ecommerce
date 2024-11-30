const Resetpasswordcomponent = () => {
    return (
      <div className="w-[360px] h-[75px] mt-36 mb-80 flex flex-col  ml-[600px] ">
       
      
  
  
        <div className="mb-4 font-extrabold mt-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            New password
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div className="mb-4 font-extrabold mt-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            confirm password
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
             Reset password
            </button>
  
  
      </div>
    );
  };
  
  export default Resetpasswordcomponent;