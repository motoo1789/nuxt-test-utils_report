import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function findUser(user: string): Promise<any> {

    const result = await prisma.user.findUnique({
        where: {
            id: user
        }
    })
    .catch((error) => {
        console.error(error);
    });  

    return result ?? null;
}