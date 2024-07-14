import React from "react";
import logo from "/Fej_Computer_Logo.png";
import MessageCount from "../MessageCount/MessageCount";

const SingleChat = () => {
	return (
		<div className=" flex justify-between items-center gap-5 p-2">
			<div className="flex gap-5 items-center">
				<img className="w-10" src={logo} alt="" />
				<div>
					<h1>Ekhlakh Ahmad</h1>
					<p>message</p>
				</div>
			</div>
			<div className="flex flex-col justify-center items-end">
				<h4>7:20 AM</h4>
				<MessageCount/>
			</div>
		</div>
	);
};

export default SingleChat;
