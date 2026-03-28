import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/auth.service';

export async function register(req: Request, res: Response) {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: 'Todos os campos são obrigatórios'
            });
        }

        const user = await registerUser({ name, email, password });

        return res.status(201).json(user);
    } catch (error: any) {
        return res.status(400).json({
            message: error.message
        });
    }
}

export async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: 'Email e senha são obrigatórios'
            });
        }

        const result = await loginUser({ email, password });

        return res.json(result);
    } catch (error: any) {
        return res.status(400).json({
            message: error.message
        });
    }
}