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

    console.log("approveIdReadスプリプト側:Prisma返却値")
    console.log(result)    

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

    return result?.authorizer ?? "登録できませんでした";
}

export async function approveInsert(user: string, status: boolean): Promise<any> {

    const createUser = await prisma.approve.create({
        data: {
            user: user,
            status: status,
            date: new Date()
        }
    })
    .catch((error) => {
        console.error(error);
    });

    return createUser ?? "登録できませんでした";
}

// export async function failureApproveInsert(): Promise<any> {

//     const user = {
//         id: 1,
//         user: 'testauthorizer01',
//         status: false,
//         date: new Date(),
//     }

//     const createUser = await prisma.approve.create({
//         data: user
//     })
//     .catch((error) => {
//         console.error(error);
//     });  

//     return createUser ?? "登録できませんでした";
// }