import { PrismaClient } from '@prisma/client'

export async function findApprove(user: string): Promise<any> {
    const prisma = new PrismaClient()


    const result = await prisma.user.findUnique({
        where: {
            id: user
        }
    })
    .catch((error) => {
        console.error(error);
    });  

    return result?.authorizer ?? "登録できませんでした";
}

