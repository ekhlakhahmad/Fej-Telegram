import React, { useEffect, useState } from "react";
import SingleChat from "../SingleChat/SingleChat";

const SearchBar = ({ handleChat }) => {
	const [chats, setChats] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredChats, setFilteredChats] = useState([]);

	useEffect(() => {
		const fetchChats = async () => {
			try {
				const response = await fetch(
					"https://devapi.beyondchats.com/api/get_all_chats"
				);
				const data = await response.json();
				setChats(data?.data?.data || []);
			} catch (error) {
				console.error("Error fetching chats:", error);
			}
		};

		fetchChats();
	}, []);

	const handleChatClick = async (chatId) => {
		handleChat(chatId);
	};

	useEffect(() => {
		const filteredChats = chats.filter((chat) =>
			chat?.creator?.name?.toLowerCase().includes(searchTerm?.toLowerCase())
		);
		// Set filtered chats if search term is not empty, otherwise set all chats
		setFilteredChats(searchTerm ? filteredChats : chats);
	}, [chats, searchTerm]);

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);
	};

	return (
		<div className="w-[600px] h-screen bg-[#202b36] text-slate-500">
			<div className="w-full p-2">
				<input
					className="w-full rounded-full py-2 px-4 outline-none bg-[#242f3d] text-slate-200"
					type="search"
					placeholder="Search by name"
					value={searchTerm}
					onChange={handleSearchChange}
				/>
			</div>
			{filteredChats.map((chat) => (
				<SingleChat
					key={chat.id}
					chat={chat}
					onClick={() => handleChatClick(chat.id)}
				/>
			))}
		</div>
	);
};

export default SearchBar;
