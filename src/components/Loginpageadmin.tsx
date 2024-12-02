import { Link } from "react-router-dom";

const Loginpageadmin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-20">
      <div className="flex ">
        <img src="/img/Adminpagelogo.svg" alt="Admin Logo" />
        <span className="font-extrabold text-2xl">Admin</span>
      </div>

      <div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1  p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300 w-[300px]"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium  text-gray-700 "
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1  p-2 border border-gray-300 rounded focus:outline-none w-[300px] focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <button className="border-black bg-black text-white h-[44px] font-medium border-2 text-xs w-[300px] flex items-center justify-center rounded-md ">
          Login
        </button>
      </div>
    </div>
  );
};

export default Loginpageadmin;
