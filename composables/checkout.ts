import { PrismaClient } from '@prisma/client'
import { findApprove } from "./approve.js"
// import { approveIdRead } from "./db.js"

export async function checkout(user: string, key: number): Promise<any> {
    const prisma = new PrismaClient()

    // user idからauthorizerを取得する
    const approveUser: string = await findApprove(user);

    // approveのinsert
    const createApprove = await prisma.approve.create({
        data: {
            user: approveUser,
            status: true,
            date: new Date()
        }
    })
    .catch((error) => {
        console.error(error);
    });

    // approveのinsertが失敗していたらフロントにメッセージを返却
    if(createApprove === null) {
        return "貸出できません！"
    }

    console.log(createApprove);
    const checkout = {
        user: user,
        approve: createApprove!.id,
        key: key,
        checkout_date: new Date(),
        return_date: new Date()
    }
    const createCheckout = await prisma.checkout.create({
        data: checkout
    })
    .catch((error) => {
        console.error(error);
    });

    return createCheckout;
}


export async function checkoutIdRead(readId: number): Promise<any> {
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

export async function checkoutIdLastRead(): Promise<any> {
    const prisma = new PrismaClient()

    const createUser = await prisma.checkout.findFirst({
        orderBy: {
            id: "desc",
        }
    })
    .catch((error) => {
        console.error(error);
    });

    console.log("checkoutReadスプリプト側:Prisma返却値")
    console.log(createUser)    

    return createUser;
}