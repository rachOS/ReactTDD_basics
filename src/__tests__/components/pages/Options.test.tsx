import Options from "../../../components/organisms/Options";
import { render, screen } from "@testing-library/react";

describe("ScoopOptions", () => {
  it("should display name for each scoop", async () => {
    render(<Options optionsType={"scoops"} />);

    const scoopNames = await screen.findAllByRole("img", { name: /scoop/i });

    expect(scoopNames).toHaveLength(2);
    expect(scoopNames.map((img) => img.getAttribute("alt"))).toEqual([
      "Chocolate scoop",
      "Vanilla scoop",
    ]);
  });
});

describe("ToppingOptions", () => {
  it("should display name for each topping", async () => {
    render(<Options optionsType={"toppings"} />);

    const scoopNames = await screen.findAllByRole("img", { name: /topping/i });

    expect(scoopNames).toHaveLength(3);
    expect(scoopNames.map((img) => img.getAttribute("alt"))).toEqual([
      "Cherries topping",
      "M&Ms topping",
      "Hot fudge topping",
    ]);
  });
});
