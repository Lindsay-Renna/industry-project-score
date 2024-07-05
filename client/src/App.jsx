import "./App.scss";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
import { Leaderboard } from "./components/Leaderboard/Leaderboard";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Welcome from "./pages/Welcome/Welcome";
import Completion from "./pages/Completion/Completion";

import rightArrow from "./assets/right-arrow.svg";
import leftArrow from "./assets/left-arrow.svg";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(true);


  const toggleLeaderboard = () => {
    setShowLeaderboard((prev) => !prev);
  };


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
        <section className="modal-children">
          <div
            className={`main-content ${showLeaderboard ? "" : "full-width"}`}
          >
            <Welcome />
          </div>
          {showLeaderboard && (
            <aside className="leaderboard-section">
              <Leaderboard />
            </aside>
          )}
          <button
            onClick={toggleLeaderboard}
            className="toggle-leaderboard-button"
          >
            <img
              src={showLeaderboard ? rightArrow : leftArrow}
              alt="Double Arrow"
              height="20"
              width="20"
            />
          </button>
        </section>
      </Modal>
    </>
  );
}

export default App;
