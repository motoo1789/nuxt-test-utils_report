import { checkout } from "../../composables/checkout.js"
import { approveIdRead } from "../../composables/approve.js"
import { checkoutIdLastRead } from "../../composables/checkout.js"
import { describe, test, expect } from "vitest";

describe("checkout", () => {
    test("貸出処理の正常テスト", async () => {

        // test data
        const user: string = "checkouttest0001";
        const key: number = 0;


        /**
         * Arrange
         */
        const checkoutAssert = {
            id: 2,
            user: 'checkouttest0001',
            approve: 2,
            key: 0,
            // return_date: new Date('1970-01-01T00:00:000Z')
        }

        const approveAssert = {
            id: 2,
            approver: "testtesttest0001",
            status: false,
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

