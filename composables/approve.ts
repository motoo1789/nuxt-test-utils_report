import { PrismaClient } from '@prisma/client'

export async function approveIdRead(): Promise<any> {
    const prisma = new PrismaClient()

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

// export async function approveInsert(): Promise<any> {
//     const prisma = new PrismaClient()

//     const user = {
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

//     console.log("スプリプト側:approveInsert返却値")
//     console.log(createUser)    

//     return createUser;
// }

// export async function failureApproveInsert(): Promise<any> {
//     const prisma = new PrismaClient()

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