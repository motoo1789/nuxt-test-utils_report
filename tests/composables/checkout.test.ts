import { checkout } from "../../composables/checkout.js"
import { approveIdRead } from "../../composables/approve.js"
import { checkoutIdLastRead } from "../../composables/checkout.js"
import { describe, test, expect } from "vitest";

describe("checkout", async () => {
    const checkoutLastIdObj : { id : number } = await checkoutIdLastRead();
    console.log(checkoutLastIdObj?.id);
    console.log(checkoutLastIdObj?.id);
    const id = checkoutLastIdObj === null ? 1 : checkoutLastIdObj?.id + 1;
    test("貸出処理の正常テスト 貸出ステータス false", async () => {

        // test data
        const user: string = "checkouttest0001";
        const key: number = 0;


        /**
         * Arrange
         */
        const checkoutAssert = {
            id: id,
            user: 'checkouttest0001',
            approve: id,
            key: 0,
            // return_date: new Date('1970-01-01T00:00:000Z')
        }

        const approveAssert = {
            id: id,
            approver: "testtesttest0001",
            status: false,
        }

        /**
         * Act
         */
        const resultMessage = await checkout(user,key);

        /**
         * Assert
         */
        // approve test
        const resultApprove = await approveIdRead();
        expect(resultApprove.id).toEqual(approveAssert.id);
        expect(resultApprove.approver).toEqual(approveAssert.approver);
        expect(resultApprove.status).toEqual(approveAssert.status);

        // checkout test
        const resultCheckout = await checkoutIdLastRead();
        expect(resultCheckout.id).toEqual(checkoutAssert.id);
        expect(resultCheckout.user).toEqual(checkoutAssert.user);
        // checkoutはapproveと同じはず
        expect(resultApprove.id).toEqual(checkoutAssert.approve);
        expect(resultCheckout.key).toEqual(checkoutAssert.key);

        // message test
        expect(resultMessage).toEqual("貸出処理が完了しました");


        // expect(result).not.toBeUndefined();
        // expect(result).toBeUndefined();
    });
    test("貸出処理の正常テスト 貸出ステータス true", async () => {

        // test data
        const user: string = "testtesttest0001";
        const key: number = 0;


        /**
         * Arrange
         */
        console.log("idの確認");
        console.log(id + 1);
        const checkoutAssert = {
            id: id + 1,
            user: 'testtesttest0001',
            approve: id + 1,
            key: 0,
            // return_date: new Date('1970-01-01T00:00:000Z')
        }
        console.log("checkoutAssertの確認");
        console.log(checkoutAssert);

        const approveAssert = {
            id: id + 1,
            approver: "NoApprover",
            status: true,
        }

        const userApprove = {
            id: "testauthorizer01",
            name: "テスト承認者",
            approver: "testauthorizer01",
            mail: "test@test.com",
        }

        /**
         * Act
         */
        const resultMessage = await checkout(user,key);


        /**
         * Assert
         */
        // approve test
        const resultApprove = await approveIdRead();
        expect(resultApprove.id).toEqual(approveAssert.id);
        expect(resultApprove.approver).toEqual(approveAssert.approver);
        expect(resultApprove.status).toEqual(approveAssert.status);

        // checkout test
        const resultCheckout = await checkoutIdLastRead();
        expect(resultCheckout.id).toEqual(checkoutAssert.id);
        expect(resultCheckout.user).toEqual(checkoutAssert.user);
        // checkoutはapproveと同じはず
        expect(resultApprove.id).toEqual(checkoutAssert.approve);
        expect(resultCheckout.key).toEqual(checkoutAssert.key);

        // message test
        expect(resultMessage).toEqual("貸出処理が完了しました");


        // expect(result).not.toBeUndefined();
        // expect(result).toBeUndefined();
    });
    test("approveにinsertしたいユーザーがuserテーブルにいなかった時 失敗テスト", async () => {

        /**
         * Arrange
         */
         // test data
         const user: string = "NotExistUser";
         const key: number = 0;

        /**
         * Act
         */
        const resultMessage = await checkout(user,key);

        /**
         * Assert
         */
        const resultApprove = await approveIdRead();
        console.log("approveテスト側:関数返却値");
        console.log(resultApprove);
        expect(resultMessage).toEqual("ユーザーが存在しないので貸出できません");

        // expect(result).not.toBeUndefined();
        // expect(result).toBeUndefined();
    });
})


// describe("failureApproveInsert", () => {
//     test("approve tableインサート失敗", async () => {
//         const test = "登録できませんでした"

//         const result = await failureApproveInsert();
//         console.log(result)

//         expect(result).toEqual(test)
//         // expect(result).not.toBeUndefined();
//         // expect(result).toBeUndefined();
//     })
// })

