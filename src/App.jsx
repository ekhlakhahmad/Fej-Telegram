import React from "react";
import Mobile from "./pages/Mobile/Mobile";
import Desktop from "./pages/Desktop/Desktop";

const App = () => {
	return (
		<div>
			<div className="lg:hidden">
				<Mobile />
			</div>
			<div className="hidden lg:block">
				<Desktop />
			</div>
		</div>
	);
};

export default App;
