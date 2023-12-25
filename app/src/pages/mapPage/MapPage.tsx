import React, { useRef, useEffect, useState } from 'react';
import './style.css'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import {Point} from "../../App";
import {useNavigate} from "react-router-dom";


const pointColors = {

  'statues': '#dd2857',
  'nature': '#fffb85',
  'churches': '#768daa',
  'sites': '#33dbcf',

  'theatres': '#6bb08d',
  'museums': '#e9aef2',
  'galleries': '#2326ed',
  'shopping': '#a618bf',

  'national_cuisine': '#22541a',
  'fastfood': '#334b8c',
  'cafe': '#b26603',
  'bars': '#4eb24e',

}


const pointColorsRus = {

  'Памятники': '#dd2857',
  'Сады, парки, скверы': '#008b85',
  'Церкви': '#768daa',
  'Достопримечательности': '#33dbcf',

  'Театры': '#6bb08d',
  'Музеи': '#e9aef2',
  'Галереи': '#2326ed',
  'Шопинг': '#a618bf',

  'Рестораны национальной кухни': '#22541a',
  'Фастфуд': '#334b8c',
  'Кафе': '#b26603',
  'Бары': '#4eb24e',

}

const ChevronDown = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24" fill="none">
      <path d="M6 9L12 15L18 9" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}
const ChevronUp = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24" fill="none">
      <path d="M6 15L12 9L18 15" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}
const MapPage = ({ points, setPoints}: { points: Point[], setPoints: React.Dispatch<React.SetStateAction<Point[]>>}) => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();
  return (
    <div className='map-page'>
      <YMaps query={{apikey: process.env.REACT_APP_API_KEY}} >
        <div>
          <Map width='100%' height='100vh' defaultState={{ center: [55.757916, 37.629853], zoom: 13 }}    modules={
            ['geoObject.addon.balloon', 'geoObject.addon.hint']
          } >
            {points && points.map(el => {
              const coords = el.coords.split(',')
              const properties = {balloonContent: el.address, balloonContentHeader: el.name, balloonContentFooter: el.category}
              return <Placemark geometry={coords} properties={properties} options={{openBalloonOnClick: true, openEmptyBalloon: true, iconColor: pointColorsRus[el.category as keyof typeof pointColorsRus]}}/>
            })}
          </Map>
        </div>
      </YMaps>
      <div className='controls'>
        <button className='button controls__button' onClick={() => navigate('/survey')}>Новые параметры</button>
      </div>
      <div className='route-component' onClick={() => setOpen(!open)}>
        <span className='route-component__before'>{open && <ChevronDown/> }{!open && <ChevronUp/> }</span>
        {open && (
          <div className='route-component__content'>
            {
              points.map(el => (
                <div className='route-component__card'>
                  <h4>{el.name}</h4>
                  <p>{el.category}</p>
                  <p>{el.address}</p>
                </div>
              ))
            }
          </div>)}

      </div>
    </div>
  )
}

export default MapPage