import { PrismaClient } from '@prisma/client'

export async function checkout(): Promise<any> {
    const prisma = new PrismaClient()

    const checkout = {
        user: 'checkouttest0001',
        approve: 2,
        key: 0,
        checkout_date: new Date(),
        return_date: new Date()
    }

    const createUser = await prisma.checkout.create({
        data: checkout
    })
    .catch((error) => {
        console.error(error);
    });

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

export async function userRead(): Promise<any> {
    const prisma = new PrismaClient()

    const createUser = await prisma.user.findUnique({
        where: {
            id: "checkouttest0001"
        }
    })
    .catch((error) => {
        console.error(error);
    });  

    return createUser;
}

export async function notUser(): Promise<any> {
    const prisma = new PrismaClient()

    const createUser = await prisma.user.findUnique({
        where: {
            id: "not user"
        }
    })
    .catch((error) => {
        console.error(error);
    });  

    return createUser ?? "ユーザーが確認できませんでした";
}

export async function failureApproveInsert(): Promise<any> {
    const prisma = new PrismaClient()

    const user = {
        id: 1,
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

    return createUser ?? "登録できませんでした";
}