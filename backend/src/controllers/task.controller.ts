import { Request, Response } from 'express';
import { createTask
        , getTasks
        , updateTask } from '../services/task.service';

export async function storeTask(req: Request, res: Response) {
    try {
        const userId = (req as any).userId;
        const { title, description, dueDate } = req.body;

        if (!title) {
            return res.status(400).json({
                message: 'Título é obrigatório'
            });
        }

        const task = await createTask(
            { title, description, dueDate },
            userId
        );

        return res.status(201).json(task);
    } catch (error: any) {
        return res.status(400).json({ message: error.message });
    }
}

export async function listTasks(req: Request, res: Response) {
    try {
        const userId = (req as any).userId;

        const tasks = await getTasks(userId);

        return res.json(tasks);
    } catch (error: any) {
        return res.status(400).json({ message: error.message });
    }
}

export async function updateTaskController(req: Request, res: Response) {
    try{
        const userId = (req as any).userId;
        const id= Number(req.params.id);

        if (!req.body.title) {
            return res.status(400).json({
                message: 'Título é obrigatório'
            });
        }

        const task  = await updateTask( id, req.body, userId);

        return res.json(task );
    }catch(error: any){
        return res.status(400).json({ message: error.message });
    }
}