import React from "react";
import { CSVLink } from "react-csv";
import {FaCloudDownloadAlt} from 'react-icons/fa'
import TableUI from "./TableUI";

function Table({ query, headers, rows, csvData,error }) {
  return (
    <div className="sm:w-full w-[100vw]  ">
      {query && error!="invalid" ? (
        <section className="text-gray-600  body-font sm:pl-4 sm:pr-4">
          <div className="flex w-full justify-between  mt-5 lg:mt-0">
            
            <CSVLink
              data={csvData}
              filename={new Date().getTime().toString() + ".csv"}
              className="p-2"
            >
              <button className=" mx-auto flex justify-center sm:mb-0 mb-8 text-white border-0 sm:h-11  bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center sm:inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 ">
               <FaCloudDownloadAlt></FaCloudDownloadAlt>
                <span className="pl-2 font-semibold">Download File</span>
              </button>
            </CSVLink>
          </div>
          <TableUI headers={headers} rows={rows} />
        </section>
      ) : (
        <div className="w-full flex text-center h-80 justify-center items-center font-bold font-mono text-gray-400 text-2xl px-6">
          Run Valid Query
        </div>
      )}
    </div>
  );
}

export default Table;
