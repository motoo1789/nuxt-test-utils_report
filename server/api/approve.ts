import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function approveIdRead(): Promise<any> {

    const result = await prisma.approve.findFirst({
        orderBy: {
            id: "desc",
        }
    })
    .catch((error) => {
        console.error(error);
    });  

    return result;
}

export async function findApprove(user: string): Promise<any> {

    const result = await prisma.user.findUnique({
        where: {
            id: user
        }
    })
    .catch((error) => {
        console.error(error);
    });  

    return result?.approver ?? null;
}

export async function createApprove(approver: string, status: boolean): Promise<any> {

    const createUser = await prisma.approve.create({
        data: {
            approver: approver,
            status: status,
            date: new Date()
        }
    })
    .catch((error) => {
        console.error(error);
    });

    return createUser ?? null;
}
