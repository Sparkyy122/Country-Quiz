import React, { useState } from 'react'
import Question from './Question'
import Answers from './Answers'

const Main = ({country}) => {
const [questionNumber, setQuestionNumber] = useState(1);
  return (
    <div className='main'>
      <p>Country Quiz</p>
       <div className='Numbers'> {country.map((_,index)=> <div className={`questionNumbers ${questionNumber === index+1 ? "active" : "not-active" }`}><span>{index+1}</span></div>)}</div>
        {/* {country.map((countryData)=> <img src={countryData.flag}/>)} */}
        <Question country={country} questionNumber={questionNumber}/>
        <Answers country={country} setQuestionNumber={setQuestionNumber} questionNumber={questionNumber}/>
    </div>
  )
}

export default Main