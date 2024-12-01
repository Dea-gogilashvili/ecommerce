import { Link } from "react-router-dom";

const Profileadress = () => {
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

      <div className="flex items-center gap-10 ml-56 my-11">
        <ul className="space-y-8 flex flex-col gap-3">
          <li className="flex gap-3 text-slate-400 font-medium cursor-pointer">
            <img src="/img/Orders.svg" alt="Orders" />
            Orders
          </li>

          <Link to="/Wishlistprofilepage">
            <li className="flex gap-3 text-slate-400 font-medium cursor-pointer">
              <img src="/img/Wishlist.svg" alt="Wishlist" />
              Wishlist
            </li>
          </Link>

          <li className="flex gap-3 bg-slate-200 text-inherit font-medium rounded-lg w-[150px] h-[40px] items-center px-2 ">
            <img
              src="/img/Adress.svg"
              alt="Address"
              className="w-[22px] h-[22px]"
            />
            Address
          </li>
          <li className="flex gap-3 text-slate-400 font-medium cursor-pointer">
            <img src="/img/Password.svg" alt="Password" />
            Password
          </li>
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

        <div className=" flex items-center justify-center ">
          <div>
            <p className="text-[16px] text-[#0E1422] font-semibold">
              Shipping Address
            </p>

            <div>
              <label className="block mt-[50px]" htmlFor="address">
                Street address
              </label>
              <input
                className="border border-1 rounded-[6px] w-[534px] h-[45px] pl-2"
                type="text"
                placeholder="2436 Napales avenue"
              />
            </div>

            <div className="flex gap-[16px] mt-[15px]">
              <div className="h-[69px]">
                <label className="block">City</label>
                <input
                  className="border border-1 rounded-[6px] w-[259px] h-[45px] pl-2"
                  type="text"
                  placeholder="Panama city"
                />
              </div>
              <div className="h-[69px]">
                <label className="block">State</label>
                <input
                  className="border border-1 rounded-[6px] w-[259px] h-[45px] pl-2"
                  type="text"
                  placeholder="FL"
                />
              </div>
            </div>

            <div className="flex gap-[16px] mt-[15px]">
              <div className="h-[69px]">
                <label className="block">Zip Code</label>
                <input
                  className="border border-1 rounded-[6px] w-[259px] h-[45px] pl-2"
                  type="number"
                  placeholder="65297"
                />
              </div>
              <div className="h-[69px]">
                <label className="block">Country</label>
                <input
                  className="border border-1 rounded-[6px] w-[259px] h-[45px] pl-2"
                  type="text"
                  placeholder="United States"
                />
              </div>
            </div>

            <button className="px-4 py-2 bg-black text-white rounded-md mt-[40px]">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profileadress;
