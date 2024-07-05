import "./App.scss";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
import { Leaderboard } from "./components/Leaderboard/Leaderboard";

function App() {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<>
			<div>
				<p className="read-the-docs">
					Click on the Vite and React logos to learn more
				</p>
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
