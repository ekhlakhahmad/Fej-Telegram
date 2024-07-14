import React from "react";
import MessageCount from "../MessageCount/MessageCount";

const Tab = () => {
	// Dummy data for message counts (replace with actual data or state if dynamic)
	const messageCounts = {
		all: 7,
		channels: 5,
		groups: 3,
		bots: 6,
		study: 2,
	};

	return (
		<div className="w-full overflow-x-auto flex gap-4 p-4 bg-[#17212b] text-slate-200">
			{/* Replace 'overflow-hidden' with 'overflow-x-auto' */}
			<div className="flex justify-center items-center gap-1">
				<button>All</button>
				<MessageCount count={messageCounts.all} />
			</div>
			<div className="flex justify-center items-center gap-1">
				<button>Channels</button>
				<MessageCount count={messageCounts.channels} />
			</div>
			<div className="flex justify-center items-center gap-1">
				<button>Groups</button>
				<MessageCount count={messageCounts.groups} />
			</div>
			<div className="flex justify-center items-center gap-1">
				<button>Bots</button>
				<MessageCount count={messageCounts.bots} />
			</div>
			<div className="flex justify-center items-center gap-1">
				<button>Study</button>
				<MessageCount count={messageCounts.study} />
			</div>
		</div>
	);
};

export default Tab;
