import { Link } from "react-router-dom";

const Ordersprofilepage = () => {
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

        
          <li className="flex gap-3 bg-slate-200 text-inherit font-medium rounded-lg w-[150px] h-[40px] items-center px-2 ">
            <img src="/img/Orders.svg" alt="Orders" />
            Orders
          </li>
          


          <Link to="/profilepageorders">
          <li className="flex gap-3 text-slate-400 font-medium cursor-pointer">
            <img src="/img/Wishlist.svg" alt="Wishlist" />
            Wishlist
          </li>
          </Link>

         

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
            <h5 className="font-semibold max-w-[1600px]  ">Orders</h5>

            <div className="space-y-9 mb-28 mt-20">
              <div className="flex gap-8 ">
                <img
                  className="h-[80px] w-[80px]"
                  src="/img/FirstShirt.svg"
                ></img>
                <div className="mt-3">
                  <span className="font-bold text-sm">
                    Raw black t-shirt lineup
                  </span>
                  <div className="flex items-center gap-2 mt-[6px]">
                    <div className="flex flex-col gap-2">
                      <span className="font-medium text-gray-500 text-xs">
                        Added on jul 27/2023
                      </span>
                      <span className="font-medium text-xs">$70.00</span>
                    </div>
                    <div className="flex items-center gap-5 ml-32">
                      <span className="font-semibold underline decoration-green-500 underline-offset-[5px]" > Completed </span>
                      <button className="border-black border-2 text-xs w-24 flex items-center justify-center h-10 rounded-md">
                        View item
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <hr className=" text-slate-500 h-6 w-[628px] "></hr>
              <div className="flex gap-8">
                <img
                  className="h-[80px] w-[80px]"
                  src="/img/SecondShirt.svg"
                ></img>

                <div className="mt-3">
                  <span className="font-bold text-sm">Essential neutrals</span>
                  <div className="flex items-center gap-2 mt-[6px]">
                    <div className="flex flex-col gap-2">
                      <span className="font-medium text-gray-500 text-xs ">
                        Added on jul 27/2023
                      </span>
                      <span className="font-medium text-xs">$27.00</span>
                    </div>

                    <div className="flex items-center gap-5 ml-32 ">
                      <span className="font-semibold underline decoration-slate-300 underline-offset-[5px] "> Processing </span>
                      <button
                        className="border-black border-2 text-xs w-24 flex items-center justify-center h-10 rounded-md "
                        onClick={() =>
                          alert("This item has been added to the cart")
                        }
                      >
                        View item
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ordersprofilepage;