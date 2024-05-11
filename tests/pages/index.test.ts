import { describe, test, expect } from "vitest";
import index from "~/pages/index.vue";
import { mountSuspended, registerEndpoint } from '@nuxt/test-utils/runtime';


describe("index.vue", () => {
  test("index page test", async () => {
    console.log("test start");
    console.log(index);
    const wrapper = await mountSuspended(index);
    console.log(wrapper.text());
    expect(wrapper.exists()).toBeTruthy();
  });
});