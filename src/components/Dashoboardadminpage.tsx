const Dashboardadminpage = () => {
  return (
    <div className="max-w-[1600px] bg-gray-100 flex">
      <div className="max-w-[260px] h-[770px] max-h-[770px]  px-10 mt-5">
        <div className="flex items-center gap-4 mb-20">
          <img src="/img/Adminpagelogo.svg" alt="Admin Logo" />
          <span className="font-extrabold text-2xl">Admin</span>
        </div>

        <ul className="space-y-8 flex flex-col gap-3">
          <li className="flex gap-3 bg-slate-200 text-inherit font-medium rounded-lg w-[150px] h-[40px] items-center px-2">
            <img src="/img/Dashboard.svg" alt="Dashboard" /> Dashboard
          </li>
          <li className="flex gap-3 font-medium cursor-pointer">
            <img src="/img/Product.svg" alt="Product" /> Products
          </li>
          <li className="flex gap-3 font-medium cursor-pointer">
            <img src="/img/Orders.svg" alt="Orders" /> Orders
          </li>
          <li className="flex gap-3 font-medium cursor-pointer">
            <img src="/img/Costumers.svg" alt="Costumers" /> Costumers
          </li>
          <li className="flex gap-3 font-medium cursor-pointer">
            <img src="/img/Reviews.svg" alt="Reviews" /> Reviews
          </li>
          <li className="flex gap-3 font-medium cursor-pointer">
            <img src="/img/Settings.svg" alt="Settings" /> Settings
          </li>

          <hr />

          <li className="flex gap-3 font-medium cursor-pointer">
            <img src="/img/Extras.svg" alt="Extras" /> Extras
          </li>
        </ul>
      </div>

      <div className="flex-1 p-10 bg-slate-200 gap-3">
        <div className="text-sm text-gray-600 flex items-center gap-3 ">
          <span className="font-medium">Admin</span>
          <img src="/img/Cartarrow.svg" className="ml-2" alt="Cart Arrow" />
          <span className="text-black">Dashboard</span>
        </div>

        <div className="   grid grid-cols-3 mt-16  ">
          <div className="w-[328px] h-[187px] bg-white rounded-lg shadow-lg p-4  ">
            <div className="flex flex-row justify-between items-center mb-4">
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-lg">Total sales</span>
                <span className="text-gray-700 text-sm">THIS MONTH</span>
              </div>

              <div>
                <span className=" text-xl font-extrabold">$4,235</span>
              </div>
            </div>

            <img
              className="w-full h-auto  mt-14"
              src="/img/Adminpage1.svg"
              alt="Sales"
            />
          </div>

          <div className="w-[328px] h-[187px] bg-white rounded-lg shadow-lg p-4  ">
            <div className="flex flex-row justify-between items-center mb-4">
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-lg">Costumers</span>
                <span className="text-gray-700 text-sm">THIS MONTH</span>
              </div>

              <div>
                <span className=" text-xl font-extrabold">2,284</span>
              </div>
            </div>

            <img
              className="w-full h-auto  mt-14"
              src="/img/Squigglyline.svg"
              alt="Sales Graphic"
            />
          </div>

          <div className="w-[328px] h-[187px] bg-white rounded-lg shadow-lg p-4  ">
            <div className="flex flex-row justify-between items-center mb-4">
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-lg">Orders</span>
                <span className="text-gray-700 text-sm">
                  MONTHLY GOALS : 1,000
                </span>
              </div>

              <div>
                <span className=" text-xl font-extrabold"> 757</span>
              </div>
            </div>

            <div className="mt-14">
              <span className="text-xs text-gray-500 font-bold">266 left</span>
              <div className="w-[272px] h-[8px] bg-slate-300 rounded-md ">
                <div className="h-2 bg-[#4078FF] w-[190px] rounded-md "></div>
              </div>
            </div>
          </div>
        </div>



        <div className=" grid grid-cols-2 mt-11 ">
          <div className=" max-w-[330px] max-h-[475px] flex flex-col  gap-2 bg-white rounded-lg shadow-lg p-4">
          <div className="w-[328px]  flex flex-col  gap-2">
              <span className="font-bold">Best selling</span>
              <span className="text-sm font-medium text-gray-500"> THIS MONTH</span>
            </div>
           

            <hr className="bg-gray-700 w-[330x] h-[0.5px]"></hr>
            
            <div className="flex gap-4 flex-col">

            <div className="flex items-center space-x-2 mt-5">
               <span className="font-bold text-3xl">$2,400 — </span>
               <span className="text-lg text-gray-500">Total sales</span>
           </div>


              <div className="flex border-[0.5px] border-solid rounded-xl border-gray-400 text-sm justify-center w-[280px]">
               <span className="text-gray-600">Classic monochrome tees  — </span>
               <span className="font-medium">$940 sales</span>
              </div>

              <div className="flex border-[0.5px] border-solid rounded-xl border-gray-400 text-sm justify-center w-[280px]" >
               <span className="text-gray-600">Monochromatic wardrobe — </span>
               <span className="font-medium">$790 sales</span>
              </div>

              <div className="flex border-[0.5px] border-solid rounded-xl border-gray-400 text-sm justify-center w-[220px]" >
               <span className="text-gray-600">Essential neutrals  — </span>
               <span className="font-medium">$740 sales</span>
              </div>
              
              <img className="w-[96px] h-[96px] m-4" src="/img/donati.svg"/>
            </div>

          </div>

          <div className="w-[640px] h-[435px]  bg-purple-800 ">



          </div>
         
           















        </div>
      </div>
    </div>
  );
};

export default Dashboardadminpage;
