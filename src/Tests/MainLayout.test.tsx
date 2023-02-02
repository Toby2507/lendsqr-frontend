import { cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "../context";
import MainLayout from "../Components/Core/MainLayout";
import userEvent from "@testing-library/user-event";

const app = (
  <BrowserRouter>
    <AppProvider>
      <MainLayout />
    </AppProvider>
  </BrowserRouter>
);
afterEach(cleanup);
describe("Main Layout component Test", () => {
  test("should render without errors", () => {
    render(app);
    expect(screen.getByRole("img", { name: /lendsqr/i })).toBeInTheDocument();
  });

  test("search bars are initially empty", () => {
    render(app);
    const searchInputs = screen.getAllByRole("searchbox");
    searchInputs.forEach(input => { expect(input).toHaveValue(""); });
  });

  test("should be able to type into search bar", () => {
    render(app);
    const searchInputs = screen.getAllByRole("searchbox");
    searchInputs.forEach(input => {
      userEvent.type(input, "search the app");
      expect(input).toHaveValue("search the app");
    });
  });
});