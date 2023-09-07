import logo from './logo.svg';
import './App.css';
import Editor from './Components/Editor';
import { useEffect, useState } from "react";
import AllQueries from './Components/AllQueries';
import ButtonClick from './Components/ButtonClick';
import Table from './Components/table';

function App() {
  const [value, setValue] = useState("select * from clients;");
  const [error,setError]=useState();
  const [rows, setRows] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [query, setQuery] = useState("");
  const [queryNumber, setQueryNumber] = useState(1);
  const [csvData, setCSVData] = useState([]);




  useEffect(() => {
    if (value.toLowerCase() === "select * from clients;") {
      setQueryNumber(1);
    } else if (value.toLowerCase() === "select * from suppliers;") {
      setQueryNumber(2);
    } else if (value.toLowerCase() === "select * from products;") {
      setQueryNumber(3);
    } else if (value.toLowerCase() ==="select contact_name, address,city,postal_code, country from customers limit 18;") {
      setQueryNumber(4);
    } else {
      setQueryNumber(0);
    }
  }, [value]);


  return (
    <div className="h-[97vh]   flex flex-col items-start justify-end bg-gradient-to-t from-slate-400 ...">
      
        <div className='sm:w-[100%] flex justify-between sm:mb-0 '>
        
        <Table query={query} headers={headers} rows={rows} csvData={csvData} error={error} />
        </div>
      
  <div className='flex sm:flex-row flex-col w-full items-end '>
  <AllQueries setValue={setValue} setQueryNumber={setQueryNumber}/> 
  <div className=' w-full sm:border-0 border-t border-current  '>
    <div className='flex justify-between  sm:py-1 py-1  items-center w-full px-10'>
            <ButtonClick
                setQuery={setQuery}
                setHeaders={setHeaders}
                setRows={setRows}
                setCSVData={setCSVData}
                value={value}
                setValue={setValue}
                setQueryNumber={setQueryNumber}
                queryNumber={queryNumber}
                error={error}
                setError={setError}
              />
        
      </div>
      <Editor value={value} setValue={setValue} />
    </div>
       
    </div>
    
    
    </div>
  );
}

export default App;
