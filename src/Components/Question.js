import React from 'react'

const Question = ({questionNumber,country}) => {
  return (
    <><h2>Which Country Flag <img src={country[questionNumber].flag} alt={country[questionNumber].name} height='20px'/> is This?</h2></>
  )
}

export default Question