import questions from "../../data/questionBank.json"
import { useState } from "react";
import "./QA.scss"


function QA () {
    const [clicked, setClicked] = useState(false);
    const [index,setIndex] = useState(0)

    let numberOfQuestions = Math.floor(Math.random()*5);
    if(numberOfQuestions === 0){
        numberOfQuestions++;
    }
    let questionToDisplay = questions.slice(0,numberOfQuestions);
    const [singleQuestion, setSingleQuestion] = useState(questionToDisplay[0]);

    function getSingleQuestion (array,index){
        setClicked(false);
        console.log(singleQuestion);
        setSingleQuestion(array.slice(index, index+1));
        return true;
    }

    const clickHandler = (answer) => {
        setClicked(true);
        let btnValue = event.target.innerHTML;
        console.log(btnValue == answer)
        if (btnValue == answer){
            event.target.classList.add("QA__button--green")
        }else{
            event.target.classList.add("QA__button--red")
        }
        if(index < questionToDisplay.length){
            setIndex(index+1);
            getSingleQuestion(questionToDisplay,index);
        }
    }

    return (
        <>
            <section>
                <h2 className="QA__title">{singleQuestion.question}</h2>
                <article className="QA__button-container">
                    <article className="QA__button-container--left">
                        <button className="QA__button" onClick={() => !clicked?clickHandler(singleQuestion.answer):null}>{singleQuestion.choice1}</button>
                        <button className="QA__button" onClick={() => !clicked?clickHandler(singleQuestion.answer):null}>{singleQuestion.choice2}</button>
                    </article>
                    <article className="QA__button-container--right">
                        <button className="QA__button" onClick={() => !clicked?clickHandler(singleQuestion.answer):null}>{singleQuestion.choice3}</button>
                        <button className="QA__button" onClick={() => !clicked?clickHandler(singleQuestion.answer):null}>{singleQuestion.choice4}</button>
                    </article>
                </article>
            </section>

        </>
    )
}

export default QA;
