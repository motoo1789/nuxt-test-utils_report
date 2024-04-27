import { checkout } from "../../composables/checkout.js"
import { checkoutRead } from "../../composables/db.js"
import { approveIdRead } from "../../composables/db.js"
import { approveInsert } from "../../composables/db.js"
import { describe, test, expect } from "vitest";

describe("checkout", () => {
    test("貸出処理のテスト", async () => {

        const checkouttest = {
            id: 2,
            user: 'checkouttest0001',
            approve: 2,
            key: 0,
            // return_date: new Date('1970-01-01T00:00:000Z')
        }
        await checkout()
        const result = await checkoutRead(2);
        console.log("checkoutテスト側:関数返却値")
        console.log(result);
        expect(result).toMatchObject(checkouttest)
        // expect(result).not.toBeUndefined();
        // expect(result).toBeUndefined();
    })
})

describe("approve", () => {
    test("approve table insert test", async () => {
        const test = {
            id: 3,
            user: "testauthorizer01",
            status: false,
        }
        await approveInsert();
        const result = await approveIdRead();

        expect(result).toMatchObject(test)
        // expect(result).not.toBeUndefined();
        // expect(result).toBeUndefined();
    })

    
})
