import React, { useState } from "react";
import Header from "../../components/Header/Header";
import SideHeading from "../../components/SideHeading/SideHeading";
import SearchBar from "../../components/SearchBar/SearchBar";
import ChatArea from "../../components/ChatArea/ChatArea";

const Mobile = () => {
	const [chatId, setChatId] = useState(null);
	const [ismessagewindow, setIsMessageWindows] = useState(false);

	const handleChat = (name, status, chat_id) => {
		setIsMessageWindows(!ismessagewindow);

		setChatId({ name: name, status: status, chatId: chat_id });
	};
	const handleBack = () => {
		setIsMessageWindows(false);
	};

	return (
		<div>
			
			<SideHeading />
			{!ismessagewindow && <Header />  }

			{!ismessagewindow && <SearchBar handleChat={handleChat} />}
			{ismessagewindow && <ChatArea chatId={chatId} handleBack={handleBack} />}
		</div>
	);
};

export default Mobile;
