import { findApprove } from "../../composables/function.js"
import { describe, test, expect } from "vitest";

describe("function test", () => {
    test("機能追加に伴う関数テスト", async () => {
        const authorizerSuccess = await findApprove("checkouttest0001");
        expect(authorizerSuccess).toEqual("testtesttest0001");

        const authorizerFailure = await findApprove("testtesttesttest");
        expect(authorizerFailure).toEqual("登録できませんでした");
    })
})