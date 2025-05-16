import {
	NodeAPI,
	NodeMessage
} from 'node-red';
import { AbstractNode } from 'node-red-ts/api/AbstractNode';

class DummyNode extends AbstractNode<NodeMessage> {
	public constructor(RED: NodeAPI) {
		super(RED);
	}

	public override async onInput(msg?: NodeMessage): Promise<NodeMessage[]> {
		console.debug('input');

		this.status = '';

		return [{ payload: 'dummy test' }];
	}

	public override async onClose(msg?: NodeMessage): Promise<NodeMessage[]> {
		console.debug('input');

		this.status = '';

		return [{ payload: 'dummy test' }];
	}
}

module.exports = (RED: NodeAPI) => AbstractNode.createNode(RED, DummyNode);
