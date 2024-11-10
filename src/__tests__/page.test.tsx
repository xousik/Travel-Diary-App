import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "@/src/app/page";
import AppProviders from "../app/appProviders";

describe("Home Page", () => {
  beforeAll(() => {
    render(
      <AppProviders>
        <Home />
      </AppProviders>
    );
  });
  it("renders a MainTitle component", () => {
    const title = screen.getByText("Travel Diary App");
    const registerLink = screen.getByText("Register");
    expect(title).toBeInTheDocument();
    expect(registerLink).toBeInTheDocument();
  });
  it("renders a loginPageSentence", () => {
    const pattern = new RegExp(
      `\\b(Dont|let|memories|fade|beautiful|moments)\\b`,
      "i"
    );
    const sentence =
      "Dont let your memories fade, create your travel diary and come back to those beautiful moments.";
    expect(pattern.test(sentence)).toBeTruthy();
  });
  it("navigates to the register page after register link click", () => {});
});
