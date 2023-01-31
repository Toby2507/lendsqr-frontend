import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Login from "../Pages/Login";

interface typeIntoFormInterface {
  email?: string;
  password?: string;
}

const typeIntoForm = ({ email, password }: typeIntoFormInterface) => {
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const passwordInput = screen.getByLabelText(/password/i);
  email && userEvent.type(emailInput, email);
  password && userEvent.type(passwordInput, password);
  return { emailInput, passwordInput };
};
const submitForm = () => {
  userEvent.click(screen.getByRole('button', { name: /log in/i }));
};

afterEach(cleanup);
describe("Login Component Tests", () => {
  test("Input are initially empty", () => {
    render(<Login />, { wrapper: BrowserRouter });
    expect(screen.getByRole("textbox", { name: /email/i })).toHaveValue("");
    expect(screen.getByLabelText(/password/i)).toHaveValue("");
  });

  test("should be able to type an email", async () => {
    render(<Login />, { wrapper: BrowserRouter });
    const { emailInput } = typeIntoForm({ email: "toby@gmail.com" });
    expect(emailInput).toHaveValue("toby@gmail.com");
  });

  test("should be able to type password", async () => {
    render(<Login />, { wrapper: BrowserRouter });
    const { passwordInput } = typeIntoForm({ password: "123456" });
    expect(passwordInput).toHaveValue("123456");
  });

  describe("Login Error Handling", () => {
    test("should throw email and password required error", async () => {
      render(<Login />, { wrapper: BrowserRouter });
      expect(screen.queryByText(/email is required/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/password is required/i)).not.toBeInTheDocument();
      submitForm();
      expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
      expect(await screen.findByText(/password is required/i)).toBeInTheDocument();
    });

    test("should throw invalid email error", async () => {
      render(<Login />, { wrapper: BrowserRouter });
      expect(screen.queryByText(/email is invalid/i)).not.toBeInTheDocument();
      typeIntoForm({ email: "toby@gmail.c" });
      submitForm();
      expect(await screen.findByText(/email is invalid/i)).toBeInTheDocument();
    });
  });
});