import { PrismaClient } from '@prisma/client'
import { findApprove, createApprove } from "./approve.js"
import { findUser  } from "./user.js"
// import { approveIdRead } from "./db.js"
const prisma = new PrismaClient()



export async function checkout(user: string, key: number): Promise<any> {

    // user idからauthorizerを取得する、いなければエラーメッセージを返却
    const existUser : { id: string } | null = await findUser(user);
    if(existUser === null) {
        return "ユーザーが存在しないので貸出できません"
    }

    // approveのinsert
    const approver : { approver: string } = await findApprove();
    const createApproveResult = await createApprove(existUser.id,true);

    // approveのinsertが失敗していたらメッセージを返却
    if(createApproveResult === null) {
        return "貸出処理でエラーが発生しました"
    }

    const createdCheckout = await createCheckout(user, createApproveResult!.id, key);
    
    return createdCheckout ?? "貸出処理でエラーが発生しました";
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

    return createCheckout === null ? "貸出処理でエラーが発生しました" : "貸出処理が完了しました";
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