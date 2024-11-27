// const Succsessfulpaymentbottomhalf = () => {
//   return (
//     <div className="flex flex-col items-center">

//       <div>
//         <img src="/img/greenbox.svg"></img>
//       </div>

//       <div className="flex flex-col">
//         <span className=" text-xl font-bold">Thank you for shopping</span>
//         <span className=" w-[379px]  h-[50px]">
//           Your order has been successfully placed and is now being processed
//         </span>
//       </div>

//       <div>
//         <button>Go to my account → </button>
//       </div>
//     </div>
//   );
// };

// export default Succsessfulpaymentbottomhalf;

"use strict"

const SuccessfulPaymentBottomHalf = () => {
  return (
    <div className="flex flex-col items-center p-6 space-y-6 mt-40 pb-60 ">

      <div>
        <img src="/img/greenbox.svg" alt="Green box" />
      </div>

      <div className="flex flex-col items-center text-center space-y-2">
        <span className="text-2xl font-bold">Thank you for shopping</span>
        
        
        <span className="text-lg text-gray-700 h-[50px] w-[379px]">
          Your order has been successfully placed and is now being processed.
        </span>
      </div>

      <div>
        <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-green-600 transition">
          Go to my account →
        </button>
      </div>
    </div>
  );
};

export default SuccessfulPaymentBottomHalf;


