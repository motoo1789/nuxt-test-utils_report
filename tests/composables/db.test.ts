import { insert } from "../../composables/db.js"
import { describe, test, expect } from "vitest";

describe("insert", () => {
    test("インサートのテスト", async () => {
        const result = await insert();
        console.log("テスト側:関数返却値")
        console.log(result);
        expect(result).not.toBeUndefined();
        
    })
})