import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HelloMessage from "../../components/HelloMessage.vue";

describe("HelloMessage", () => {
  test("A message should appear", () => {
    const wrapper = mount(HelloMessage, {
      props: {
        name: "World",
      },
    });
    console.log(wrapper.text());
    expect(wrapper.text()).toEqual("Hello, World!");
  });
});