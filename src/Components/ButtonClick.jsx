import React from "react";
// import toast from "react-hot-toast";

import GetTableInfo from './GetTableInfo'
import {IoIosRefresh} from 'react-icons/io'

function Buttons({
  setCSVData,
  setQuery,
  setValue,
  setHeaders,
  setRows,
  setQueryNumber,
  queryNumber,
  value,
  
  setError,
}) {
  const runQuery = () => {
    setQuery(value);
    console.log("Button called")
    const { tableHeaders, tableRows,message } = GetTableInfo(queryNumber);
    const temp = [];
    if(message==null){
      setHeaders(tableHeaders);
      setRows(tableRows);
      
      if (tableHeaders.length > 0 && tableRows.length > 0) {
        temp.push(tableHeaders);
        tableRows.forEach((row) => {
          temp.push(row);
        });
        setCSVData(temp);
        if (temp.length > 0) {
        //  toast.success("Query run");
        } else {
        reset();
        }
      }
      setError("");
    }else{
     setError("invalid");
    }
    
  };

  const reset = () => {
    // function to reset the editor
    setQuery("");
    setValue("select * from clients;");
    setQueryNumber(1);
    setHeaders([]);
    setRows([]);
    setCSVData([]);
  };
  return (
    <div className="flex justify-between  w-full">
      <div className="p-2">
        <button
          onClick={reset}
          className="
           mx-auto text-white gap-3 bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2"
        > 
          <span className="to-white">
          <IoIosRefresh size={17} color="white"></IoIosRefresh>
          </span>
          Refresh
        </button>
      </div>
      <div className="p-2">
        <button
          onClick={runQuery}
          className="mx-auto text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2"
        >
          <div className="pr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="21"
              viewBox="0 0 31.499 36.001"
              className="fill-current"
            >
              <path
                id="Icon_awesome-play"
                data-name="Icon awesome-play"
                d="M29.841,15.1,5.091.464A3.356,3.356,0,0,0,0,3.368V32.625a3.372,3.372,0,0,0,5.091,2.9L29.841,20.9a3.372,3.372,0,0,0,0-5.808Z"
                transform="translate(0 -0.002)"
              />
            </svg>
          </div>
          <div className="">Run Query</div>
        </button>
      </div>
    </div>
  );
}

export default Buttons;
