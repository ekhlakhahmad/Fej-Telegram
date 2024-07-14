import React from "react";
import DesktopSide from "../../components/DesktopSide/DesktopSide";
import SearchBar from "../../components/SearchBar/SearchBar";
import ChatArea from "../../components/ChatArea/ChatArea";
import { VscChromeMinimize, VscChromeRestore } from "react-icons/vsc";
import { IoClose } from "react-icons/io5";

const Desktop = () => {
	const closeWin = () => {
		window.close();
	};

	const minimizeWin = () => {
		window.minimize();
	};

	return (
		<div className="flex flex-col ">
			<div className="flex justify-end items-center gap-4 px-4 py-1 bg-[#1f2936] text-white">
				<VscChromeMinimize onClick={minimizeWin} className="hover:bg-slate-500" />
				<VscChromeRestore className="hover:bg-slate-500" />
				<IoClose onClick={closeWin} className="hover:bg-red-800" />
			</div>
			<div className="flex">
				<DesktopSide />
				<SearchBar />
				<ChatArea />
			</div>
		</div>
	);
};

export default Desktop;
