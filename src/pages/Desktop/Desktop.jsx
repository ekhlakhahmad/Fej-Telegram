import React, { useState, useEffect, useRef } from "react";
import DesktopSide from "../../components/DesktopSide/DesktopSide";
import SideBar from "../../components/SideBar/SideBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import ChatArea from "../../components/ChatArea/ChatArea";
import { VscChromeMinimize, VscChromeRestore } from "react-icons/vsc";
import { IoClose } from "react-icons/io5";

const Desktop = () => {
	const [isSideBarOpen, setIsSideBarOpen] = useState(false);
	const sideBarRef = useRef(null);
	const [chatId, setChatId] = useState(null);

	const handleChat = (name, status, chat_id) => {
		setChatId({ name: name, status: status, chatId: chat_id });
	};

	const handleSideBarToggle = () => {
		setIsSideBarOpen(!isSideBarOpen);
	};

	const handleClickOutside = (event) => {
		if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
			setIsSideBarOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="flex relative">
			<DesktopSide handleSideBarToggle={handleSideBarToggle} />
			{isSideBarOpen && <SideBar sideBarRef={sideBarRef} />}
			<SearchBar handleChat={handleChat} />
			<ChatArea chatId={chatId} />
		</div>
	);
};

export default Desktop;
