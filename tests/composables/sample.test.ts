import { addnumber } from "../../composables/sample.js"
import { describe, test, expect } from "vitest";

describe("addnumber", () => {
    test("足し算のテストサンプル", () => {
        const funresult = addnumber(1,2);
        expect(funresult).toEqual(3);
        
    })
})