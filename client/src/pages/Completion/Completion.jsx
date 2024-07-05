import "./Completion.scss";

const Completion = ({ setModalOpen }) => {
	return (
		<section className="completion">
			<div className="main">
				<h3 className="main__text">You have completed today's quiz!</h3>
				<h3 className="main__text">Your current rank is: 120</h3>
				<button
					className="finish-button"
					onClick={() => {
						setModalOpen(false);
					}}
				>
					Close
				</button>
			</div>
		</section>
	);
};

export default Completion;
