const Poncho = () => {
  return (
    <div className="bg-gradient-to-r from-gray-200 to-white w-full h-[390px] mb-44 ">
      <div className="flex items-center justify-between max-w-[1116px]">
        <div className="flex flex-col space-y-2 py-[100px] px-10 m-auto">
          <h2 className="font-black text-3xl ml-20">
            Bowse our fashion paradise!
          </h2>
          <span className="ml-20">
            Step into a world of style and explore the diverse collection of our
            clothing categories.
          </span>
          <div className="py-10">
            <button className="bg-black text-white w-44 h-11 ml-20">
              Start →
            </button>
          </div>
        </div>
        <img src="/img/Poncho.png" className="w-[225px] h-[311px] flex items-center  relative left-52"></img>
      </div>
    </div>
  );
};

export default Poncho;
