import React, { useState, useEffect } from "react";
import questions from "../../data/questionBank.json";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./QA.scss";
import { useTypewriter } from "../hooks/useTypewriter";

function QA({
  setIsFinished,
  numberOfQuestions
}) {
  const [clicked, setClicked] = useState(false);
  const [index, setIndex] = useState(0);
  const [questionToDisplay, setQuestionToDisplay] = useState([]);
  const [singleQuestion, setSingleQuestion] = useState({});
  const [key, setKey] = useState(0); 
  const [isAnswered, setIsAnswered] = useState(false);

  
  useEffect(() => {
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
        } else {
          setIsFinished(true);

        }
      }, 1000);

      setKey(prevKey => prevKey + 1);
    }
  };

  const formatTime = (time) => {
    const seconds = time % 60;
    return `00:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
  };

  return (
    <section className="QA">
      <div className="QA__clock">
        <CountdownCircleTimer
          size={100}
          key={key} 
          isPlaying
          duration={20}
          colors={["#006dff", "#Ffbf00", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
        >
          {({ remainingTime }) => formatTime(remainingTime)}
        </CountdownCircleTimer>
      </div>
      <h2 className="QA__title">{useTypewriter(singleQuestion.question)}</h2>

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
