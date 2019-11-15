import LinkedList from "../linked-list/LinkedList";

class Stack {
	constructor() {
		this.linkedList = new LinkedList();
	}

	isEmpty = () => {
		return !this.linkedList.head;
	};

	peek = () => {
		if (this.isEmpty()) {
			return null;
		}

		return this.linkedList.head.value;
	};

	push = value => {
		this.linkedList.prepend(value);
	};

	pop = () => {
		const removedHead = this.linkedList.deleteHead();
		return removedHead ? removedHead.value : null;
	};

	toArray = callback => {
		return this.linkedList
			.toArray()
			.map(node => (callback ? callback(node.value) : node.value));
	};

	toString = callback => {
		return this.linkedList.toString(callback);
	};
}

export default Stack;
