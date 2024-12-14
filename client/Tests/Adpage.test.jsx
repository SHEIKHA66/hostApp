import { describe, it, expect } from "vitest"; // Import necessary testing functions from Vitest
import { render, screen } from "@testing-library/react"; // Import the render and screen function from React Testing Library to render React components in a test environment
//import About from "../src/Components/About";// Import the About component to be tested
import Adpage from "../src/Components/Adpage";
import React from "react"; // Import React to support JSX syntax
import "@testing-library/jest-dom";

describe("Adpage", () => {
  it("should render the Adpage component", () => {
    render(<Adpage />); // Render the Adpage component in the virtual DOM provided by the testing library
    //Assertion: check if there is an h1 element
    const adpageElement = screen.getByRole("heading", { level: 1 });
    expect(adpageElement).toBeInTheDocument();
  });
});

//Test Case 3
it("should have the text Adpage", () => {
  render(<Adpage />);
  const text = screen.queryByText(/Adpage/i);
  expect(text).toBeInTheDocument();
});

//Test Case 4
it("should have the image", () => {
  render(<Adpage />);
  const image = screen.getByAltText("adimage");
  expect(image).toHaveClass("userImage");
});
