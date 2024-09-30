// import { useState } from 'react';
// import { Link } from "react-router-dom";
// import React from 'react';

// const Header = () => {
//   const [value, setValue] = useState<string>('');

//   const onClickSearch = () => {
//     alert(`You are searching for ${value}`);
//   };

//   const onChangeSearch = (e: any) => {
//     setValue(e.target.value);
//   };

//   return (
//     <header className='w-full h-20 bg-gray-200 flex justify-between items-center px-4'>

//       <a href='/'>
//        <h1 className='text-2xl text-gray-600'>Space X</h1>
//       </a>

//       <div>
//         <input
//           type='text'
//           onChange={onChangeSearch}
//           className='outline-none px-2 py-1 border rounded-md border-gray-400 focus:border-gray-800 transition-all duration-300 '
//           placeholder='Search...'
//         />
//         <button
//           className='bg-gray-400 text-gray-600 ml-1 py-1 px-2 rounded-md'
//           onClick={onClickSearch}
//         >
//           Search
//         </button>
//       </div>

//       <nav className='flex gap-4'>
//         <Link to='/' className='text-lg text-gray-600 hover:text-blue-700'>
//           Home
//         </Link>
//         <Link to='/about' className='text-lg text-gray-600 hover:text-blue-700'>
//           About
//         </Link>
//         <Link to='/contact' className='text-lg text-gray-600 hover:text-blue-700'>
//           Contact
//         </Link>
//         <Link to='/history' className='text-lg text-gray-600 hover:text-blue-700'>
//          History
//         </Link>
//       </nav>
//     </header>
//   );
// };

// export default Header;

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
            <img src="/img/ShoppingCart.svg" alt="Shopping cart" />
          </nav>

   
   
      </div>
    </div>
  );
};

export default Header;
