import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import Tab from "../Tab/Tab";

const Header = () => {
	return (
		<div>
			<div className="w-1/2 flex justify-between items-center py-2 px-4">
				<div className="flex gap-10">
					<FaBars />
					<h2>Telegram</h2>
				</div>
				<CiSearch />
			</div>
            <Tab/>
		</div>
	);
};

export default Header;
