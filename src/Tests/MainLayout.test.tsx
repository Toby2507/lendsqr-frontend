import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "../context";
import MainLayout from "../Components/Core/MainLayout";

describe("Main Layout component Test", () => {
  test("should render without errors", () => {
    render(
      <BrowserRouter>
        <AppProvider>
          <MainLayout />
        </AppProvider>
      </BrowserRouter>
    );
    expect(screen.getByRole("img", { name: /lendsqr/i })).toBeInTheDocument();
  });
});