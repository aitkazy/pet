import React, { Component } from "react";

export class QueueComponent extends Component {
	state = {
		queue: []
	};

	componentDidMount = () => {
		this.setState({
			queue: this.props.queue.toArray()
		});
	};

	addToQueue = () => {
		this.props.queue.enqueue(1);
		this.setState({ queue: this.props.queue.toArray() });
		setTimeout(() => {
			this.props.queue.dequeue();
			this.setState({ queue: this.props.queue.toArray() });
		}, 2000);
	};

	render() {
		return (
			<div style={{ border: "1px solid black" }}>
				<div>QueueComponent</div>
				<div>{JSON.stringify(this.state.queue)}</div>
				<div>
					<button onClick={this.addToQueue}>add to queue</button>
				</div>
			</div>
		);
	}
}

export default QueueComponent;
