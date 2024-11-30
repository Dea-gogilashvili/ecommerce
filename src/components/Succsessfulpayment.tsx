import { Link } from "react-router-dom";

const SuccessfulPayment = () => {
  return (
    <div>
      <div className="flex flex-col space-y-2 justify-center py-[80px] px-10 bg-[#D5E5D7] h-[160px] max-w-[1600px] m-auto ">
        <div className="flex flex-col gap-3 ml-28 ">
          <h2 className="text-xl font-black">Succsessfull payment</h2>

          <div className="flex gap-4">
            <Link to="/" className="">
              Ecommerce
            </Link>
            <img src="/img/Cartarrow.svg"></img>
            <span className="font-bold">Succsessfull order</span>
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default SuccessfulPayment;
