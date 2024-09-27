const Footer = () => {
  return (
    <div className=" max-w-[1116px] mx-auto space-y-6">
      <div className="flex items-center gap-2 ">
        <img src="/img/EcommerceFoot.svg"></img>
        <span className="font-bold">Ecommerce</span>
      </div>

      <p className="w-[300px]  text-gray-600 ">
        Devcut is a Youtube Channel for practical project based learning.
      </p>

      <div className="flex gap-3">
        <img src="/img/Github.svg" alt="Github Logo" />
        <img src="/img/Youtube.png" alt="Youtube Logo" />
        <img src="/img/Instagram.svg" alt="Instagram Logo" />
      </div>

      <div className="">
        <ul>
          <h5>SUPPORT</h5>
          <li>FAQ</li>
          <li>Terms of use</li>
          <li>Privacy policy</li>
        </ul>

        <ul>
          <h5>COMPANY</h5>
          <li>About us</li>
          <li>Contact</li>
          <li>Career</li>
        </ul>

        <ul>
          <h5>SHOP</h5>
          <li>My account</li>
          <li>Checkout</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
