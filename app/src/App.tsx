import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import StartPage from "./pages/startPage/StartPage";
import SurveyPage from "./pages/surveyPage/SurveyPage";
import MapPage from "./pages/mapPage/MapPage";

import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';

export type Point =  {
  "name": string;
  "coords": string;
  "description": string;
  "category": string;
  "address": string;
}

function App() {
  const [data, setData] = useState({})
  const [points, setPoints] = useState([] as Point[])
  const [coordinates, setCoordinates] = useState([1, 1] as [any, any])

  const fetchData = async () => {
    if (Object.keys(data).length == 12) {
      localStorage.setItem('data', JSON.stringify(data))
      const host = process.env.REACT_APP_HOST_NAME
      const params = Object.keys(data).reduce((acc, el) => acc + `${el}=${data[el as keyof typeof data]}&`, '')
      const res = await fetch(host + params)
      const resJson = await res.json()
      setPoints(resJson)
    }
  }
  useEffect(() => {
    const dataLocal = localStorage.getItem('data');

    if (dataLocal) {
      setData(JSON.parse(dataLocal))
    }
  }, []);
  useEffect(() => {
    fetchData()
  }, [data]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartPage/>}/>
          <Route path='/survey' element={<SurveyPage data={data} setData={setData}/>}/>
          <Route path='/map' element={<MapPage points={points} setPoints={setPoints}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
