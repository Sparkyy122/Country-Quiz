import React from "react";

const Answers = ({ country, setQuestionNumber, questionNumber }) => {

  const correctAnswer = country[questionNumber];
  
  function handleClick(answer) {
    if (answer === correctAnswer) {
      alert("Correct!");
      setQuestionNumber(prevQuestionNumber => prevQuestionNumber + 1);
    } else {
      alert("Wrong! Try again.");
    }
  

  }

  const generateRandomAnswers = () => {

    let countriesCopy = [...country];
    countriesCopy.splice(questionNumber, 1); 
  
    for (let i = countriesCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [countriesCopy[i], countriesCopy[j]] = [countriesCopy[j], countriesCopy[i]];
    }
  

    const insertIndex = Math.floor(Math.random() * 4);
    countriesCopy.splice(insertIndex, 0, country[questionNumber]);
  
    return countriesCopy.slice(0, 4); 
  };
  
  const answersArray = generateRandomAnswers();
  
  return (
    <div className="Answers">
      {answersArray.map((answer, index) => (
        <button 
          key={index} 
          onClick={() => handleClick(answer)}
        >
          {answer.name}
        </button>
      ))}
    </div>
  );
};

export default Answers;
