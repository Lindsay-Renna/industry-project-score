import React, { useState, useEffect } from "react";
import questions from "../../data/questionBank.json";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import "./QA.scss";

function QA() {
  const [clicked, setClicked] = useState(false);
  const [index, setIndex] = useState(0);
  const [questionToDisplay, setQuestionToDisplay] = useState([]);
  const [singleQuestion, setSingleQuestion] = useState({});


  useEffect(() => {
    let numberOfQuestions = Math.floor(Math.random() * 5) + 1; 
    setQuestionToDisplay(questions.slice(0, numberOfQuestions));
    setSingleQuestion(questions[0]);
  }, []);

  const clickHandler = (answer, event) => {
    if (!clicked) {
      setClicked(true);

      if (event.target.innerHTML == answer) {
        event.target.classList.add("QA__button--green");
      } else {
        event.target.classList.add("QA__button--red");
      }

      setTimeout(() => {
        if (index < questionToDisplay.length - 1) {
          setIndex(index + 1);
          setSingleQuestion(questionToDisplay[index + 1]);
          setClicked(false); 
          event.target.classList.remove("QA__button--red");
          event.target.classList.remove("QA__button--green");
        }
      }, 1000); 
    }
  };

  const children = ({ remainingTime }) => {
    const seconds = remainingTime % 60
  
    return `00:${seconds}`
  }
  

  return (
    <section>
        <div className="QA__clock">
            <CountdownCircleTimer
            isPlaying
            duration={30}
            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[7, 5, 2, 0]} >
            {({ remainingTime }) => children({remainingTime})}
            </CountdownCircleTimer>
        </div>
      <h2 className="QA__title">{singleQuestion.question}</h2>
      <article className="QA__button-container">
        <article className="QA__button-container--left">
          <button
            className="QA__button"
            onClick={(event) => clickHandler(singleQuestion.answer, event)}
          >
            {singleQuestion.choice1}
          </button>
          <button
            className="QA__button"
            onClick={(event) => clickHandler(singleQuestion.answer, event)}
          >
            {singleQuestion.choice2}
          </button>
        </article>
        <article className="QA__button-container--right">
          <button
            className="QA__button"
            onClick={(event) => clickHandler(singleQuestion.answer, event)}
          >
            {singleQuestion.choice3}
          </button>
          <button
            className="QA__button"
            onClick={(event) => clickHandler(singleQuestion.answer, event)}
          >
            {singleQuestion.choice4}
          </button>
        </article>
      </article>
    </section>
  );
}

export default QA;









