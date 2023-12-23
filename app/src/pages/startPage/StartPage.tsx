import React from "react";
import {useNavigate} from "react-router-dom";


const StartPage = () => {
  const navigate = useNavigate()
  return (
    <div className='start-page'>
      <h2 className='start-page__header header'>Добрый день!</h2>
      <p className='start-page__text text'>Пройдите небольшой опрос для оценки ваших предпочтений </p>
      <button onClick={() => navigate('/survey')} className='start-page__button button'>Начать</button>
    </div>
  )
}

export default StartPage