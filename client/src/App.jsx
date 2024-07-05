import { useState } from "react";
import Modal from "./components/Modal/Modal";
import "./App.scss";
import Header from "./components/Header/Header";

function App() {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<>
			<Header />
			<div className="homepage">
				<img
					src="/src/assets/score-homepage-cropped.png"
					alt="score home-page"
				/>
				<button
					onClick={() => {
						setModalOpen(true);
					}}
				>
					Open Modal
				</button>
			</div>
			<Modal modalOpen={modalOpen} setModalOpen={setModalOpen}></Modal>
		</>
	);
}

export default App;
