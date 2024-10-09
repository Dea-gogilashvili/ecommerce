import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="max-w-[1600px]  m-auto">
      <div className="py-4 bg-black text-center ">
        <span className="text-white">Get 25% OFF on your first order. Order now</span>
      </div>

      <div className="flex items-center  mx-auto my-6 max-w-[1600px] m-auto">
       
          <div className="flex items-center gap-2 ml-24">
            <img src="/img/EcommerceLogo.svg"></img>
            <span className="font-bold">Ecommerce</span>
          </div>

          <nav className="flex items-center font-medium gap-8 max-w-[1600px]  m-auto">
            <a href="/">Home</a>
            <a href="/">Categories</a>
            <a href="/">About</a>
            <a href="/">Contact</a>

            <input type="search" placeholder="Search products" className=" border-2 border-gray-300 rounded-md p-2 ml-28  max-w-[1600px]  m-auto"/>
            <img src="/img/IconLogo.svg" alt="Sign in logo" />
            <Link to="/cart" className="">
            <img src="/img/ShoppingCart.svg"></img>
          </Link>
          </nav>

   
   
      </div>
    </div>
  );
};

export default Header;
