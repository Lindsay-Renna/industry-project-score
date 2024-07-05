import { useState } from "react";
import Modal from "./components/Modal/Modal";
import "./App.scss";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import QA from "./components/QA/QA";

function App() {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		 <> 
			<QA />
			<Header setModalOpen={setModalOpen} />
			<div className="homepage">
				<img
					src="/src/assets/score-homepage-cropped.png"
					alt="score home-page"
				/>
			</div>
			<Modal modalOpen={modalOpen} setModalOpen={setModalOpen}></Modal>
		</> 
	);
}

export default App;
