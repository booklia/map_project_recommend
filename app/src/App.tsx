import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import StartPage from "./pages/startPage/StartPage";
import SurveyPage from "./pages/surveyPage/SurveyPage";
import MapPage from "./pages/mapPage/MapPage";

import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';

function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartPage/>}/>
          <Route path='/survey' element={<SurveyPage data={data} setData={setData}/>}/>
          <Route path='/map' element={<MapPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
