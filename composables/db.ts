import { PrismaClient } from '@prisma/client'

export async function insert(): Promise<any> {
    const prisma = new PrismaClient()

    const user = {
        id : 'testtesttest0002',
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

export async function read(): Promise<any> {
    const prisma = new PrismaClient()

    const createUser = await prisma.user.findUnique({
        where: {
            id: "testtesttest0001"
        }
    })
    .catch((error) => {
        console.error(error);
    });

    console.log("readスプリプト側:Prisma返却値")
    console.log(createUser)    

    return createUser;
}

export async function checkoutRead(readId: number): Promise<any> {
    const prisma = new PrismaClient()

    const createUser = await prisma.checkout.findUnique({
        where: {
            id: readId
        }
    })
    .catch((error) => {
        console.error(error);
    });

    console.log("checkoutReadスプリプト側:Prisma返却値")
    console.log(createUser)    

    return createUser;
}