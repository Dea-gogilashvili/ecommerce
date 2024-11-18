import Counter from "./Counter";
import { Link } from 'react-router-dom';


const YourCart = () => {
  return (
    <div className=" max-w-[1116px] flex items-center  justify-between mt-[35px] m-auto">
      <div>
        <h5 className="font-semibold max-w-[1600px] mb-4">Your cart</h5>
        <hr className=" text-slate-500 h-6 w-[628px] "></hr>
        <div className="space-y-9 mt-6 ">
          <div className="flex gap-8">
            <img className="h-[80px] w-[80px]" src="/img/FirstShirt.svg"></img>
            <div className="mt-3">
              <span className="font-bold text-sm">
                Raw black t-shirt lineup
              </span>
              <div className="flex items-center gap-2 mt-[6px]">
                <span>Color : </span>
                <img className="w-3 h-3" src="img/Purplecircle.svg"></img>
                <span> — Size: M </span>

                <div className="flex items-center gap-5 ml-32"> 
                  <span className="font-semibold"> $75.00 </span>
                  <Counter/>
                  <img src="/img/remove.svg"></img> 
                </div>
                
              </div>
            </div>
          </div>
          <div className="flex gap-8">
            <img className="h-[80px] w-[80px]" src="/img/SecondShirt.svg"></img>
            <div className="mt-3">
              <span className="font-bold text-sm">Essential neutrals</span>
              <div className="flex items-center gap-2 mt-[6px]">
                <span>Color : </span>
                <img className="w-3 h-3" src="img/Greencircle.svg"></img>
                <span> — Size: M </span>

                <div className="flex items-center gap-5 ml-32">
                  <span className="font-semibold"> $22.00 </span>
                  <Counter/>
                  <img src="/img/remove.svg"></img> 
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[342px] max-h-[500px] border-solid border-2 border-inherit flex gap-6 flex-col pl-6 pr-6 pt-9">
        <h3 className="font-semibold ">Order Summary</h3>

        <div className="flex gap-40 mt-4">
          <span className="text-slate-500">Subtotal : </span>
          <span className="font-medium">$90.00</span>
        </div>

        <div className="flex gap-44">
          <span className="text-slate-500">Shipping :</span>
          <span className="font-medium">Free</span>
        </div>

        <div className="flex gap-52">
          <span className="text-slate-500">Tax : </span>
          <span className="font-medium">$3.00</span>
        </div>

        <hr className=" text-slate-500 h-1 w-[293px] mb-0"></hr>

        <div className="flex gap-44 mt-0">
          <span className="font-medium">Total :</span>
          <span className="font-medium">$100.00</span>
        </div>


        
        <Link to="/checkout" className="">
          <button className="bg-black text-white w-[296px] h-[44px] rounded">Checkout</button>
       </Link>

        
           
        

        <span className="underline flex justify-center items-center mb-8 ">Continue Shopping</span>
      </div>
    </div>
  );
};

export default YourCart;
