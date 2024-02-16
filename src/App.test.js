import { render, screen } from "@testing-library/react";
import App from "./App";
import TableReservations from "./components/TableReservations";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("Renders the TableReservations form", () => {
  render(<TableReservations />);
  const formElement = screen.getByText("Book now");
  expect(formElement).yoBeInTheDocument();
});
