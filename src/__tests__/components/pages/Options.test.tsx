import Options from "../../../components/organisms/Options";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

describe("Scoopp quantity and selected toppings", () => {
  it("should update the subtotal when scoop option quantity is updated", async () => {
    const user = userEvent.setup();
    render(<Options optionsType={"scoops"} />);

    const scoopsTotal = screen.getByText(/Scoops total : \$/i, {
      exact: false,
    });
    expect(scoopsTotal).toHaveTextContent("0.00");

    const chocolateInput = await screen.findByRole("spinbutton", {
      name: /Chocolate/i,
    });

    await user.clear(chocolateInput);
    await user.type(chocolateInput, "1");
    expect(scoopsTotal).toHaveTextContent("2.00");

    const vanillaInput = await screen.findByRole("spinbutton", {
      name: /Vanilla/i,
    });

    await user.clear(vanillaInput);
    await user.type(vanillaInput, "1");

    await expect(scoopsTotal).toHaveTextContent("4.00");

    await user.clear(chocolateInput);
    await user.type(chocolateInput, "2");

    expect(scoopsTotal).toHaveTextContent("6.00");

    await user.clear(chocolateInput);
    await user.type(chocolateInput, "1");
    expect(scoopsTotal).toHaveTextContent("4.00");

    await user.clear(vanillaInput);
    await user.type(vanillaInput, "0");

    await expect(scoopsTotal).toHaveTextContent("2.00");

    await user.clear(chocolateInput);
    await user.type(chocolateInput, "0");
    expect(scoopsTotal).toHaveTextContent("0.00");
  });
});
