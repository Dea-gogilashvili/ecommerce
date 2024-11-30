const Footer = () => {
  return (
    <div className="bg-gray-100 py-10 max-w-[1600px] ">
      <div className=" mx-auto px-6 ml-40">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold">Ecommerce</h2>
            <p className="mt-2 text-gray-600">
              DevCut is a YouTube channel for practical project-based learning.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-600 hover:text-gray-800 cursor-pointer">
                  FAQ
                </span>
              </li>
              <li>
                <span className="text-gray-600 hover:text-gray-800 cursor-pointer">
                  Terms of Use
                </span>
              </li>
              <li>
                <span className="text-gray-600 hover:text-gray-800 cursor-pointer">
                  Privacy Policy
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-600 hover:text-gray-800 cursor-pointer">
                  About Us
                </span>
              </li>
              <li>
                <span className="text-gray-600 hover:text-gray-800 cursor-pointer">
                  Contact
                </span>
              </li>
              <li>
                <span className="text-gray-600 hover:text-gray-800 cursor-pointer">
                  Careers
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-600 hover:text-gray-800 cursor-pointer">
                  My Account
                </span>
              </li>
              <li>
                <span className="text-gray-600 hover:text-gray-800 cursor-pointer">
                  Checkout
                </span>
              </li>
              <li>
                <span className="text-gray-600 hover:text-gray-800 cursor-pointer">
                  Cart
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
