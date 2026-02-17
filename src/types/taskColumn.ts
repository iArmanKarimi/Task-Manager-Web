import { type status } from './task';

type TaskColumn = {
	id: string,
	status: status,
	taskIds: string[], // ordered list of task IDs
}
