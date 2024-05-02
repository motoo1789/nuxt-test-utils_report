import { PrismaClient } from '@prisma/client'

// export async function userRead(): Promise<any> {
//     const prisma = new PrismaClient()

//     const createUser = await prisma.user.findUnique({
//         where: {
//             id: "checkouttest0001"
//         }
//     })
//     .catch((error) => {
//         console.error(error);
//     });  

//     return createUser;
// }

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
