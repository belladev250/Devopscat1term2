import React from "react";
import { shallow } from "enzyme";
import PowerCash from "./PowerCash";

describe("PowerCash Component", () => {
  let wrapper;
  const prop = {
    change: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<PowerCash {...prop} />);
  });

  it("renders", () => {
    expect(wrapper).not.toBeNull();
  });

  it("should call to buy", () => {
    wrapper.find("button").simulate("click");
    expect(prop.change).toHaveBeenCalledTimes(1);
  });

  it("should call change", () => {
    wrapper.find("button").simulate("click");
    expect(prop.change).toHaveBeenCalledTimes(1);
  });
});
