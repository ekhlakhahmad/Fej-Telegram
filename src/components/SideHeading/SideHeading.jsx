import React from "react";
import logo from "/Fej_Computer_Logo.png";
import { CiLight } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineUserCircle } from "react-icons/hi";

const SideHeading = () => {
	return (
		<div>
			<div>
				<img src={logo} alt="" />
				<CiLight />
			</div>
			<div>
				<div>
					<h1>Ekhlakh Ahmad</h1>
					<p>+91 9576650491</p>
				</div>
				<IoIosArrowDown />
			</div>
			<div>
				<div>
					<HiOutlineUserCircle />
					My Profile
				</div>
				<div>
					<HiOutlineUserCircle />
					My Profile
				</div>
				<div>
					<HiOutlineUserCircle />
					My Profile
				</div>
				<div>
					<HiOutlineUserCircle />
					My Profile
				</div>
				<div>
					<HiOutlineUserCircle />
					My Profile
				</div>
				<div>
					<HiOutlineUserCircle />
					My Profile
				</div>
			</div>
		</div>
	);
};

export default SideHeading;
