function Modal({ handleShowModal }) {
	return (
		<div
			className="fixed inset-0 z-40 flex items-center justify-center w-100 min-h-screen"
			onClick={handleShowModal}>
			<div className="fixed inset-0 bg-black opacity-30"></div>
			<div className="bg-white items-center justify-center p-0 md:p-6 z-10">
				<div
					className="pb-56 md:w-100 md:pb-56 relative z-50"
					style={{ width: "700px", height: "500px" }}>
					<div className="absolute w-full h-full">
						<iframe
							width="100%"
							height="100%"
							src="https://www.youtube.com/embed/s5nP7MDf63Y"
							title="YouTube video player"
							frameBorder="0"
							allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen></iframe>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Modal;
