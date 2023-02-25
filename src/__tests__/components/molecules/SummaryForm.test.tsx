import { fireEvent, render, screen } from "@testing-library/react";
import { SummaryForm } from "components/molecules";

describe("SummaryForm", () => {
  describe("confirm button", () => {
    it("the confirm button should be disabled when checkbox is checked", () => {
      render(<SummaryForm />);

      const confirmOrderButton = screen.getByRole("button", {
        name: "Order",
      });

      const checkBox = screen.getByRole("checkbox", {
        name: "Confirm order",
      });

      expect(confirmOrderButton).toBeInTheDocument();
      expect(confirmOrderButton).toBeDisabled();

      expect(checkBox).toBeInTheDocument();
      expect(checkBox).not.toBeChecked();

      fireEvent.click(checkBox);

      expect(checkBox).toBeChecked();
      expect(confirmOrderButton).toBeEnabled();
    });
  });
});
