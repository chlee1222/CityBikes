// import React, { useState, useEffect } from 'react';
// import bikeData from '../bikeusage.csv'
// import Papa from 'papaparse';


// export default function LoadCsv() {
//     useEffect(()=>{
//         parseFile(bikeData);
//     }, [])

//     const [parsedCsvData, setParsedCsvData] = useState([]);

//     // Parse CSV File
//     const parseFile = csvFile => {
//         Papa.parse(csvFile, {
//           download: true,
//           complete: results => {
//             setParsedCsvData(results.data)
//             console.log(parsedCsvData[0][1])
//           },
//         });
//       };

//     return (
//     <div>
//         {/* {parsedCsvData} */}
//     </div>
//   )
// }
