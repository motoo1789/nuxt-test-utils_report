import { PrismaClient } from '@prisma/client'
import { createApprove } from "./approve.js"
import { findUser } from "./user.js"
// import { approveIdRead } from "./db.js"
const prisma = new PrismaClient()



export async function checkout(user: string, key: number): Promise<any> {

    // user idが登録されているかを取得する、いなければエラーメッセージを返却
    const existUser : { id: string, approver: string } | null = await findUser(user);
    if(existUser === null) {
        return "ユーザーが存在しないので貸出できません"
    }

    // 貸出申請者の承認者をuserから取得し、内容によって承認ステータスを変更
    let approveStatus : boolean = false;
    if(existUser.approver === "NoApprover" || existUser.approver === null) 
    {
        approveStatus = true;
    }

    // approveのinsert、失敗していたらメッセージを返却
    const createApproveResult = await createApprove(existUser.approver, approveStatus);
    if(createApproveResult === null) {
        return "貸出処理でエラーが発生しました"
    }

    // checkoutに貸出レコードを追加
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

    return createUser ?? null;
}