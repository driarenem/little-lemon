import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import TableReservations from "./components/TableReservations";

describe("TableReservations", () => {
  it("should submit the form with correct data", () => {
    const consoleSpy = jest.spyOn(console, "log");

    render(
      <Router>
        <TableReservations />
      </Router>
    );

    fireEvent.change(screen.getByLabelText("Choose a Date"), {
      target: { value: "2024-02-16" },
    });
    fireEvent.change(screen.getByLabelText("Choose time"), {
      target: { value: "19:00" },
    });
    fireEvent.change(screen.getByLabelText("Number of Guests"), {
      target: { value: "4" },
    });
    fireEvent.submit(screen.getByText("Reserve a table"));

    expect(consoleSpy).toHaveBeenCalledWith("Data sent");

    consoleSpy.mockRestore();
  });
});
