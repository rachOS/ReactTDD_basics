import { render, screen, waitFor } from "@testing-library/react";
import Scoops from "components/organisms/Scoops";
import { rest } from "msw";
import { server } from "../../../mocks/server";

describe("Alert", () => {
  it("should display alert if url are wrong", () => {
    server.resetHandlers(
      rest.get("http://localhost:5173/scoops", (req, res, ctx) => {
        return res(ctx.status(500));
      }),
      rest.get("http://localhost:5173/toppings", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    render(<Scoops />);

    waitFor(async () => {
      const alert = await screen.findAllByRole("alert", {
        name: /"there is an error"/i,
      });
      expect(alert).toHaveLength(2);
    }).then((r) => r);
  });
});
