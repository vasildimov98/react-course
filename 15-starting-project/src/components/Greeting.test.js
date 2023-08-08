import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting", () => {
  test("should render Hello word in h1", () => {
    render(<Greeting />);
    const helloElement = screen.getByText("Hello, world!");
    expect(helloElement).toBeInTheDocument();
  });

  test("should render Good day! in p", () => {
    render(<Greeting />);
    const goodDayElement = screen.getByText("Good day!");
    expect(goodDayElement).toBeInTheDocument();
  });

  test("should render Good morning! in p", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const goodMorningElement = screen.getByText("Good morning!");
    expect(goodMorningElement).toBeInTheDocument();
  });

  test("should not render Good day! in p", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const goodDayElement = screen.queryByText("Good day!");
    expect(goodDayElement).toBeNull();
  });
});
