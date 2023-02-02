import { render, screen } from "@testing-library/react";
import Dashboard from "../Pages/Dashboard";

describe("Dashboard", () => {
  test("should render without error", () => {
    render(<Dashboard />);
    expect(screen.getByRole("heading", { name: /users/i })).toBeInTheDocument();
  });
});