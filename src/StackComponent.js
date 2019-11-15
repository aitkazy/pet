import React, { Component } from "react";

export class StackComponent extends Component {
	state = {
		stack: [],
		counter: 0
	};

	addToStack = () => {
		this.props.stack.push(this.state.counter);
		this.setState(state => ({
			stack: this.props.stack.toArray(),
			counter: state.counter + 1
		}));
	};

	removeFromStack = () => {
		this.props.stack.pop();
		this.setState({ stack: this.props.stack.toArray() });
	};

	componentDidMount = () => {
		this.setState({ stack: this.props.stack.toArray() });
	};

	render() {
		return (
			<div>
				<div>StackComponent</div>
				<div>{JSON.stringify(this.state.stack)}</div>
				<div>
					<button onClick={this.addToStack}>add to stack</button>
				</div>
				<div>
					<button onClick={this.removeFromStack}>
						remove from stack
					</button>
				</div>
			</div>
		);
	}
}

export default StackComponent;
