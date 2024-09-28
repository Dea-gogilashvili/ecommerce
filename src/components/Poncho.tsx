const Poncho = () => {
  return (
    <div className="flex flex-col space-y-2 py-[100px] px-10 bg-gradient-to-r from-gray-200 to-white w-[1535px] h-[390px] my-[160px] ">

      <h2 className="font-black text-3xl ml-20">
        Bowse our fashion paradise!{" "}
      </h2>
      <span className="ml-20">
        Step into a world of style and explore the diverse collection of our
        clothing categories.
      </span>
      <div className="py-10">
        <button className="bg-black text-white w-44 h-11 ml-20">
          Start →{" "}
        </button>
      </div>

      <div className="absolute right-4 w-[255px] h-[382px]">
        <img src="/img/Poncho.png"></img>
      </div>

    </div>
  );
};

export default Poncho;
