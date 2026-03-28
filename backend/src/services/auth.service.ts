
import { prisma } from '../lib/prisma';
import bcrypt from 'bcrypt'

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