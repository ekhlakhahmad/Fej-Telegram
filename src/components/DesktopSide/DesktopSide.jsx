import React from "react";
import { FaBars, FaExchangeAlt, FaRobot } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineFolderOpen } from "react-icons/md";
import { PiChatsTeardropFill } from "react-icons/pi";
import { TbSpeakerphone } from "react-icons/tb";

const DesktopSide = () => {
	return (
		<div className="w-24 h-screen flex flex-col text-2xl items-center gap-8 py-5 px-2 bg-slate-900 text-[#768c9e]">
			<FaBars />
			<PiChatsTeardropFill />
			<TbSpeakerphone />
			<FaUserGroup />
			<FaRobot />
			<MdOutlineFolderOpen />
			<FaExchangeAlt />
		</div>
	);
};

export default DesktopSide;
