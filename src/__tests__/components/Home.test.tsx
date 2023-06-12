/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import Home from "../../components/Home";

describe("Home", () => {
  test("should render the Home component", () => {
    const screen = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const welcomeText = screen.getByText("Optimise your healthspan");

    expect(welcomeText).toBeDefined();
  });
});
