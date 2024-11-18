import { Link } from "react-router-dom";

const CheckoutGreyLine = () => {
  return (
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
  );
};

export default CheckoutGreyLine;