import { Link } from "react-router-dom";

const Passwordprofilepage = () => {
  return (
    <div className=" max-w-[1600px]">
      <div className="flex flex-col space-y-2 justify-center  bg-gray-200 h-[160px] max-w-[1600px] m-auto">
        <div className="flex flex-col gap-3 ml-28 ">
          <h2 className="text-xl font-black">My account</h2>

          <div className="flex gap-4">
            <span> Ecommerce </span>

            <img src="/img/Cartarrow.svg"></img>
            <span className="font-bold">My account</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-20 ml-56 my-11">
        <ul className="space-y-8 flex flex-col gap-3">
          <li className="flex gap-3 text-slate-400 font-medium cursor-pointer">
            <img src="/img/Orders.svg" alt="Orders" />
            Orders
          </li>
          <li className="flex gap-3 text-slate-400 font-medium cursor-pointer ">
            <img src="/img/Wishlist.svg" alt="Wishlist" />
            Wishlist
          </li>

          <Link to="/profilepagesadress">
            <li className="flex gap-3 text-slate-400 font-medium">
              <img
                src="/img/Adress.svg"
                alt="Address"
                className="w-[22px] h-[22px]"
              />
              Address
            </li>
          </Link>

          <Link to="/profilepagepassword">
          <li className="flex gap-3 bg-slate-200 text-inherit font-medium rounded-lg w-[150px] h-[40px] items-center px-2">
            <img src="/img/Password.svg" alt="Password" />
            Password
          </li>
          </Link>

          <li className="flex gap-3 text-slate-400 font-medium cursor-pointer">
            <img src="/img/AccountDetail.svg" alt="Account Detail" />
            Account detail
          </li>
          <li className="flex gap-3 text-slate-400 font-medium cursor-pointer">
            <img src="/img/Logout.svg" alt="Logout" />
            Logout
          </li>
        </ul>

        <hr className="bg-slate-200  w-[0.5px] h-[504px]"></hr>

        <div className="flex flex-col items-center justify-center gap-8 py-8">
          <h5 className="font-semibold text-xl mb-9 mr-20">Change password</h5>

          

          <div className="mb-4 w-[80%] max-w-[500px]">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              New password
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-[300px] p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="mb-4 w-[80%] max-w-[500px]">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-[300px] p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <button className="bg-black text-white w-44 h-11 rounded-md mr-16">
           Change password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Passwordprofilepage;