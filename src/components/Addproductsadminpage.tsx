

import React, { useState } from 'react';

const Addproductsadminpage = () => {
  const [siteName, setSiteName] = useState('');
  const [supportEmail, setSupportEmail] = useState('');
  const [monthlyOrderGoal, setMonthlyOrderGoal] = useState('');

  const SaveChanges = () => {
    alert("Changes saved!");
    console.log({
      siteName: siteName,
      supportEmail: supportEmail,
      monthlyOrderGoal: monthlyOrderGoal,
    });
  };

  return (
    <div className="max-w-[1600px] bg-gray-100 flex">
      <div className="max-w-[260px] h-[770px] px-10 mt-5">
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
            <img src="/img/Costumers.svg" alt="Costumers" /> Customers
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
        <div className="text-sm text-gray-600 flex items-center gap-3">
          <span className="font-medium">Admin</span>
          <img src="/img/Cartarrow.svg" className="ml-2" alt="Cart Arrow" />
          <span className="text-black">Dashboard</span>
        </div>

        <div className="max-w-[1100px] bg-white rounded-lg mt-14 p-10">
          <h2 className="text-xl font-bold mb-5">Add Product</h2>
          <div className="grid grid-cols-2 gap-10">
          
            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                  value={siteName}
                  onChange={(e) => setSiteName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Price</label>
                <input
                  type="number"
                  className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                  value={supportEmail}
                  onChange={(e) => setSupportEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <input
                  type="text"
                  className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Slug</label>
                <input
                  type="text"
                  className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">SKU</label>
                <input
                  type="text"
                  className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
            </div>

            
            <div>
              <div className="mb-4">
                <div className="block text-sm font-medium text-gray-700">Stock Status</div>
                <input
                  type="text"
                  className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="mb-4">
                <div className="block text-sm font-medium text-gray-700">Available Quantity</div>
                <input
                  type="number"
                  className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="mb-4">
                <div className="block text-sm font-medium text-gray-700">Images</div>
                <input
                  type='file' 
                // აქ სპეისსჰოლდერს ვერ ვსვამმმმმმ აჯაჯაჯ
                  className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                
                />
              </div>
              <div className="mb-4">
                <div className="block text-sm font-medium text-gray-700">Colors</div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                  <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="block text-sm font-medium text-gray-700">Sizes</div>
                <div className="flex gap-2">
                  {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <span
                      key={size}
                      className="px-4 py-1 border border-gray-300 rounded cursor-pointer"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={SaveChanges}
            className="mt-5 px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addproductsadminpage;