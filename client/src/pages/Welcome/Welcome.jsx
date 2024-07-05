import "./Welcome.scss";
import Completion from "../Completion/Completion";

const Welcome = ({ setGetStarted, numberOfQuestions }) => {

	return (
		<section className="welcome">
			<div className="main">
				<h2 className="main__text">Today you have {numberOfQuestions} questions to answer!</h2>
				<button className="main__button" onClick={() => setGetStarted(true)}>
					Get Started
				</button>
			</div>
		</section>
	);
};

export default Welcome;
