const Slider = () => {
  return (
    <div className="flex flex-col space-y-2 py-[100px] px-10 bg-gray-200 w-[1535px] h-[390px] max-w-[1600px]  m-auto">
      <h2 className="font-black text-3xl ml-20">Fresh Arrivals Online </h2>
      <span className="ml-20">Discover Our Newest Collection Today.</span>
      <div className="py-10">
        <button className="bg-black text-white w-44 h-11 ml-20">
          View Collection →
        </button>
      </div>

      <div className="w-[340px] h-[340px] bg-gray-300 rounded-full flex items-center ml-auto absolute right-4 bottom-[206px]">
        <img className="w-[255px] h-[382px]" src="/img/Hero Image.png"></img>
      </div>

    </div>
  );
};

export default Slider;
