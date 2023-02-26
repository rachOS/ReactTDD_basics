import { render, screen } from "@testing-library/react";
import { SummaryForm } from "components/molecules";
import userEvent from "@testing-library/user-event";

describe("SummaryForm", () => {
  describe("confirm button", () => {
    it("the confirm button should be disabled when checkbox is checked", async () => {
      render(<SummaryForm />);
      const user = userEvent.setup();

      const confirmOrderButton = screen.getByRole("button", {
        name: "Order",
      });

      const checkBox = screen.getByRole("checkbox", {
        name: /you must accept condition before ordering/i,
      });

      expect(confirmOrderButton).toBeDisabled();
      expect(checkBox).not.toBeChecked();

      await user.click(checkBox);

      expect(checkBox).toBeChecked();
      expect(confirmOrderButton).toBeEnabled();

      await user.click(checkBox);

      expect(confirmOrderButton).toBeDisabled();
      expect(checkBox).not.toBeChecked();
    });
  });

  describe("Popover", () => {
    it("should appear on mouse hover", async () => {
      render(<SummaryForm />);
      const user = userEvent.setup();

      const popover = screen.queryByRole("tooltip", {
        name: /popover/i,
      });

      const checkBox = screen.getByRole("checkbox", {
        name: /you must accept condition before ordering/i,
      });

      expect(popover).not.toBeInTheDocument();

      await user.hover(checkBox);

      expect(popover).not.toBeInTheDocument();

      await user.unhover(checkBox);

      expect(popover).not.toBeInTheDocument();
    });
  });
});
