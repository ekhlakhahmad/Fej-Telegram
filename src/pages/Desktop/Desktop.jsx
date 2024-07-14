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

	const closeWin = () => {
		window.close();
	};

	const minimizeWin = () => {
		window.minimize();
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
		<div className="flex flex-col">
			<div className="flex justify-end items-center gap-4 px-4 py-1 bg-[#1f2936] text-white">
				<VscChromeMinimize
					onClick={minimizeWin}
					className="hover:bg-slate-500"
				/>
				<VscChromeRestore className="hover:bg-slate-500" />
				<IoClose onClick={closeWin} className="hover:bg-red-800" />
			</div>
			<div className="flex relative">
				<DesktopSide handleSideBarToggle={handleSideBarToggle} />
				{isSideBarOpen && <SideBar sideBarRef={sideBarRef} />}
				<SearchBar />
				<ChatArea />
			</div>
		</div>
	);
};

export default Desktop;
