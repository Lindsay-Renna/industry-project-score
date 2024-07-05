import questions from "../../data/questionBank.json"
import "./QA.scss"

function QA () {
    let numberOfQuestions = Math.floor(Math.random()*5);
    if(numberOfQuestions === 0){
        numberOfQuestions++;
    }
    let questionToDisplay = questions.slice(0,numberOfQuestions);
    
    return (
        <>
            {questionToDisplay.map((item) => {
                return (
                    <>
                  <h2 className="QA__title">{item.question}</h2>
                  {item.choices.map((element) => {
                    return(
                        <button className="QA__button" key={element.id}>{element.choice}</button>
                    )
                  })}
                  </>
                )
            })}
        </>
    )
}

export default QA;
