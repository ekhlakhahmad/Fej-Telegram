import React from "react";
import logo from "/Fej_Computer_Logo.png";
import MessageCount from "../MessageCount/MessageCount";

const SingleChat = ({ chat, onClick }) => {
	const { creator, msg_count, updated_at, status } = chat;
	const formattedTime = new Date(updated_at).toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
	});
	return (
		<div
			className="flex justify-between items-center gap-5 p-2 shadow-md"
			onClick={onClick}>
			<div className="flex gap-5 items-center">
				<img className="w-10" src={logo} alt="" />
				<div>
					<h1>{creator?.name}</h1>
					<p>{status}</p>
				</div>
			</div>
			<div className="flex flex-col justify-center items-end">
				<h4>{formattedTime}</h4>
				<MessageCount count={msg_count} />
			</div>
		</div>
	);
};

export default SingleChat;
