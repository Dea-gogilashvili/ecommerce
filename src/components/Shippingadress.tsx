

const Shippingadress = () => {
  const inputs = [
    { label: "Address", type: "text" },
    { label: "City", type: "text" },
    { label: "State", type: "text" },
    { label: "Zip code", type: "number" },
    { label: "Country", type: "text" },
    { label: "E-mail", type: "email" },
    { label: "Full name", type: "text" },
  ];

  return (
    <div className="max-w-[1116px] flex items-center  justify-between mt-[35px] m-auto ">
      <div>
        <p className="text-[16px] text-[#0E1422] font-semibold">
          Shipping address
        </p>
        <div>
          <label className="block mt-[64px]" htmlFor="address">
            Address
          </label>
          <input
            className="border border-1 rounded-[6px] w-[534px] h-[45px]"
            type="text"
            id="address"
          />
        </div>
        <div className="flex gap-[16px] mt-[15px]">
          {inputs.slice(1, 3).map((input, index) => (
            <div key={index} className="h-[69px]">
              <label className="block" htmlFor={input.label}>
                {input.label}
              </label>
              <input
                className="border border-1 rounded-[6px] w-[259px] h-[45px]"
                type={input.type}
                id={input.label}
              />
            </div>
          ))}
        </div>
        <div className="flex gap-[16px] mt-[15px]">
          {inputs.slice(3, 5).map((input, index) => (
            <div key={index} className="h-[69px]">
              <label className="block" htmlFor={input.label}>
                {input.label}
              </label>
              <input
                className="border border-1 rounded-[6px] w-[259px] h-[45px]"
                type={input.type}
                id={input.label}
              />
            </div>
          ))}
        </div>
        <div className="flex gap-[16px] mt-[15px]">
          {inputs.slice(5).map((input, index) => (
            <div key={index} className="h-[69px]">
              <label className="block" htmlFor={input.label}>
                {input.label}
              </label>
              <input
                className="border border-1 rounded-[6px] w-[259px] h-[45px]"
                type={input.type}
                id={input.label}
              />
            </div>
          ))}
        </div>
      </div>
       
      
      <div> {/* მეორე მხარე მშობელი დივი */}

        <div className="font-medium">
          <span>Your order</span>
        </div>

        <div className=" flex gap-28 items-center ">
          <div className="flex gap-4">
            <img src="/img/littlecircleimgshirt.svg"></img>
            <img src="/img/littlecircleimgshirt3.svg"></img>
            <img src="/img/littlecircleimgshirt2.svg"></img>
          </div>
          <span className="border-2 border-solid rounded-lg w-[107px] h-[44px] flex justify-center items-center text-slate-400">
            Edit cart
          </span>
            
          <div className="flex gap-40 mt-4">
          <span className="text-slate-500">Subtotal : </span>
          <span className="font-medium">$90.00</span>
        </div>

        <div className="flex gap-44">
          <span className="text-slate-500">Shipping :</span>
          <span className="font-medium">Free</span>
        </div>

        <div className="flex gap-52">
          <span className="text-slate-500">Tax : </span>
          <span className="font-medium">$3.00</span>
        </div>

        <hr className=" text-slate-500 h-1 w-[293px] mb-0"></hr>

        <div className="flex gap-44 mt-0">
          <span className="font-medium">Total :</span>
          <span className="font-medium">$100.00</span>
        </div>

         
      
          

          </div>

          



      </div>
    </div>
  );
};

export default Shippingadress;



