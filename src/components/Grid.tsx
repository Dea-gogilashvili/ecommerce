// const Grid = ({ apiData }: any) => {
//   console.log(apiData);

//   return (
//     <div className="grid grid-cols-4 gap-6 p-4 max-w-[1200px] mx-auto mb-40 ">
//       {apiData.map((product: any, key: any) => (
//         <div>
//           <img className="bg-gray-100 p-4 rounded" src={product.image}></img>
//           <span className="font-semibold">{product.title}</span>
//           <div className="flex items-center gap-4">
//             <span className="border border-gray-300 p-1 rounded-2xl font-medium">
//               IN STOCK
//             </span>
//             <span>$45.00</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Grid;


const Grid = ({ apiData }: any) => {
  console.log(apiData);

  return (
    <div className="grid grid-cols-4 gap-6 p-4 max-w-[1200px] mx-auto mb-40">
      {apiData.map((product: any, key: any) => (
        <div
          key={key}
          className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
        >
          
          <img
            className="h-48 w-48 object-contain mb-4"
            src={product.image}
            alt={product.title}
          />
          
          
          <span className="font-semibold text-center mb-2">{product.title}</span>
          
          
          <div className="flex items-center gap-4">
            <span className="border border-gray-300 px-3 py-1 rounded-2xl font-medium text-sm">
              IN STOCK
            </span>
            <span className="text-lg font-bold">$45.00</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
