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

// export async function notUser(): Promise<any> {
//     const prisma = new PrismaClient()

//     const createUser = await prisma.user.findUnique({
//         where: {
//             id: "not user"
//         }
//     })
//     .catch((error) => {
//         console.error(error);
//     });  

//     return createUser ?? "ユーザーが確認できませんでした";
// }
