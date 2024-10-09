const YourCart = () => {
  return (
    <div className="mt-14 ml-36 max-w-[1600px]">

      <h5 className="font-semibold max-w-[1600px]">Your cart</h5>
      <hr className=" text-slate-500 h-6 w-[628px] "></hr>


      <div className="space-y-4 gap-12 ">
        <div className="">
          <img src="/img/FirstShirt.svg"></img>
        </div>

        <div className="">
          <img src="/img/SecondShirt.svg"></img>
        </div>
      </div>

    </div>
  );
};

export default YourCart;
