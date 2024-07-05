import NavBar from "../NavBar/NavBar";
import "./Header.scss";

function Header({ setModalOpen }) {
	return (
		<header>
			<div className="logo">
				<img src="/src/assets/icons/Score-logo.svg" alt="score logo" />
			</div>
			<NavBar />
			<div className="header__buttons">
				<button
					className="header__button header__button--yellow"
					onClick={() => {
						setModalOpen(true);
					}}
				>
					<span>Trivia Game</span>
				</button>
				<button className="header__button">
					<span>Download the App</span>
				</button>
			</div>
		</header>
	);
}

export default Header;
