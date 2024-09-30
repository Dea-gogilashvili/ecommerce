const Shipping = () => {
    return (
        <div className="flex justify-between space-x-4 mt-10 max-w-[1200px] m-auto ">

            <div className="">
                 <img src="/img/ShippingLogo.svg"></img>
            <span className="text-lg font-black">free shipping</span>
            <p className="w-[328px] h-[218px]">Uprade you style today and get FREE shipping on all orders! Don't miss out.</p>
            </div>

            <div className="">
                 <img src="/img/MedaLogo.svg"></img>
            <span className="text-lg font-black">Satisfication guarantee</span>
            <p className="w-[328px] h-[218px]">shop confidently with our satisfication guarantee. Love it or get a refund.</p>
            </div>

            <div className="">
                 <img src="/img/CheckLogo.svg"></img>
            <span className="text-lg font-black">Secure payment</span>
            <p className="w-[328px] h-[218px]">Your security is our priority. your information is safe with us.</p>
            </div>

            
           
        </div>
   
    );
};

export default Shipping;