import { createApprove } from "../../composables/approve.js"
import { describe, test, expect } from "vitest";

describe("approve", () => {
    test("insert処理の正常成功テスト", async () => {

        /**
         * Arrange
         */
        // Assert data
        const user: string = "approvetest00001";
        const isReturn: boolean = true;

        /**
         * Act
         */
        const result = await createApprove(user,isReturn);

        /**
         * Assert
         */
        console.log("approveテスト側:関数返却値");
        console.log(result);
        expect(result.status).toEqual(isReturn);
        expect(result.user).toEqual(user);

        // expect(result).not.toBeUndefined();
        // expect(result).toBeUndefined();
    }),
    test("insert処理の異常処理テスト", async () => {

        /**
         * Arrange
         */
        // Assert data

        /**
         * Act
         */
        const result = await createApprove(2,true);

        /**
         * Assert
         */
        expect(result).toEqual("登録できませんでした");


        // expect(result).not.toBeUndefined();
        // expect(result).toBeUndefined();
    })
})