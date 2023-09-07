import React from "react";



function TableUI({ headers, rows }) {
  return (
    <div className="sm:w-full  sm:border-2 border-current sm:border-t  border-t h-56 overflow-auto scrollbar-hide ">
      <table className="table-auto sm:w-[70%] text-left ">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="sm:px-4 border-l-2 border-current sm:py-3 title-font tracking-wider font-medium text-white text-sm bg-slate-700 rounded-tl rounded-bl"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row_value, index) => (
            <tr key={index}>
              {row_value.map((cell_value, index) => (
                <td
                  key={index}
                  className="border-t-2 border-l-2 border-current bg-slate-950 text-white  sm:px-4 sm:py-2 text-sm"
                >
                  {cell_value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableUI;
