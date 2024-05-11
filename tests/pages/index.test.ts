
import { describe, test, expect } from "vitest";
// import { mount } from "@vue/test-utils";
import index from "~/pages/index.vue";
import { mountSuspended, registerEndpoint } from '@nuxt/test-utils/runtime';

// registerEndpoint("/api/endpoint",{
//   handler: () => ({
//     data: {
//       value:{
//         message: "XXX",
//         color: "XXX",
//         type: "XXX"
//       }
//     }
//   }),
//   method: "POST"
// });

describe("index.vue", () => {
  test("index page test", async () => {
    console.log("start test");
    console.log(index);
    // const wrapper = await mountSuspended(index);
    // console.log(wrapper.text());
    // expect(wrapper.exists()).toBeTruthy();

    // const card1 = wrapper.findComponent('.keyType1');
    // expect(card1.exists()).toBeTruthy();

    // await card1.trigger('click');
    // // expect(clickresult).toBe("");

    // const alertSuccess = wrapper.findComponent('.checkoutAlert');
    // expect(alertSuccess.text()).toContain("");
  });
});