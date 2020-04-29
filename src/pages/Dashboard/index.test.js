import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Component } from "./index";

describe("The Dashboard component", () => {
  let component;

  beforeAll(() => {
    component = render(<Component />);
  });

  test("renders the header", () => {
    const header = component.getByTestId("header");
    expect(header).toBeInTheDocument();
  });

  test("does not render the paragraph", () => {
    const { queryByText } = render(<Component />);
    const paragraph = queryByText("Hi agai", { exact: false });

    expect(paragraph).toBeNull();
  });

  test("renders the paragraph on click", () => {
    const { getByTestId, queryByText } = render(<Component />);
    const button = getByTestId("button");

    fireEvent.click(button, { button: 1 });
    const paragraph = queryByText("Hi aga", { exact: false });

    expect(paragraph).toBeInTheDocument();
  });
});
