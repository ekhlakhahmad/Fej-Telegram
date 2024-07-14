import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import Tab from "../Tab/Tab";
import SideHeading from "../SideHeading/SideHeading";

const Header = ({ setShowOverlay }) => {
	const [showSidebar, setShowSidebar] = useState(false);

	const handleSidebarToggle = () => {
		setShowSidebar(!showSidebar);
		setShowOverlay(!showSidebar);
	};

	return (
		<div className="relative">
			<div className="w-full flex justify-between items-center py-2 px-4 bg-[#17212b] text-white">
				<div className="flex gap-10 items-center font-semibold">
					<FaBars className="cursor-pointer" onClick={handleSidebarToggle} />
					<h2 className="text-lg">Telegram</h2>
				</div>
				<CiSearch className="text-2xl cursor-pointer" />
			</div>
			<Tab />
			<SideHeading showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
		</div>
	);
};

export default Header;
