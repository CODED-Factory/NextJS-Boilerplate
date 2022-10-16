import { render, screen } from "@testing-library/react";
import Home from "src/pages/index";
import React from "react";

describe("Home", () => {
  it("renders a heading", () => {
    const { container } = render(<Home />);

    const heading = screen.getByRole("heading", {
      name: "Hello Next.js 👋",
    });

    expect(heading).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
