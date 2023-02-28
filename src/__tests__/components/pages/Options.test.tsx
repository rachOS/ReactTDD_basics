import Options from "../../../components/organisms/Options";
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("ScoopOptions", () => {
  it("should display name for each scoop", async () => {
    render(<Options optionsType={"scoops"} />);

    const scoopNames = await screen.findAllByRole("img");

    expect(scoopNames).toHaveLength(2);
    expect(scoopNames.map((img) => img.getAttribute("alt"))).toEqual([
      "Chocolate scoop",
      "Vanilla scoop",
    ]);
  });
});
