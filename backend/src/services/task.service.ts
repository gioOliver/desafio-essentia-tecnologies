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

export async function getTasks(userId: number) {
    return prisma.task.findMany({
        where: {
            userId,
            deletedAt: null
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
}

export async function updateTask(id: number, data: any, userId: number)
{
    const task = await prisma.task.findFirst({
        where: {
            id,
            userId,
            deletedAt: null
        }
    })

    if (!task){
        throw new Error("Tarefa não encontrada ou não pertencente ao usuário")
    }

    let dueDate: Date | undefined = undefined;

    if (data.dueDate !== undefined) {
        const parsedDate = new Date(data.dueDate);

        if (isNaN(parsedDate.getTime())) {
            throw new Error('Data inválida. Use formato YYYY-MM-DD');
        }

        dueDate = parsedDate;
    }

    return prisma.task.update({
        where: {
            id
        },
        data: {
            ...(data.title !== undefined && { title: data.title }),
            ...(data.description !== undefined && { description: data.description }),
            ...(data.status !== undefined && { status: Boolean(data.status) }),
            ...(dueDate !== undefined && { dueDate })
        }
    })
}