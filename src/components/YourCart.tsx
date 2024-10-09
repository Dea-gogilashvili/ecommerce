const YourCart = () => {
  return (
    <div className="mt-14 ml-36 max-w-[1600px]">
      <h5 className="font-semibold max-w-[1600px] mb-4">Your cart</h5>
      <hr className=" text-slate-500 h-6 w-[628px] "></hr>

      <div className="space-y-9 gap-12 mt-6">
        <div className="flex gap-5 ">
          <img src="/img/FirstShirt.svg"></img>
          <span className="font-bold text-sm">Raw black t-shirt lineup</span>
        </div>

        <div className="flex gap-5">
          <img src="/img/SecondShirt.svg"></img>
          <span className="font-bold text-sm">Essential neutrals</span>
        </div>
      </div>
    </div>
  );
};

export default YourCart;
