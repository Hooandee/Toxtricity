import React from "react";
import { fireEvent, render, unmount } from "@testing-library/react";
import { Component } from "./index";

jest.mock("../../hooks/Users", () =>
  jest.fn().mockReturnValue({ getUsersInfo: jest.fn().mockReturnValue({}) })
);

describe("The Dashboard component", () => {
  afterAll(() => {
    unmount();
  });

  test("renders the header", () => {
    const { getByTestId } = render(<Component />);

    const header = getByTestId("header");
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
