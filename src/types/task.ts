export type Status = 'pending' | 'in-progress' | 'completed';

export type Task = {
	id: string,
	title: string,
	description?: string,
	status: Status,
	priority: 'low' | 'medium' | 'high',
	tags?: string[],
	dueDate?: string, // ISO date string
	createdAt: string,
	updatedAt: string,
}
