import React from "react";
import HomePage from "./HomePage";
import { create } from "react-test-renderer";

it("should match snapshot", () => {
  const tree = create(<HomePage />).toJSON();
  expect(tree).toMatchSnapshot();
});
