import {
	NodeAPI,
	NodeMessage
} from 'node-red';
import { AbstractNode } from 'node-red-ts/api/AbstractNode';

export class ReadBalance extends AbstractNode {
	public constructor(RED: NodeAPI) {
		super(RED);
	}

	protected override async onInput(msg?: any): Promise<Array<NodeMessage | null>> {
		return [];
	}
}

module.exports = (RED: NodeAPI) => AbstractNode.createNode(RED, ReadBalance);
