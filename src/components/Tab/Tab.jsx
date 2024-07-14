import React from "react";
import MessageCount from "../MessageCount/MessageCount";

const Tab = () => {
	return (
		<div className="flex gap-10 p-4">
			<div className="flex justify-center items-center gap-1">
				<button>All</button>
				<MessageCount />
			</div>
			<div className="flex justify-center items-center gap-1">
				<button>Channels</button>
				<MessageCount />
			</div>
			<div className="flex justify-center items-center gap-1">
				<button>Groups</button>
				<MessageCount />
			</div>
			<div className="flex justify-center items-center gap-1">
				<button>Bots</button>
				<MessageCount />
			</div>
			<div className="flex justify-center items-center gap-1">
				<button>Study</button>
				<MessageCount />
			</div>
		</div>
	);
};

export default Tab;
