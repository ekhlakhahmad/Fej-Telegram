import React, { useEffect, useState } from "react";

const ChatArea = ({ chatId }) => {
	const [messages, setMessages] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchMessages = async () => {
			if (!chatId) return;

			setLoading(true);
			try {
				const response = await fetch(
					`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`
				);
				const data = await response.json();
				setMessages(data?.data || []); // Adjust according to the actual data structure
			} catch (error) {
				console.error("Error fetching messages:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchMessages();
	}, [chatId]);

	const formatTime = (timestamp) => {
		return new Date(timestamp).toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit",
		});
	};

	const renderMessageContent = (message) => {
		// Regular expression to match URLs
		const urlRegex = /(https?:\/\/[^\s]+)/g;

		// Replace URLs with anchor tags containing only the link text
		const messageWithLinks = message.replace(urlRegex, (url) => {
			// Extract the link text from the URL
			let linkText = url;
			if (url.startsWith("http://") || url.startsWith("https://")) {
				linkText = new URL(url).hostname.replace("www.", ""); // Display hostname as link text
			}
			return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-500">${linkText}</a>`;
		});

		// Render message content as HTML
		return <div dangerouslySetInnerHTML={{ __html: messageWithLinks }} />;
	};

	if (!chatId) {
		return (
			<div className="w-full h-screen flex justify-center items-center bg-[#0e1621]">
				<h1 className="p-1 px-3 bg-[#1e2c3a] text-slate-200 rounded-full">
					Select a chat to start messaging
				</h1>
			</div>
		);
	}

	if (loading) {
		return (
			<div className="w-full h-screen flex justify-center items-center bg-[#0e1621]">
				<h1 className="text-slate-200">Loading messages...</h1>
			</div>
		);
	}

	return (
		<div className="w-full h-screen flex flex-col bg-[#0e1621] text-slate-200 p-4 overflow-hidden">
			<div
				className="overflow-y-scroll flex-1"
				style={{ scrollbarWidth: "none" }}>
				{messages.length === 0 ? (
					<h1 className="p-1 px-3 bg-[#1e2c3a] rounded-full">
						No messages in this chat.
					</h1>
				) : (
					messages.map((message) => (
						<div
							key={message.id}
							className={`flex items-start mb-4 ${
								message.sender.name === "BeyondChat"
									? "justify-start"
									: "justify-end"
							}`}>
							<div
								className={`p-2 rounded max-w-[70%] ${
									message.sender.name === "BeyondChat"
										? "bg-sky-400 text-sky-900"
										: "bg-[#1e2c3a]"
								}`}>
								{renderMessageContent(message.message)}
								<div className="flex flex-col items-end justify-end ml-2 text-xs">
									<span>{formatTime(message.created_at)}</span>
								</div>
							</div>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default ChatArea;
