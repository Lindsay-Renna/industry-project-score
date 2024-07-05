import "./App.scss";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
import { Leaderboard } from "./components/Leaderboard/Leaderboard";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";


function App() {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<>
			<Header setModalOpen={setModalOpen} />
			<div className="homepage">
				<img
					src="/src/assets/score-homepage-cropped.png"
					alt="score home-page"
				/>
			</div>
			<Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
				<div>Hello there</div>
				<Leaderboard />
			</Modal>
		</>
	);

}

export default App;
