export default function GetTableInfo(data) {
    let infoStore = null;
    console.log(data+" get table data");
    if (data === 1) {
      infoStore = require("../Data/customers.json");
    } else if (data === 2) {
      infoStore = require("../Data/suppliers.json");
    } else if (data === 3) {
      infoStore = require("../Data/products.json");
    } else if (data === 4) {
      infoStore = require("../Data/select_customer.json");
    }
    else if (data === 5) {
      infoStore = require("../Data/store.json");
    }
    else{
      infoStore="Invalid"
    }
    let tableHeaders = [];
    let tableRows = [];
    let message=null;
    if(infoStore==="Invalid"){
      message="Invalid query please select from the given queries"
    }
    else{
      for (var i = 0; i < infoStore.length; i++) {
        const row = infoStore[i];
        if (i === 0) {
          for (const item in row) {
            tableHeaders.push(row[item]);
          }
        } else {
          let temp = [];
          for (const item in row) {
            temp.push(row[item]);
          }
          tableRows.push(temp);
        }
      }
    
    }
      return { tableHeaders, tableRows,message };
  }
  