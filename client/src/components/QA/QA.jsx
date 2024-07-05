import React, { useState, useEffect } from "react";
import questions from "../../data/questionBank.json";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./QA.scss";

function QA() {
  const [clicked, setClicked] = useState(false);
  const [index, setIndex] = useState(0);
  const [questionToDisplay, setQuestionToDisplay] = useState([]);
  const [singleQuestion, setSingleQuestion] = useState({});
  const [remainingTime, setRemainingTime] = useState(0);
  const [scores, setScores] = useState([]);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    let numberOfQuestions = Math.floor(Math.random() * 5) + 1;
    const selectedQuestions = questions.slice(0, numberOfQuestions);
    setQuestionToDisplay(selectedQuestions);
    setSingleQuestion(selectedQuestions[0]);
  }, []);

  const clickHandler = (answer, event) => {
    if (!clicked) {
      setClicked(true);

      const isCorrect = event.target.innerHTML === answer;
      const points = isCorrect ? remainingTime : 0;
      setScores([...scores, points]);

      if (isCorrect) {
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
          const finalScore = scores.reduce((acc, score) => acc + score, points);
          setTotalScore(finalScore);
          console.log("Total Score:", finalScore);
        }
      }, 1000);
    }
  };

  const children = ({ remainingTime }) => {
    setRemainingTime(remainingTime);
    const seconds = remainingTime % 60;
    return `00:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <section>
      <div className="QA__clock">
        <CountdownCircleTimer
          isPlaying
          key={index}
          duration={30}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
          onComplete={() => {
            setClicked(true);
            setScores([...scores, 0]);

            if (index < questionToDisplay.length - 1) {
              setIndex(index + 1);
              setSingleQuestion(questionToDisplay[index + 1]);
              setClicked(false);
            } else {
              const finalScore = scores.reduce((acc, score) => acc + score, 0);
              setTotalScore(finalScore);
              console.log("Total Score:", finalScore);
            }
          }}
        >
          {({ remainingTime }) => children({ remainingTime })}
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
      {index === questionToDisplay.length && (
        <div className="QA__final-score">
          <h2>Total Score: {totalScore}</h2>
        </div>
      )}
    </section>
  );
}

export default QA;
