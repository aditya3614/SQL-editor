import React from "react";

function AllQueries({ setQueryNumber, setValue }) {
  const qureyValue = [
    {
      query: "select * from clients;",
      default: 1,
    },
    {
      query:
        "select contact_name, address,city,postal_code, country from customers limit 18;",
      default: 4,
    },
    {
      query: "select * from products;",
      default: 3,
    },
    {
      query: "select * from suppliers;",
      default: 2,
    },
  ];
  return (
    <div className="sm:w-[20%] sm:border-r  sm:border-t-0 border-t border-current"> 
  
      
      <div className="sm:p-4 p-4">
        <div className="flex justify-center items-center">
          <p className="text-black rounded-lg text-lg px-5 py-2.5 text-center font-semibold">Available Queries</p>
        </div>

        <div className="h-40 lg:h-52 overflow-auto scrollbar-hide  lg:mb-0">
          {qureyValue.map((item, index) => (
            <p
              key={index}
              className="cursor-pointer text-white  bg-zinc-800 hover:bg-gray-400 font-mono hover:text-white p-2 text-center text-sm rounded-lg my-4"
              onClick={() => {
                setQueryNumber(`${item.default}`);
                console.log(item.default+"  allqueries called");
                setValue(`${item.query}`);
              }}
            >
              {item.query}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllQueries;
