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
  
        <div className="flex flex-col justify-center items-center gap-8 ml-64">
  <img src="/img/NoOrdersYet.svg" alt="No orders yet" />
  <span>Your order history is waiting to be filled.</span>
  <button className="bg-black text-white w-44 h-11 rounded-md mt-4">Start shopping →</button>
</div>


       
      </div>
    </div>
  );
};

export default Ordersprofilepage;