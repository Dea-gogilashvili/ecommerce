

import { Link } from 'react-router-dom';

const Shippingadress = () => {
  return (


<div> 
    <div className="flex flex-col space-y-2 justify-center py-[80px] px-10 bg-gray-200 h-[160px] max-w-[1600px] m-auto">
    <div className="flex flex-col gap-3 ml-28 ">
      <h2 className="text-xl font-black">Checkout</h2>

      <div className="flex gap-4">
        <Link to="/" className="">
          Ecommerce
        </Link>
        <img src="/img/Cartarrow.svg"></img>
        <span className="font-bold">Checkout</span>
      </div>
    </div>
  </div>
    <div className="flex  justify-between max-w-[1116px] m-auto mt-[56px] pb-44">
      <div>
      <div>
      <p className='text-[16px] text-[#0E1422] font-semibold'>Shipping Address</p>

      <div>
        <label className='block mt-[64px]' htmlFor='address'>Address</label>
        <input className='border border-1 rounded-[6px] w-[534px] h-[45px]' type='text' />
      </div>

      <div className='flex gap-[16px] mt-[15px]'>
        <div className='h-[69px]'>
          <label className='block'>City</label>
          <input className='border border-1 rounded-[6px] w-[259px] h-[45px]' type='text' />
        </div>
        <div className='h-[69px]'>
          <label className='block'>State</label>
          <input className='border border-1 rounded-[6px] w-[259px] h-[45px]' type='text' />
        </div>
      </div>

      <div className='flex gap-[16px] mt-[15px]'>
        <div className='h-[69px]'>
          <label className='block'>Zip Code</label>
          <input className='border border-1 rounded-[6px] w-[259px] h-[45px]' type='number' />
        </div>
        <div className='h-[69px]'>
          <label className='block'>Country</label>
          <input className='border border-1 rounded-[6px] w-[259px] h-[45px]' type='text' />
        </div>
      </div>

      <div className='flex gap-[16px] mt-[51px]'>
        <div className='h-[69px]'>
          <label className='block'>Email</label>
          <input className='border border-1 rounded-[6px] w-[259px] h-[45px]' type='email' />
        </div>
        <div className='h-[69px]'>
          <label className='block'>Full Name</label>
          <input className='border border-1 rounded-[6px] w-[259px] h-[45px]' type='text' />
        </div>
      </div>
    </div>
      </div>
      <div className="border border-1 w-[1px] h-[504px]"></div>
      <div>
        
        <div className="">
          <p className=" font-semibold mt-[16px]">Your Order</p>
          <div className="flex justify-between w-[372px] mt-[64px]">
            <div className="flex gap-[12px]">
              <img
                className="w-[40px] h-[40px] transition hover:scale-150 hover:-translate-y-1 duration-500"
                src="/img/littlecircleimgshirt3.svg"
                alt=""
              />
              <img
                className="w-[40px] h-[40px] transition hover:scale-150 hover:-translate-y-1 duration-500"
                src="/img/littlecircleimgshirt2.svg"
                alt=""
              />
              <img
                className="w-[40px] h-[40px] transition hover:scale-150 hover:-translate-y-1 duration-500"
                src="/img/littlecircleimgshirt.svg"
                alt=""
              />
            </div>
            <Link to="/"><button className='w-[107px] h-[44px] border border-1 rounded-[4px] text-[#5C5F6A] hover:scale-110 hover:-translate-y-1 duration-500'>Edit Cart</button></Link>
          </div>
          <div>
            <div className="flex justify-between mt-[64px]">
              <p className="text-[#5C5F6A]">Subtotal</p>
              <p className="text-[#0E1422] font-semibold">$ 75.00</p>
            </div>
            <div className="flex justify-between mt-[12px]">
              <p className="text-[#5C5F6A]">Shipping: </p>
              <p className="text-[#0E1422] font-semibold">Free</p>
            </div>
            <div className="flex justify-between mt-[12px]">
              <p className="text-[#5C5F6A]">Tax: </p>
              <p className="text-[#0E1422] font-semibold">$ 3.00</p>
            </div>
          </div>
          <hr className="mt-[24px]"></hr>
          <div className="flex justify-between mt-[24px]">
            <p className="text-[#0E1422] font-semibold">Total</p>
            <p className="text-[#0E1422] font-semibold">$ 78.00</p>
          </div>
          <Link to="/afterpayment">
          <button className='w-[372px] h-[44px] rounded-[4px] bg-[#0E1422] text-white mt-[24px] hover:scale-110 duration-500' type="submit" value="Submit">Place Order</button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Shippingadress;
