const NewsLetter = () => {
  return (
    <div className="flex flex-col space-y-2 py-[70px] px-10 bg-gray-100 w-[1530px] h-[200px] mb-[90px]">
      <h2 className="font-black text-3xl ml-20">Join our newsletter </h2>
      <span className="ml-20">
        we love to surprise our subscribers with occasonal gifts.
      </span>

      <div className="absolute right-4">
        <input className="  w-[422px] h-11 bg-gray-100 border-2 border-gray-400 rounded-md" type="email" placeholder="Your email here"/>
        <button className="bg-black text-white w-44 h-11 ">Subscribe </button>
      </div>

      
    </div>
  );
};

export default NewsLetter;
