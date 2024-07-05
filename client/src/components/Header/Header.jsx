import NavBar from "../NavBar/NavBar";
import "./Header.scss";

function Header({ setModalOpen }) {
	return (
		<div className="header__container">
			<header className="header">
				<div className="header__wrapper">
					<div className="header__logo">
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
						<img
							className="user-icon"
							src="/src/assets/user-icon.svg"
							alt="score logo"
						/>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Header;
