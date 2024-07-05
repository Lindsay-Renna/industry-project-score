import "./Modal.scss";
import ReactModal from "react-modal";
import { useState, useEffect } from "react";

ReactModal.setAppElement("#root");

function Modal({ modalOpen, setModalOpen, children }) {
	const [scrollTop, setScrollTop] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollTop(window.pageYOffset || document.documentElement.scrollTop);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	if (!modalOpen) return null;

	return (
		<ReactModal
			className="modal"
			overlayClassName="modalOverlay"
			isOpen={modalOpen}
			onRequestClose={() => setModalOpen(false)}
			contentLabel="Delete Confirmation"
			shouldCloseOnOverlayClick={true}
			shouldCloseOnEsc={true}
		>
			<div
				className="modal__closer"
				onClick={() => {
					setModalOpen(false);
				}}
			>
				<img src="/src/assets/icons/close-x.svg" alt="close x" />
			</div>
			<div className="modal__children">{children}</div>
			<div className="modal__buttons">
				<button
					className="cancel-button"
					onClick={() => {
						setModalOpen(false);
					}}
				>
					Cancel
				</button>
			</div>
		</ReactModal>
	);
}

export default Modal;
