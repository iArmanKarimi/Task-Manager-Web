export type status = 'pending' | 'in-progress' | 'completed';

export type Task = {
	id: string,
	title: string,
	description?: string,
	status: status,
	priority: 'low' | 'medium' | 'high',
	tags?: string[],
	dueDate?: Date,
	createdAt: Date,
	updatedAt: Date,
}
