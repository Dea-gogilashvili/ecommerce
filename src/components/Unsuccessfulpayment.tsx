"use strict";

const Unsuccessfulpayment = () => {
  return (
    <div>
      <div className="flex flex-col space-y-2 justify-center py-[80px] px-10 bg-[#dc9999] h-[160px] max-w-[1600px] m-auto ">
        <div className="flex flex-col gap-3 ml-28 ">
          <h2 className="text-xl font-black">Order failed</h2>

          <div className="flex gap-4">
            <span>Ecommerce </span>

            <img src="/img/Cartarrow.svg"></img>
            <span className="font-bold">Failed order</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center p-6 space-y-6 mt-40 pb-60 gap-8">
        <div>
          <img src="/img/Redbox.svg" alt="failed payment" />
        </div>

        <div className="flex flex-col items-center text-center space-y-2">
          <span className="text-2xl font-bold">OOPS! There was an issue </span>

          <span className="text-lg text-gray-700 h-[50px] w-[379px]">
            OOPS there was a problem recieving your order. please review the
            details and try again.
          </span>
        </div>

        <div>
          <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-green-600 transition">
            Reorder →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Unsuccessfulpayment;
