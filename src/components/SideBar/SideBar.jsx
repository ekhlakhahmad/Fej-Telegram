import React from "react";
import { BsSave } from "react-icons/bs";
import { FaAngleDown, FaRegCircleUser, FaUserGroup } from "react-icons/fa6";
import { MdOutlineCall, MdOutlineDarkMode } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";
import logo from "/Fej_Computer_Logo.png";
import { IoSettingsSharp } from "react-icons/io5";

const SideBar = ({ sideBarRef }) => {
	return (
		<div
			ref={sideBarRef}
			className="flex flex-col w-[300px] h-screen bg-[#17212b] text-slate-300 absolute top-0">
			<div className="flex flex-col p-4 gap-3 border-b-[1px] border-slate-900">
				<img className="w-10 cursor-pointer" src={logo} alt="" />
				<div className="flex justify-between items-center">
					<div className="flex flex-col cursor-pointer">
						<h2>Ekhlakh Ahmad</h2>
						<p className="text-sm text-blue-700 hover:underline">
							Set Emoji Status
						</p>
					</div>
					<FaAngleDown className="cursor-pointer" />
				</div>
			</div>
			<div className="flex flex-col cursor-pointer">
				<div className="flex gap-5 items-center w-full px-4 py-2 hover:bg-[#232e3c]">
					<FaUserGroup className="text-xl" />
					<p>New Group</p>
				</div>
				<div className="flex gap-5 items-center w-full px-4 py-2 hover:bg-[#232e3c]">
					<TbSpeakerphone className="text-xl" />
					<p>New Channel</p>
				</div>
				<div className="flex gap-5 items-center w-full px-4 py-2 hover:bg-[#232e3c]">
					<FaRegCircleUser className="text-xl" />
					<p>Contact</p>
				</div>
				<div className="flex gap-5 items-center w-full px-4 py-2 hover:bg-[#232e3c]">
					<MdOutlineCall className="text-xl" />
					<p>Calls</p>
				</div>
				<div className="flex gap-5 items-center w-full px-4 py-2 hover:bg-[#232e3c]">
					<BsSave className="text-xl" />
					<p>Saved Message</p>
				</div>
				<div className="flex gap-5 items-center w-full px-4 py-2 hover:bg-[#232e3c]">
					<IoSettingsSharp className="text-xl" />
					<p>Settings</p>
				</div>
				<div className="flex gap-5 items-center w-full px-4 py-2 hover:bg-[#232e3c]">
					<MdOutlineDarkMode className="text-xl" />
					<p>Night Mode</p>
				</div>
			</div>
			<div className="fixed bottom-0 flex flex-col text-slate-500 p-4">
				<p className="cursor-pointer hover:underline">Telegram Desktop</p>
				<p className="cursor-pointer hover:underline">
					Version 5.0.1 x64 - About
				</p>
			</div>
		</div>
	);
};

export default SideBar;
