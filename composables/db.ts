import { PrismaClient } from '@prisma/client'

export async function insert(): Promise<any> {
    const prisma = new PrismaClient()

    const user = {
        id : 'testtesttest0001',
        name: 'insertテスト2',
        authorizer: 'testauthorizer02',
        mail:  'test2@test.net'
    }

    const createUser = await prisma.user.create({
        data: user
    })
    .catch((error) => {
        console.error(error);
    });

    console.log("スプリプト側:Prisma返却値")
    console.log(createUser)    

    return createUser;
}