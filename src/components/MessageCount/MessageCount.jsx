import React from "react";

const MessageCount = ({ count }) => {
	return (
		<div>
			<p className="text-center flex items-center text-xs justify-center bg-blue-500 rounded-full px-2 text-white">
				{count}
			</p>
		</div>
	);
};

export default MessageCount;
