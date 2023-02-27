import Options from "../../../components/organisms/Options";
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("ScoopOptions", () => {
  it("should display name for each scoop", async () => {
    render(<Options optionsType={"scoops"} />);

    // const user = userEvent.setup();

    const scoopNames = await waitFor(() => screen.findAllByRole("img"));

    await waitFor(() => expect(scoopNames).toHaveLength(2));
    /* expect(scoopNames.map((img) => img.getAttribute("alt"))).toEqual([
    "Chocolate scoop",
    "Vanilla scoop",
    ]);*/
  });
});
