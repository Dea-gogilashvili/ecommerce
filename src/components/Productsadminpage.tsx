// const Productsadminpage = () => {
//     return (
//       <div className="max-w-[1600px] bg-gray-100 flex">
//         <div className="max-w-[260px] h-[770px] max-h-[770px]  px-10 mt-5">
//           <div className="flex items-center gap-4 mb-20">
//             <img src="/img/Adminpagelogo.svg" alt="Admin Logo" />
//             <span className="font-extrabold text-2xl">Admin</span>
//           </div>
  
//           <ul className="space-y-8 flex flex-col gap-3">
//             <li className="flex gap-3 bg-slate-200 text-inherit font-medium rounded-lg w-[150px] h-[40px] items-center px-2">
//               <img src="/img/Dashboard.svg" alt="Dashboard" /> Dashboard
//             </li>
//             <li className="flex gap-3 font-medium cursor-pointer">
//               <img src="/img/Product.svg" alt="Product" /> Products
//             </li>
//             <li className="flex gap-3 font-medium cursor-pointer">
//               <img src="/img/Orders.svg" alt="Orders" /> Orders
//             </li>
//             <li className="flex gap-3 font-medium cursor-pointer">
//               <img src="/img/Costumers.svg" alt="Costumers" /> Costumers
//             </li>
//             <li className="flex gap-3 font-medium cursor-pointer">
//               <img src="/img/Reviews.svg" alt="Reviews" /> Reviews
//             </li>
//             <li className="flex gap-3 font-medium cursor-pointer">
//               <img src="/img/Settings.svg" alt="Settings" /> Settings
//             </li>
  
//             <hr />
  
//             <li className="flex gap-3 font-medium cursor-pointer">
//               <img src="/img/Extras.svg" alt="Extras" /> Extras
//             </li>
//           </ul>
//         </div>
  
//         <div className="flex-1 p-10 bg-slate-200 gap-3">
//           <div className="text-sm text-gray-600 flex items-center gap-3 ">
//             <span className="font-medium">Admin</span>
//             <img src="/img/Cartarrow.svg" className="ml-2" alt="Cart Arrow" />
//             <span className="text-black">Dashboard</span>
//           </div>
  
//           <div className="max-w-[1300px]  h-[850px] bg-white rounded-lg  mt-14">
//             <div className="relative overflow-x-auto">
//               <div className="flex gap-[750px] mt-7 ml-5 mb-5 items-center  ">
//                 <span className="font-bold">Products</span>
//                 <div className="flex items-center gap-3">
//                      <button className="bg-black text-white rounded-md text-sm w-[124px] h-[35px]">Add product</button>
//                      <input type="text" placeholder=" 🔍 Search products" className="border-solid rounded-md border-gray-100 border-2 w-[190px] h-[35px]"></input>
                     
//                 </div>
               
               
//               </div>

//               <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//                 <thead className="text-xs text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400 border-b border-t">
//                   <tr>
//                        <th scope="col" className="px-11 py-3"> ⇅ </th>
//                        <th scope="col" className="px-6 py-3">Name</th>
//                        <th scope="col" className="px-6 py-3">SKU </th>
//                        <th scope="col" className="px-6 py-3">  Price </th>
//                        <th scope="col" className="px-6 py-3">  Stack </th>
//                        <th scope="col" className="px-6 py-3"> Categories </th>
//                        <th scope="col" className="px-6 py-3">  Action </th>

//                   </tr>
//                </thead>
                      
//               <tbody>
//                   <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700 border-b border-gray-100">
//                     <th scope="row" className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap dark:text-white ">  <img src="/img/dashboardT-shirt.svg" ></img> </th>
//                      <td className="px-6 py-4">Mens black t-shirt </td>
//                      <td className="px-6 py-4">097634</td>
//                      <td className="px-6 py-4">$5.00</td>
//                      <td className="px-6 py-4">IN-STOCK</td>
//                      <td className="px-6 py-4">T-shirt,Raw</td>
//                      <td className="px-11 py-4">⋯</td>
                     
//                   </tr>
                   
                    
                    
//                   <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700 border-b border-gray-100">
//                     <th scope="row" className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap dark:text-white" > <img src="/img/dashboardT-shirt.svg" ></img>  </th>
//                       <td className="px-6 py-4">Pink pony T-shirt </td>
//                       <td className="px-6 py-4">825432</td>
//                       <td className="px-6 py-4">$30.00</td>
//                       <td className="px-6 py-4">IN-STOCK</td>
//                       <td className="px-6 py-4">T-shirt,Trend</td>
//                       <td className="px-11 py-4">⋯</td>
//                  </tr>
                     
                   
//                   <tr className="bg-white dark:bg-gray-800  border-b border-gray-100">
//                     <th scope="row" className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap dark:text-white  "> <img src="/img/dashboardT-shirt.svg" ></img></th>
//                       <td className="px-6 py-4">Monochromatic wardrobe </td>
//                       <td className="px-6 py-4">8152101</td>
//                       <td className="px-6 py-4">$100.00</td>
//                       <td className="px-6 py-4">SOLD-OUT</td>
//                       <td className="px-6 py-4">T-shirt</td>
//                       <td className="px-11 py-4">⋯</td>
//                   </tr>
                
               
                    
//                   <tr className="bg-white dark:bg-gray-800 border-b border-gray-100">
//                     <th scope="row" className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap dark:text-white  "> <img src="/img/dashboardT-shirt.svg" ></img></th>
//                        <td className="px-6 py-4">Mockup-black </td>
//                        <td className="px-6 py-4">091498</td>
//                       <td className="px-6 py-4">$15.00</td>
//                       <td className="px-6 py-4">IN-STORE</td>
//                       <td className="px-6 py-4">T-shirt</td>
//                       <td className="px-11 py-4">⋯</td>
//                   </tr>
                    
                     
//                  <tr className="bg-white dark:bg-gray-800  border-b border-gray-100">
//                      <th scope="row" className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap dark:text-white  border-b border-gray-100" >  <img src="/img/dashboardT-shirt.svg" ></img> </th>
//                       <td className="px-6 py-4">Sleeck and cozy black </td>
//                       <td className="px-6 py-4">1780344</td>
//                       <td className="px-6 py-4">$64.00</td>
//                       <td className="px-6 py-4">IN-STORE</td>
//                       <td className="px-6 py-4">T-shirt,man</td>
//                       <td className="px-11 py-4">⋯</td>
//                  </tr>  
                     
//                  <tr className="bg-white dark:bg-gray-800  border-b border-gray-100">
//                      <th scope="row" className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap dark:text-white  border-b border-gray-100" > <img src="/img/dashboardT-shirt.svg" ></img> </th>
//                       <td className="px-6 py-4"> Sleeck and cozy black</td>
//                       <td className="px-6 py-4">2871548</td>
//                       <td className="px-6 py-4">$32.00</td>
//                       <td className="px-6 py-4">SOLD-OUT</td>
//                       <td className="px-6 py-4">T-shirt</td>
//                       <td className="px-11 py-4">⋯</td>
//                  </tr>  
                     
//                  <tr className="bg-white dark:bg-gray-800  border-b border-gray-100">
//                      <th scope="row" className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap dark:text-white  border-b border-gray-100" >  <img src="/img/dashboardT-shirt.svg" ></img> </th>
//                       <td className="px-6 py-4">Sleeck and cozy black</td>
//                       <td className="px-6 py-4">1875423</td>
//                       <td className="px-6 py-4">$49.00</td>
//                       <td className="px-6 py-4">IN-STOCK</td>
//                       <td className="px-6 py-4">T-shirt,man</td>
//                       <td className="px-11 py-4">⋯</td>
//                  </tr>  
                     
//                  <tr className="bg-white dark:bg-gray-800  border-b border-gray-100">
//                      <th scope="row" className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap dark:text-white  border-b border-gray-100" ><img src="/img/dashboardT-shirt.svg" ></img></th>
//                       <td className="px-6 py-4">Sleeck and cozy blac</td>
//                       <td className="px-6 py-4">1857739</td>
//                       <td className="px-6 py-4">$70.00</td>
//                       <td className="px-6 py-4">IN-STOCK</td>
//                       <td className="px-6 py-4">Completed</td>
//                       <td className="px-11 py-4">⋯</td>
//                  </tr>  
                 
//                 </tbody>
//               </table>
//             </div>
//           </div>
  
          
//         </div>
//       </div>
//     );
//   };
  
//   export default Productsadminpage;

import React, { useState } from "react";


interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}


const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center  space-x-2 mt-16 ml-[800px]">
      
      <button
        onClick={() => onPageChange(currentPage - 1)}
        className={`px-3 py-1 text-gray-700 hover:bg-gray-200 ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1  ${currentPage === page ? "bg-gray-200" : "" }`} >{page}</button>
        ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        className={`px-3 py-1   text-gray-700 hover:bg-gray-200 translate-x-6 ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};


const Productsadminpage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 5; 

  
  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  return (
    <div className="max-w-[1600px] bg-gray-100 flex">
      <div className="max-w-[260px] h-[770px] max-h-[770px] px-10 mt-5">
        <div className="flex items-center gap-4 mb-20">
          <img src="/img/Adminpagelogo.svg" alt="Admin Logo" />
          <span className="font-extrabold text-2xl">Admin</span>
        </div>

        <ul className="space-y-8 flex flex-col gap-3">
          <li className="flex gap-3 bg-slate-200 text-inherit font-medium rounded-lg w-[150px] h-[40px] items-center px-2">
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
          <li className="flex gap-3 font-medium cursor-pointer">
            <img src="/img/Settings.svg" alt="Settings" /> Settings
          </li>

          <hr />

          <li className="flex gap-3 font-medium cursor-pointer">
            <img src="/img/Extras.svg" alt="Extras" /> Extras
          </li>
        </ul>
      </div>

      <div className="flex-1 p-10 bg-slate-200 gap-3">
        <div className="text-sm text-gray-600 flex items-center gap-3">
          <span className="font-medium">Admin</span>
          <img src="/img/Cartarrow.svg" className="ml-2" alt="Cart Arrow" />
          <span className="text-black">Dashboard</span>
        </div>

        <div className="max-w-[1300px] h-[750px] bg-white rounded-lg mt-14">
          <div className="relative overflow-x-auto">
            <div className="flex gap-[750px] mt-7 ml-5 mb-5 items-center">
              <span className="font-bold">Products</span>
              <div className="flex items-center gap-3">
                <button className="bg-black text-white rounded-md text-sm w-[124px] h-[35px]">Add product</button>
                <input
                  type="text"
                  placeholder=" 🔍 Search products"
                  className="border-solid rounded-md border-gray-100 border-2 w-[190px] h-[35px]"
                />
              </div>
            </div>

            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400 border-b border-t">
                <tr>
                  <th scope="col" className="px-11 py-3"> ⇅ </th>
                  <th scope="col" className="px-6 py-3">Name</th>
                  <th scope="col" className="px-6 py-3">SKU </th>
                  <th scope="col" className="px-6 py-3">Price </th>
                  <th scope="col" className="px-6 py-3">Stack </th>
                  <th scope="col" className="px-6 py-3">Categories </th>
                  <th scope="col" className="px-6 py-3">Action </th>
                </tr>
              </thead>

              <tbody>
                <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 border-b border-gray-100">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap dark:text-white">
                    <img src="/img/dashboardT-shirt.svg" alt="T-shirt" />
                  </th>
                  <td className="px-6 py-4">Mens black t-shirt</td>
                  <td className="px-6 py-4">097634</td>
                  <td className="px-6 py-4">$5.00</td>
                  <td className="px-6 py-4">IN-STOCK</td>
                  <td className="px-6 py-4">T-shirt, Raw</td>
                  <td className="px-11 py-4">⋯</td>
                </tr>

                <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 border-b border-gray-100">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap dark:text-white">
                    <img src="/img/dashboardT-shirt.svg" alt="Pink T-shirt" />
                  </th>
                  <td className="px-6 py-4">Pink pony T-shirt</td>
                  <td className="px-6 py-4">825432</td>
                  <td className="px-6 py-4">$30.00</td>
                  <td className="px-6 py-4">IN-STOCK</td>
                  <td className="px-6 py-4">T-shirt, Trend</td>
                  <td className="px-11 py-4">⋯</td>
                </tr>

                <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 border-b border-gray-100">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap dark:text-white">
                    <img src="/img/dashboardT-shirt.svg" alt="Monochromatic T-shirt" />
                  </th>
                  <td className="px-6 py-4">Monochromatic wardrobe</td>
                  <td className="px-6 py-4">8152101</td>
                  <td className="px-6 py-4">$100.00</td>
                  <td className="px-6 py-4">SOLD-OUT</td>
                  <td className="px-6 py-4">T-shirt</td>
                  <td className="px-11 py-4">⋯</td>
                </tr>

                <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 border-b border-gray-100">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap dark:text-white">
                    <img src="/img/dashboardT-shirt.svg" alt="Mockup T-shirt" />
                  </th>
                  <td className="px-6 py-4">Mockup-black</td>
                  <td className="px-6 py-4">091498</td>
                  <td className="px-6 py-4">$15.00</td>
                  <td className="px-6 py-4">IN-STORE</td>
                  <td className="px-6 py-4">T-shirt</td>
                  <td className="px-11 py-4">⋯</td>
                </tr>

                <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 border-b border-gray-100">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap dark:text-white">
                    <img src="/img/dashboardT-shirt.svg" alt="Cozy black T-shirt" />
                  </th>
                  <td className="px-6 py-4">Sleeck and cozy black</td>
                  <td className="px-6 py-4">1780344</td>
                  <td className="px-6 py-4">$64.00</td>
                  <td className="px-6 py-4">IN-STORE</td>
                  <td className="px-6 py-4">T-shirt, man</td>
                  <td className="px-11 py-4">⋯</td>
                </tr>

                <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 border-b border-gray-100">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap dark:text-white">
                    <img src="/img/dashboardT-shirt.svg" alt="Basic Red T-shirt" />
                  </th>
                  <td className="px-6 py-4">Basic Red T-shirt</td>
                  <td className="px-6 py-4">876543</td>
                  <td className="px-6 py-4">$22.00</td>
                  <td className="px-6 py-4">IN-STOCK</td>
                  <td className="px-6 py-4">T-shirt, Trend</td>
                  <td className="px-11 py-4">⋯</td>
                </tr>

                
              </tbody>
            </table>
          </div>

          
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Productsadminpage;
