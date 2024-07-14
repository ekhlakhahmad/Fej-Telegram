import React, { useEffect } from "react";
import logo from "/Fej_Computer_Logo.png";
import { IoIosArrowDown, IoMdCall } from "react-icons/io";
import { HiOutlineUserCircle } from "react-icons/hi";
import { TbDownload, TbUsers } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { PiPersonSimpleCircleBold } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";
import { FaRegQuestionCircle, FaUserPlus } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";

const SideHeading = ({ showSidebar, setShowSidebar }) => {
	const sidebarRef = React.useRef(null);

	// Function to handle click outside of sidebar
	const handleClickOutside = (event) => {
		if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
			setShowSidebar(false);
		}
	};

	// Effect to add/remove event listener based on sidebar visibility
	useEffect(() => {
		if (showSidebar) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [showSidebar]);

	return (
		<div
			ref={sidebarRef}
			className={`flex flex-col w-[300px] h-screen bg-[#17212b] text-slate-300 absolute top-0 left-0 z-50 ${
				showSidebar ? "" : "hidden"
			}`}>
			<div className="flex justify-between items-center p-4 gap-3">
				<img className="w-10" src={logo} alt="Logo" />
				<MdOutlineLightMode className="text-xl" />
			</div>
			<div className="flex justify-between items-center px-2 border-b-[1px] border-slate-900">
				<div className="flex flex-col p-2">
					<h1>Ekhlakh Ahmad</h1>
					<p className="text-xs">+91 9576650491</p>
				</div>
				<IoIosArrowDown className="text-xl" />
			</div>
			<div>
				<div className="flex gap-5 items-center w-full px-4 py-2 hover:bg-[#232e3c]">
					<HiOutlineUserCircle className="text-xl" />
					<p>My Profile</p>
				</div>
				<div className="flex gap-5 items-center w-full px-4 py-2 hover:bg-[#232e3c]">
					<TbUsers className="text-xl" />
					<p>New Groups</p>
				</div>
				<div className="flex gap-5 items-center w-full px-4 py-2 hover:bg-[#232e3c]">
					<FiUser className="text-xl" />
					<p>Contacts</p>
				</div>
				<div className="flex gap-5 items-center w-full px-4 py-2 hover:bg-[#232e3c]">
					<IoMdCall className="text-xl" />
					<p>Calls</p>
				</div>
				<div className="flex gap-5 items-center w-full px-4 py-2 hover:bg-[#232e3c]">
					<PiPersonSimpleCircleBold className="text-xl" />
					<p>People Nearby</p>
				</div>
				<div className="flex gap-5 items-center w-full px-4 py-2 hover:bg-[#232e3c]">
					<TbDownload className="text-xl" />
					<p>Saved Messages</p>
				</div>
				<div className="flex gap-5 items-center w-full px-4 py-2 hover:bg-[#232e3c]">
					<IoSettingsSharp className="text-xl" />
					<p>Settings</p>
				</div>
				<div className="flex gap-5 items-center w-full px-4 py-2 hover:bg-[#232e3c]">
					<FaUserPlus className="text-xl" />
					<p>Invite Friends</p>
				</div>
				<div className="flex gap-5 items-center w-full px-4 py-2 hover:bg-[#232e3c]">
					<FaRegQuestionCircle className="text-xl" />
					<p>Telegram Features</p>
				</div>
			</div>
		</div>
	);
};

export default SideHeading;
