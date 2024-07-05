import questions from "../../data/questionBank.json"
import { useState } from "react";
import "./QA.scss"


function QA () {
    const [clicked, setClicked] = useState(false);
    const [index,setIndex] = useState(0)
    const [singleQuestion, setSingleQuestion] = useState(null);

    let numberOfQuestions = Math.floor(Math.random()*5);
    if(numberOfQuestions === 0){
        numberOfQuestions++;
    }
    let questionToDisplay = questions.slice(0,numberOfQuestions);

    function getSingleQuestion (array,index){
        console.log(array.slice(index, index+1));
        setClicked(false);
        console.log(index);
        console.log(array.slice(index, index+1));
        return array.slice(index, index+1);
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
            setSingleQuestion(getSingleQuestion(questionToDisplay,index));
        }
    }

    return (
        <>
            {questionToDisplay.map((item) => {
                return (
                    <section>
                        <h2 className="QA__title">{item.question}</h2>
                        <article className="QA__button-container">
                            <article className="QA__button-container--left">
                                <button className="QA__button" onClick={() => !clicked?clickHandler(item.answer):null}>{item.choice1}</button>
                                <button className="QA__button" onClick={() => !clicked?clickHandler(item.answer):null}>{item.choice2}</button>
                            </article>
                            <article className="QA__button-container--right">
                                <button className="QA__button" onClick={() => !clicked?clickHandler(item.answer):null}>{item.choice3}</button>
                                <button className="QA__button" onClick={() => !clicked?clickHandler(item.answer):null}>{item.choice4}</button>
                            </article>
                        </article>
                    </section>
                )
            })}
        </>
    )
}

export default QA;
