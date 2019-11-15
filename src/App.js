import React from "react";
import QueueComponent from "./QueueComponent";
import StackComponent from "./StackComponent";
import Queue from "./ds/queue/Queue";
import Stack from "./ds/stack/Stack";

function App() {
	return (
		<div style={{ borderCollapse: "collapse" }}>
			<div>app</div>
			<div>
				<QueueComponent queue={new Queue()} />
			</div>
			<div>
				<StackComponent stack={new Stack()} />
			</div>
		</div>
	);
}

export default App;
