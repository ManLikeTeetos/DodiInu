import React from "react";
import Modal from "react-modal";
import "../styles/StakingBody.css";


const customStyle = {
	overlay: {
		background: "transparent",
	},
};


export default function CustomModal({ error, modalIsOpen, closeModal }) {
	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			contentLabel="Example Modal"
			className="modal"
			style={customStyle}
		>
			<div className="modal-body">
				{error && (
					<div className="error-alert">
						<p>{error}</p>
						<button onClick={closeModal}>Close</button>
					</div>
				)}
				<div className="modal-inner">
					<span className="modal-text">{error}</span>
				</div>
			</div>
		</Modal>
	);
}