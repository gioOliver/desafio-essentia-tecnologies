import { prisma } from '../lib/prisma';

export async function createTask(data: {
    title: string;
    description?: string;
    dueDate?: Date;
}, userId: number) {
    return prisma.task.create({
        data: {
            ...data,
            dueDate: data.dueDate ? new Date(data.dueDate) : null,
            userId
        }
    });
}