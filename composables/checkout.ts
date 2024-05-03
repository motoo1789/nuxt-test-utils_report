import { PrismaClient } from '@prisma/client'
import { findApprove, approveInsert } from "./approve.js"
// import { approveIdRead } from "./db.js"
const prisma = new PrismaClient()

export async function checkout(user: string, key: number): Promise<any> {

    // user idからauthorizerを取得する
    const approveUser: string = await findApprove(user);

    // approveのinsert
    const createApprove = await approveInsert(approveUser,true);

    // approveのinsertが失敗していたらフロントにメッセージを返却
    if(createApprove === null) {
        return "承認者が存在しないので貸出できません"
    }

    const createdCheckout = await createCheckout(user, createApprove!.id, key);
    
    return createdCheckout;
}

async function createCheckout(user: string, approve: number, key: number) :  Promise<any> {

    const createCheckout = await prisma.checkout.create({
        data: {
            user: user,
            approve:approve,
            key: key,
            checkout_date: new Date(),
            return_date: new Date()
        }
    })
    .catch((error) => {
        console.error(error);
    });

    return createCheckout ?? "貸出できません";
}

export async function checkoutIdRead(readId: number): Promise<any> {

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