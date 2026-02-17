import { type Status } from './task';

export type TaskColumn = {
	id: string,
	status: Status,
	taskIds: string[], // ordered list of task IDs
}
