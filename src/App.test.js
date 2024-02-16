import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TableReservations from "./TableReservations";

describe("TableReservations", () => {
  it("should submit the form with correct data", () => {
    render(<TableReservations />);

    fireEvent.change(screen.getByLabelText("Choose a Date"), {
      target: { value: "2024-02-16" },
    });
    fireEvent.change(screen.getByLabelText("Choose time"), {
      target: { value: "19:00" },
    });
    fireEvent.change(screen.getByLabelText("Number of Guests"), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText("Occasion"), {
      target: { value: "birthday" },
    });

    fireEvent.submit(screen.getByText("Reserve a table"));

    expect(console.log).toHaveBeenCalledWith("Data sent");
  });
});
