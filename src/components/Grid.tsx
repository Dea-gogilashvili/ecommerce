const Grid = ({ apiData }: any) => {
  console.log(apiData);

  return (
    <div className="grid grid-cols-4 gap-6 p-4 max-w-[1200px] mx-auto mb-40">
      {apiData.map((product: any, key: any) => (
        <div>
          <img className="bg-gray-100 p-4 rounded" src={product.image}></img>
          <span className="font-semibold">{product.title}</span>
          <div className="flex items-center gap-4">
            <span className="border border-gray-300 p-1 rounded-2xl font-medium">
              IN STOCK
            </span>
            <span>$45.00</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
