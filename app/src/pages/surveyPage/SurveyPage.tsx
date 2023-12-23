import React, {useState, useRef} from "react";
import {useNavigate} from "react-router-dom";
import './style.css'

const categoryTranslate = {
  'culture': 'Культура',
  'entertainment': 'Развлечения',
  'food': 'Еда',
}
const categories = {
  'culture': {
    'statues': 'Памятники',
    'nature': 'Сады, парки, скверы',
    'churches': 'Церкви',
    'sites': 'Достопримечательности',
  },
  'entertainment': {
    'theatres': 'Театры',
    'museums': 'Музеи',
    'galleries': 'Галереи',
    'shopping': 'Шопинг',
  },
  'food': {
    'national_cuisine': 'Рестораны национальной кухни',
    'fastfood': 'Фастфуд',
    'cafe': 'Кафе',
    'bars': 'Бары',
  }
} as const;

const StarComponent = ({label, idKey}: { label: string, idKey: string }) => {
  return (
    <div className='survey-page__item'>
      <label className='survey-page__label'>{label}</label>
      <div className="star-rating">
        <input type="radio" name={idKey} id={`star-${idKey}-a`} value="5"/>
        <label htmlFor={`star-${idKey}-a`}></label>

        <input type="radio" name={idKey} id={`star-${idKey}-b`} value="4"/>
        <label htmlFor={`star-${idKey}-b`}></label>

        <input type="radio" name={idKey} id={`star-${idKey}-c`} value="3"/>
        <label htmlFor={`star-${idKey}-c`}></label>

        <input type="radio" name={idKey} id={`star-${idKey}-d`} value="2"/>
        <label htmlFor={`star-${idKey}-d`}></label>

        <input type="radio" name={idKey} id={`star-${idKey}-e`} value="1"/>
        <label htmlFor={`star-${idKey}-e`}></label>
      </div>
    </div>
  )
}


const SurveyPage = ({data, setData}: {data: {[k: string]: any}, setData: React.Dispatch<React.SetStateAction<{}>>}) => {
  const categoryKeys: Array<keyof typeof categories> = Object.keys(categories) as Array<keyof typeof categories>
  const [category, setCategory] = useState(0)
  const [buttonType, setButtonType] = useState('button')
  const [error, setError] = useState(false)
  const currentCategory: keyof typeof categories = categoryKeys[category];
  const navigate = useNavigate();
  const formRef = useRef(null );
  return (
    <div className='survey-page'>
      <h2 className='survey-page__header'>Оцените категории</h2>
      <form ref={formRef} className='survey-page__form' onSubmit={() => {
        const formData = new FormData(formRef.current as unknown as HTMLFormElement);
        const res: {[k: string]: any} = {}
        const formArray = Array.from(formData.entries())
        if (formArray.length !== 4) {
          setError(true)
          return
        }
        setError(false)
        formArray.forEach((el: [string, any]) => {res[el[0]] = Number(el[1])})
        // отправка запрос
        navigate('/map')
      }}>
        <div className='survey-page__block'>
          <h3>{categoryTranslate[currentCategory]}</h3>
          {Object.keys(categories[currentCategory]).map((el) => <StarComponent
            label={categories[currentCategory][el as keyof typeof categories[typeof currentCategory]]} idKey={el} key={el}/>)}

        </div>
        <div className='survey-page__controls'>
          {category !== 0 && <button type='button' onClick={() => setCategory(Math.max(category - 1, 0))}
                                     className='survey-page__button button'>Назад</button>
          }
          <button type={buttonType as 'button' | 'submit'} onClick={() => {
                const formData = new FormData(formRef.current as unknown as HTMLFormElement);
                const res: {[k: string]: any} = {}
                const formArray = Array.from(formData.entries())
                if (formArray.length !== 4) {
                  setError(true)
                  return
                }
                setError(false)
                formArray.forEach((el: [string, any]) => {res[el[0]] = Number(el[1])})
                setData({...data, ...res})
                setCategory(Math.min(category + 1, 2))
                if (category === 2) {
                  setButtonType('submit')
                }
              }
            }
            className='survey-page__button button'> {category !== 2 ? 'Далее' : 'Отправить'}
          </button>
        </div>
      </form>

    </div>
  )
}

export default SurveyPage