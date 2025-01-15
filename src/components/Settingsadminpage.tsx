// const Settingsadminpage = () => {
//   return (
//     <div className="max-w-[1600px] bg-gray-100 flex">
//       <div className="max-w-[260px] h-[770px] max-h-[770px]  px-10 mt-5">
//         <div className="flex items-center gap-4 mb-20">
//           <img src="/img/Adminpagelogo.svg" alt="Admin Logo" />
//           <span className="font-extrabold text-2xl">Admin</span>
//         </div>

//         <ul className="space-y-8 flex flex-col gap-3">
//           <li className="flex gap-3 font-medium cursor-pointer">
//             <img src="/img/Dashboard.svg" alt="Dashboard" /> Dashboard
//           </li>
//           <li className="flex gap-3 font-medium cursor-pointer">
//             <img src="/img/Product.svg" alt="Product" /> Products
//           </li>
//           <li className="flex gap-3 font-medium cursor-pointer">
//             <img src="/img/Orders.svg" alt="Orders" /> Orders
//           </li>
//           <li className="flex gap-3 font-medium cursor-pointer">
//             <img src="/img/Costumers.svg" alt="Costumers" /> Costumers
//           </li>
//           <li className="flex gap-3 font-medium cursor-pointer">
//             <img src="/img/Reviews.svg" alt="Reviews" /> Reviews
//           </li>
//           <li className="flex gap-3 bg-slate-200 text-inherit font-medium rounded-lg w-[150px] h-[40px] items-center px-2">
//             <img src="/img/Settings.svg" alt="Settings" /> Settings
//           </li>

//           <hr />

//           <li className="flex gap-3 font-medium cursor-pointer">
//             <img src="/img/Extras.svg" alt="Extras" /> Extras
//           </li>
//         </ul>
//       </div>

//       <div className="flex-1 p-10 bg-slate-200 gap-3">
//         <div className="text-sm text-gray-600 flex items-center gap-3 ">
//           <span className="font-medium">Admin</span>
//           <img src="/img/Cartarrow.svg" className="ml-2" alt="Cart Arrow" />
//           <span className="text-black">Dashboard</span>
//         </div>

//         <div className="max-w-[1000px]  h-[500px] bg-white rounded-lg  mt-14">
//           <div className="relative overflow-x-auto">
//             <div className="flex gap-[750px] mt-7 ml-5 mb-5 items-center  ">
//               <span className="font-bold ">Settings</span>
//             </div>
//           </div>
         
   
     
    
//          <div className="w-[360px] h-[75px]  ml-10 flex flex-col   ">
//              <div className="mb-4 font-extrabold mt-6">
//                   <label htmlFor="email"className="block text-sm font-medium text-gray-700">Site name</label>
//                   <input type="email" id="email" className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300" required />
//              </div> 
           
         
//              <div className="mb-4 font-extrabold mt-6">
//                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Support email</label>
//                  <input type="email"  id="email" className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300" required/>
//              </div>

//              <div className="mb-4 font-extrabold mt-6">
//                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">monthly order goal</label>
//                  <input type="email"  id="email" className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300" required/>
//              </div> 

         
         
//              <button type="submit"className="w-[140px] bg-black text-white py-2 rounded hover:bg-gray-800 mt-9" > Save changes</button>
//          </div>
       
       
         
        
      
    
  


//         </div>
//       </div>
     





//     </div>
//   );
// };

// export default Settingsadminpage;

import React, { useState } from 'react';

const Settingsadminpage = () => {
  const [siteName, setSiteName] = useState('');
  const [supportEmail, setSupportEmail] = useState('');
  const [monthlyOrderGoal, setMonthlyOrderGoal] = useState('');

  const SaveChanges = () => {
    alert("Changes saved!");
    console.log({
      siteName: siteName,
      supportEmail: supportEmail,
      monthlyOrderGoal: monthlyOrderGoal
    });
  };

  return (
    <div className="max-w-[1600px] bg-gray-100 flex">
      <div className="max-w-[260px] h-[770px] max-h-[770px]  px-10 mt-5">
        <div className="flex items-center gap-4 mb-20">
          <img src="/img/Adminpagelogo.svg" alt="Admin Logo" />
          <span className="font-extrabold text-2xl">Admin</span>
        </div>

        <ul className="space-y-8 flex flex-col gap-3">
          <li className="flex gap-3 font-medium cursor-pointer">
            <img src="/img/Dashboard.svg" alt="Dashboard" /> Dashboard
          </li>
          <li className="flex gap-3 font-medium cursor-pointer">
            <img src="/img/Product.svg" alt="Product" /> Products
          </li>
          <li className="flex gap-3 font-medium cursor-pointer">
            <img src="/img/Orders.svg" alt="Orders" /> Orders
          </li>
          <li className="flex gap-3 font-medium cursor-pointer">
            <img src="/img/Costumers.svg" alt="Costumers" /> Costumers
          </li>
          <li className="flex gap-3 font-medium cursor-pointer">
            <img src="/img/Reviews.svg" alt="Reviews" /> Reviews
          </li>
          <li className="flex gap-3 bg-slate-200 text-inherit font-medium rounded-lg w-[150px] h-[40px] items-center px-2">
            <img src="/img/Settings.svg" alt="Settings" /> Settings
          </li>

          <hr />

          <li className="flex gap-3 font-medium cursor-pointer">
            <img src="/img/Extras.svg" alt="Extras" /> Extras
          </li>
        </ul>
      </div>

      <div className="flex-1 p-10 bg-slate-200 gap-3">
        <div className="text-sm text-gray-600 flex items-center gap-3 ">
          <span className="font-medium">Admin</span>
          <img src="/img/Cartarrow.svg" className="ml-2" alt="Cart Arrow" />
          <span className="text-black">Dashboard</span>
        </div>

        <div className="max-w-[1000px]  h-[500px] bg-white rounded-lg  mt-14">
          <div className="relative overflow-x-auto">
            <div className="flex gap-[750px] mt-7 ml-5 mb-5 items-center border-b ">
              <span className="font-bold ">Settings</span>
            </div>
          </div>

          <div className="w-[360px] h-[75px]  ml-10 flex flex-col   ">
            <div className="mb-4 font-extrabold mt-6">
              <label htmlFor="siteName" className="block text-sm font-medium text-gray-700">
                Site name
              </label>
              <input
                type="text"
                id="siteName"
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
                className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>

            <div className="mb-4 font-extrabold mt-6">
              <label htmlFor="supportEmail" className="block text-sm font-medium text-gray-700">
                Support email
              </label>
              <input
                type="email"
                id="supportEmail"
                value={supportEmail}
                onChange={(e) => setSupportEmail(e.target.value)}
                className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>

            <div className="mb-4 font-extrabold mt-6">
              <label htmlFor="monthlyOrderGoal" className="block text-sm font-medium text-gray-700">
                Monthly order goal
              </label>
              <input
                type="number"
                id="monthlyOrderGoal"
                value={monthlyOrderGoal}
                onChange={(e) => setMonthlyOrderGoal(e.target.value)}
                className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>

            <button
              type="button"
              onClick={SaveChanges}
              className="w-[140px] bg-black text-white py-2 rounded hover:bg-gray-800 mt-9"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settingsadminpage;

