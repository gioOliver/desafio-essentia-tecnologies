
import { prisma } from '../lib/prisma';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

export async function registerUser(data: {
    name: string;
    email: string;
    password: string;
}) {
    const { name, email, password } = data;

    const userExists = await prisma.user.findUnique({
        where: { email }
    });

    if (userExists) {
        throw new Error('Email já está em uso');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    });

    return {
        id: user.id,
        name: user.name,
        email: user.email
    };
}

export async function loginUser(data: {
    email: string;
    password: string;
}) {
    const { email, password } = data;

    const user = await prisma.user.findUnique({
        where: { email }
    });

    if (!user) {
        throw new Error('Credenciais inválidas');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
        throw new Error('Credenciais inválidas');
    }

    const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET as string,
        { expiresIn: '1d' }
    );

    return {
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        }
    };
}