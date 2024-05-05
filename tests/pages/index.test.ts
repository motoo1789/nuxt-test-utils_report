import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import index from "../../pages/index.vue";

describe("index.vue", () => {
  test("貸出処理のフロントテスト", () => {
    const wrapper = mount(index);
    //console.log(wrapper.text());
    expect(wrapper.exists()).toBeTruthy();

    const card1 = wrapper.findComponent('.keyType1');
    expect(card1.exists()).toBeTruthy();
  });
});