 import React, {useState, useEffect} from 'react';
 import {Loader} from './components/Loader'
 import {SeoulMap} from './components/SeoulMap'
 import LoadCsv from './components/LoadCsv';

 import {Map, TileLayer} from "react-leaflet"

 function App() {
  return (
    <div className="App">
      {/* <Loader/> */}
      <SeoulMap/>
    </div>
  );
}

export default App;
