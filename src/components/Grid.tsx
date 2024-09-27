const Grid = () => {
  return (
    <div className="grid grid-cols-4 gap-6 p-4 max-w-[1116px] mx-auto my-6">
      
      <div>
          <img className="bg-gray-100 p-4 rounded" src="/img/shirt1.png"></img>
          <span className="font-semibold">Classic monochrome Tees</span>
          <div className="flex gap-4"> 
          <span className="border border-gray-300 p-1 rounded-2xl font-medium">IN STOCK</span>
             <span>$45.00</span>
          </div>
      </div>

      <div>
          <img className="bg-gray-100 p-4 rounded" src="/img/shirt2.png"></img>
          <span className="font-semibold">Monochromatic Wardrobes</span>
          <div className="flex gap-4"> 
          <span className="border border-gray-300 p-1 rounded-2xl font-medium">IN STOCK</span>
             <span>$23.00</span>
          </div>
      </div> 

      <div>
          <img className="bg-gray-100 p-4 rounded" src="/img/shirt3.png"></img>
          <span className="font-semibold">Essential neutrals</span>
          <div className="flex gap-4"> 
          <span className="border border-gray-300 p-1 rounded-2xl font-medium">IN STOCK</span>
             <span>$85.00</span>
          </div>
      </div> 

      <div>
          <img className="bg-gray-100 p-4 rounded" src="/img/shirt4.png"></img>
          <span className="font-semibold">URAANET black</span>
          <div className="flex gap-4"> 
              <span className="border border-gray-300 p-1 rounded-2xl font-medium">IN STOCK</span>
             <span>$67.00</span>
          </div>
          
      </div> 

    </div>
  );
};

export default Grid;
