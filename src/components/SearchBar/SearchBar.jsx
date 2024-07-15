import React, { useEffect, useState, useRef } from "react";
import SingleChat from "../SingleChat/SingleChat";
import { MdEdit } from "react-icons/md";

const SearchBar = ({ handleChat }) => {
	const [chats, setChats] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredChats, setFilteredChats] = useState([]);
	const [page, setPage] = useState(1); // Track current page

	const chatSessionRef = useRef(null); // Ref for chat session container

	useEffect(() => {
		const fetchChats = async () => {
			try {
				const response = await fetch(
					`https://devapi.beyondchats.com/api/get_all_chats?page=${page}`
				);
				const data = await response.json();
				setChats((prevChats) => [...prevChats, ...(data?.data?.data || [])]);
			} catch (error) {
				console.error("Error fetching chats:", error);
			}
		};

		fetchChats();
	}, [page]); // Fetch new data when page changes

	const handleChatClick = (name, status, chatId) => {
		handleChat(name, status, chatId);
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

	// Function to fetch next page of data
	const fetchNextPage = () => {
		setPage(page + 1);
	};

	// Function to detect scroll to bottom
	const handleScroll = () => {
		if (
			chatSessionRef.current &&
			chatSessionRef.current.scrollTop + chatSessionRef.current.clientHeight >=
				chatSessionRef.current.scrollHeight
		) {
			fetchNextPage();
		}
	};

	// Attach scroll event listener
	useEffect(() => {
		if (chatSessionRef.current) {
			chatSessionRef.current.addEventListener("scroll", handleScroll);
		}
		return () => {
			if (chatSessionRef.current) {
				chatSessionRef.current.removeEventListener("scroll", handleScroll);
			}
		};
	}, []);

	return (
		<div className="lg:w-[650px] w-full h-screen px-2 bg-[#202b36] text-slate-500 relative">
			<div className="w-full lg:block hidden p-2">
				<input
					className="w-full rounded-full py-2 px-4 outline-none bg-[#242f3d]  text-slate-200"
					type="search"
					placeholder="Search by name"
					value={searchTerm}
					onChange={handleSearchChange}
				/>
			</div>
			<div
				className="chat-session overflow-y-auto"
				style={{ maxHeight: "calc(100vh - 100px)", scrollbarWidth: "none" }}
				ref={chatSessionRef}>
				{filteredChats.map((chat) => (
					<SingleChat
						key={chat.id}
						chat={chat}
						onClick={() =>
							handleChatClick(chat?.creator?.name, chat.status, chat.id)
						}
					/>
				))}
			</div>
			<div className="lg:hidden block">
				<div className="w-16 h-16 flex justify-center items-center rounded-[50%] bg-[#5eb5f7] absolute right-5 bottom-[180px]">
					<MdEdit className="text-3xl text-white " />
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
