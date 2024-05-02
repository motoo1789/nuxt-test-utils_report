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

export async function approveInsert(): Promise<any> {
    const prisma = new PrismaClient()

    const user = {
        user: 'testauthorizer01',
        status: false,
        date: new Date(),
    }

    const createUser = await prisma.approve.create({
        data: user
    })
    .catch((error) => {
        console.error(error);
    });

    console.log("スプリプト側:approveInsert返却値")
    console.log(createUser)    

    return createUser;
}