import { insert } from "../../composables/db.js"
import { read } from "../../composables/db.js"
import { describe, test, expect } from "vitest";

// describe("insert", () => {
//     test("インサートのテスト", async () => {
//         const result = await insert();
//         console.log("テスト側:関数返却値")
//         console.log(result);
//         expect(result).not.toBeUndefined();
        
//     })
// })

describe("read", () => {
    test("readのテスト", async () => {

        const test = {
            id: 'testtesttest0001',
            name: 'insertテスト2',
            authorizer: 'testauthorizer02',
            create_date: new Date('2024-04-21T09:24:46.028Z'),
            mail: 'test2@test.net'
        }
        const result = await read();
        console.log("テスト側:関数返却値")
        console.log(result);
        // expect(test).toMatchObject(result)
        // expect(result).not.toBeUndefined();
    })
})