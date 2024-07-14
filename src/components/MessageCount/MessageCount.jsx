import React from "react";

const MessageCount = ({ count }) => {
	return (
		<div>
			<p className="w-5 h-5 text-center flex items-center justify-center bg-blue-500 rounded-[50%] text-white">
				{count}
			</p>
		</div>
	);
};

export default MessageCount;
