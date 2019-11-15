import LinkedList from "../linked-list/LinkedList";

class Queue {
	constructor() {
		this.linkedList = new LinkedList();
	}

	isEmpty() {
		return !this.linkedList.head;
	}

	peek() {
		if (!this.linkedList.head) {
			return null;
		}

		return this.linkedList.head.value;
	}

	enqueue(value) {
		this.linkedList.append(value);
	}

	dequeue() {
		const removedHead = this.linkedList.deleteHead();
		return removedHead ? removedHead.value : null;
	}

	toString(callback) {
		return this.linkedList.toString(callback);
	}

	toArray(callback) {
		return this.linkedList
			.toArray()
			.map(node => (callback ? callback(node.value) : node.value));
	}
}

export default Queue;
