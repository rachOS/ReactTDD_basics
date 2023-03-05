import { render, screen, waitFor } from "@testing-library/react";
import Scoops from "components/organisms/Scoops";
import { server } from "../../../mocks/server";
import { rest } from "msw";

describe("Alert", () => {
  it("should display an alert when there is an server error", () => {
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
      const alerts = await screen.findAllByRole("alert", {
        name: /there is an error/i,
      });

      expect(alerts).toHaveLength(2);
    }).then((r) => r);
  });
});
