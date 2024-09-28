const Footer = () => {
  return (
    <div className=" max-w-[1116px] mx-auto ">
      <div className="flex items-center gap-2 ">
        <img src="/img/EcommerceFoot.svg"></img>
        <span className="font-bold">Ecommerce</span>
      </div>

      <p className="w-[300px]  text-gray-600 ">
        Devcut is a Youtube Channel for practical project based learning.
      </p>

      <div className="flex max-sm: gap-3">
        <img src="/img/Github.svg" alt="Github Logo" />
        <img src="/img/Youtube.png" alt="Youtube Logo" />
        <img src="/img/Instagram.svg" alt="Instagram Logo" />
      </div>

      <div className="flex absolute gap-28">
        <ul className=" pl-5 gap-3">
          <h5 className="text-slate-400 font-medium">SUPPORT</h5>
          <li>FAQ</li>
          <li>Terms of use</li>
          <li>Privacy policy</li>
        </ul>

        <ul className=" pl-5 gap-3">
          <h5 className="text-slate-400 font-medium">COMPANY</h5>
          <li>About us</li>
          <li>Contact</li>
          <li>Career</li>
        </ul>

        <ul className=" pl-5 gap-3">
          <h5 className="text-slate-400 font-medium">SHOP</h5>
          <li>My account</li>
          <li>Checkout</li>
          <li>Cart</li>
        </ul>

        <div>
          <h5 className="text-slate-400 font-medium ">ACCEPTED PAYMENTS</h5>

          <div className="flex gap-4">
            <img src="/img/visa.svg"></img>
            <img src="/img/mastercard.svg"></img>
            <img src="/img/amex.svg"></img>
          </div>
        </div>

        

      </div>
    </div>
  );
};

export default Footer;
