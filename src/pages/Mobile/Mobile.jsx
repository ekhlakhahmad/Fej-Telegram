import React, { useState } from "react";
import Header from "../../components/Header/Header";
import SideHeading from "../../components/SideHeading/SideHeading";
import SearchBar from "../../components/SearchBar/SearchBar";
import ChatArea from "../../components/ChatArea/ChatArea";

const Mobile = () => {
	const [chatId, setChatId] = useState(null);
	const [isMessageWindowOpen, setIsMessageWindowOpen] = useState(false);
	const [showOverlay, setShowOverlay] = useState(false);

	const handleChat = (name, status, chat_id) => {
		setChatId({ name: name, status: status, chatId: chat_id });
		setIsMessageWindowOpen(true);
	};

	const handleBack = () => {
		setIsMessageWindowOpen(false);
	};

	const handleClickOverlay = () => {
		setIsMessageWindowOpen(false);
		setShowOverlay(false);
	};

	return (
		<div>
			{/* <SideHeading setShowSidebar={setShowOverlay} /> */}
			{!isMessageWindowOpen && <Header setShowOverlay={setShowOverlay} />}
			{!isMessageWindowOpen && <SearchBar handleChat={handleChat} />}
			{isMessageWindowOpen && (
				<ChatArea chatId={chatId} handleBack={handleBack} />
			)}
			{showOverlay && (
				<div
					className="fixed top-0 left-0 w-screen h-screen  bg-transparent opacity-50 z-50"
					onClick={handleClickOverlay}
				/>
			)}
		</div>
	);
};

export default Mobile;
