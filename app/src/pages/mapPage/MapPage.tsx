import React, { useRef, useEffect, useState } from 'react';
import './style.css'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const points = [
  {
    "name": "Музей археологии Москвы",
    "coords": "55.75632,37.617132",
    "description": "мать жива?",
    "category": "Музеи",
    "address": " Манежная площадь, 1А, Москва"
  },
  {
    "name": "Музей Отечественной войны 1812 года",
    "coords": "55.756305,37.61865",
    "description": "мать жива?",
    "category": "Музеи",
    "address": "площадь Революции, 2/3, Москва"
  },
  {
    "name": "Музей Оружейный подвал",
    "coords": "55.756842,37.62175",
    "description": "мать жива?",
    "category": "Музеи",
    "address": "Никольская ул., 11-13с1, Москва"
  },
  {
    "name": "Музей уникальных кукол",
    "coords": "55.759334,37.644486",
    "description": "мать жива?",
    "category": "Музеи",
    "address": "ул. Покровка, 13, стр. 2, Москва"
  },
  {
    "name": "Мемориальный музей-квартира художника А.М. Васнецова",
    "coords": "55.763741,37.648546",
    "description": "мать жива?",
    "category": "Музеи",
    "address": "Фурманный переулок, 6, Москва"
  },
  {
    "name": "Иннопарк",
    "coords": "55.760135,37.624957",
    "description": "мать жива?",
    "category": "Музеи",
    "address": "Театральный пр., 5, стр. 1, Москва"
  },
  {
    "name": "Музей МАРХИ",
    "coords": "55.763022,37.622558",
    "description": "мать жива?",
    "category": "Музеи",
    "address": "ул. Рождественка, 11, стр. 2, Москва"
  },
  {
    "name": "Музей уникальных кукол",
    "coords": "55.759334,37.644486",
    "description": "мать жива?",
    "category": "Музеи",
    "address": "ул. Покровка, 13, стр. 2, Москва"
  },
  {
    "name": "Музей скорой помощи",
    "coords": "55.773697,37.637407",
    "description": "мать жива?",
    "category": "Музеи",
    "address": "1-й Коптельский пер., 3, стр. 1, Москва"
  },
  {
    "name": "Музей нонконформизма",
    "coords": "55.76331,37.635925",
    "description": "мать жива?",
    "category": "Музеи",
    "address": "Мясницкая ул., вл24/7с2, Москва"
  },
  {
    "name": "Стела в память Сухаревой башни",
    "coords": "55.772299,37.634317",
    "description": "мать жива?",
    "category": "Памятники",
    "address": "Большая Сухаревская площадь, Москва"
  },
  {
    "name": "Памятник В. Г. Шухову",
    "coords": "55.766157,37.634739",
    "description": "мать жива?",
    "category": "Памятники",
    "address": "Москва, Сретенский бульвар, Москва"
  },
  {
    "name": "Атом Солнца о. Табакова",
    "coords": "55.773575,37.62952",
    "description": "мать жива?",
    "category": "Памятники",
    "address": "Малая Сухаревская площадь, 3, Москва"
  },
  {
    "name": "Памятник А. С. Грибоедову",
    "coords": "55.762637,37.642025",
    "description": "мать жива?",
    "category": "Памятники",
    "address": "Чистопрудный бульвар, Москва"
  },
  {
    "name": "Памятник С.Я. Маршаку",
    "coords": "55.759947,37.652804",
    "description": "мать жива?",
    "category": "Памятники",
    "address": "Малый Казённый пер., 2, Москва"
  },
  {
    "name": "Девушка кормит голубей",
    "coords": "55.763812,37.63517",
    "description": "мать жива?",
    "category": "Памятники",
    "address": "Мясницкая ул., 17, стр. 3, Москва"
  },
  {
    "name": "Памятник В. В. Воровскому",
    "coords": "55.762004,37.626448",
    "description": "мать жива?",
    "category": "Памятники",
    "address": "ул. Кузнецкий Мост, 21/5, Москва"
  },
  {
    "name": "Памятник Н.К. Крупской",
    "coords": "55.766610,37.632024",
    "description": "мать жива?",
    "category": "Памятники",
    "address": "Москва, Сретенский бульвар"
  },
  {
    "name": "Памятник советской семье",
    "coords": "55.769013,37.629313",
    "description": "мать жива?",
    "category": "Памятники",
    "address": "Пушкарёв пер., 15, Москва"
  },
  {
    "name": "Памятник А. П. Чехову",
    "coords": "55.759395,37.612964",
    "description": "мать жива?",
    "category": "Памятники",
    "address": "Камергерский пер., 2, Москва"
  },
  {
    "name": "Зарядье",
    "coords": "55.75167,37.629053",
    "description": "мать жива?",
    "category": "Сады, парки, скверы",
    "address": "ул. Варварка, 6, стр. 1, Москва"
  },
  {
    "name": "Парк Горка",
    "coords": "55.756437,37.635197",
    "description": "мать жива?",
    "category": "Сады, парки, скверы",
    "address": "Большой Спасоглинищевский пер., 3, стр. 5, Москва"
  },
  {
    "name": "Чистые пруды",
    "coords": "55.762637,37.642025",
    "description": "мать жива?",
    "category": "Сады, парки, скверы",
    "address": "Чистопрудный бульвар, Москва"
  },
  {
    "name": "Сквер Полководцев",
    "coords": "55.761269,37.640911",
    "description": "мать жива?",
    "category": "Сады, парки, скверы",
    "address": "Потаповский переулок, Москва"
  },
  {
    "name": "Музейный парк",
    "coords": "55.758954,37.627822",
    "description": "мать жива?",
    "category": "Сады, парки, скверы",
    "address": "Музейный парк, Москва"
  },
  {
    "name": "Анин сад",
    "coords": "55.762242,37.640165",
    "description": "мать жива?",
    "category": "Сады, парки, скверы",
    "address": "Потаповский пер., 3, стр. 1, Москва"
  },
  {
    "name": "Лермонтовский сквер",
    "coords": "55.769504,37.651565",
    "description": "мать жива?",
    "category": "Сады, парки, скверы",
    "address": "Лермонтовская площадь, Москва"
  },
  {
    "name": "Сквер Мандельштама",
    "coords": "55.755115,37.638566",
    "description": "мать жива?",
    "category": "Сады, парки, скверы",
    "address": "ул. Забелина, 3, стр. 7"
  },
  {
    "name": "Сад культуры и отдыха имени Н.Э. Баумана",
    "coords": "55.767261,37.659578",
    "description": "мать жива?",
    "category": "Сады, парки, скверы",
    "address": "сад культуры и отдыха имени Н.Э. Баумана, Москва"
  },
  {
    "name": "Цветной бульвар",
    "coords": "55.770471,37.622199",
    "description": "мать жива?",
    "category": "Сады, парки, скверы",
    "address": "Цветной бульвар, Москва"
  },
  {
    "name": "Галерея современного искусства Чиж",
    "coords": "55.760905,37.622881",
    "description": "мать жива?",
    "category": "Галереи",
    "address": "Пушечная улица, 7/5с2, Москва"
  },
  {
    "name": "Галерея на Чистых прудах",
    "coords": "55.763726,37.642366",
    "description": "мать жива?",
    "category": "Галереи",
    "address": "Гусятников переулок, 10, Москва"
  },
  {
    "name": "Sistema Gallery",
    "coords": "55.764931,37.634012",
    "description": "мать жива?",
    "category": "Галереи",
    "address": "Бобров переулок, 4с4, Москва"
  },
  {
    "name": "Dc Gallery",
    "coords": "55.766592,37.649013",
    "description": "мать жива?",
    "category": "Галереи",
    "address": "Хоромный тупик, 6, Москва"
  },
  {
    "name": "Любовь24",
    "coords": "55.762363,37.645393",
    "description": "мать жива?",
    "category": "Галереи",
    "address": "Чистопрудный бул., 15, стр. 2, Москва"
  },
  {
    "name": "ВХУТЕМАС",
    "coords": "55.763614,37.622351",
    "description": "мать жива?",
    "category": "Галереи",
    "address": "ул. Рождественка, 11/4к1с4, Москва"
  },
  {
    "name": "Vladey",
    "coords": "55.764273,37.620393",
    "description": "мать жива?",
    "category": "Галереи",
    "address": "Неглинная ул., 14, стр. 1А, Москва"
  },
  {
    "name": "Галерея",
    "coords": "55.768122,37.629089",
    "description": "мать жива?",
    "category": "Галереи",
    "address": "Колокольников пер., 17, Москва"
  },
]

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
const MapPage = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='map-page'>
      <YMaps query={{apikey: process.env.REACT_APP_API_KEY}} >
        <div>
          <Map width='100%' height='100vh' defaultState={{ center: [55.757916, 37.629853], zoom: 13 }}    modules={
            ['geoObject.addon.balloon', 'geoObject.addon.hint']
          } >
            {points.map(el => {
              const coords = el.coords.split(',')
              const properties = {balloonContent: el.address, balloonContentHeader: el.name, balloonContentFooter: el.category}
              return <Placemark geometry={coords} properties={properties} options={{openBalloonOnClick: true, openEmptyBalloon: true, iconColor: pointColorsRus[el.category as keyof typeof pointColorsRus]}}/>
            })}
          </Map>
        </div>
      </YMaps>
      <div className='route-component' onClick={() => setOpen(!open)}>
        <span className='route-component__before'>{open && <ChevronDown/> }{!open && <ChevronUp/> }</span>
        {open && (
          <div className='route-component__content'>
            {
              points.map(el => (
                <div>
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