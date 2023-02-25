import { fireEvent, render, screen } from "@testing-library/react";
import { ToggleButtonColor } from "components/atoms/buttons";

describe("ToggleColorButton", () => {
  it("should have a default color to red", () => {
    render(<ToggleButtonColor />);

    const button = screen.getByRole("button", { name: "click to render blue" });

    expect(button).toBeInTheDocument();
  });
  it("should have a red background", () => {
    render(<ToggleButtonColor />);

    const button = screen.getByRole("button", { name: "click to render blue" });

    expect(button).toHaveClass("btn-bg-red");
  });

  describe("tooggle color", () => {
    it("should toggle to a blue background when clicked", () => {
      render(<ToggleButtonColor />);

      const button = screen.getByRole("button", {
        name: "click to render blue",
      });

      fireEvent.click(button);

      expect(button).toHaveClass("btn-bg-blue");
      expect(button).toHaveTextContent("click to render red");
    });

    it("should toggle from  blue to red background and vice versa when clicked multiple times", () => {
      render(<ToggleButtonColor />);

      const button = screen.getByRole("button", {
        name: "click to render blue",
      });

      fireEvent.click(button);

      expect(button).toHaveClass("btn-bg-blue");
      expect(button).toHaveTextContent("click to render red");

      fireEvent.click(button);

      expect(button).toHaveClass("btn-bg-red");
      expect(button).toHaveTextContent("click to render blue");

      fireEvent.click(button);

      expect(button).toHaveClass("btn-bg-blue");
      expect(button).toHaveTextContent("click to render red");
    });
  });
  describe("disabled button", () => {
    it("should be disable when chekbox is checked", () => {
      render(<ToggleButtonColor />);

      const button = screen.getByRole("button", {
        name: "click to render blue",
      });
      const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

      expect(checkbox).not.toBeChecked();
      expect(button).toBeEnabled();

      fireEvent.click(checkbox);

      expect(checkbox).toBeChecked();
      expect(button).toBeDisabled();
    });
  });
});
