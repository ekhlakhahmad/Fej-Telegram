import React from "react";
import SingleChat from "../SingleChat/SingleChat";

const SearchBar = () => {
	return (
		<div className="w-[600px] h-screen bg-[#202b36] text-slate-500">
			<div className="w-full p-2">
				<input
					className="w-full rounded-full py-2 px-4 outline-none bg-[#242f3d]"
					type="search"
					placeholder="Search"
				/>

				<SingleChat />
				<SingleChat />
				<SingleChat />
				<SingleChat />
				<SingleChat />
				<SingleChat />
				<SingleChat />
				<SingleChat />
				<SingleChat />
				<SingleChat />
			</div>
		</div>
	);
};

export default SearchBar;
