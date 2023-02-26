import { rest } from "msw";

export const handlers = [
  rest.get("/scoops", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "Chocolate",
        },
        {
          name: "Vanilla",
        },
      ])
    );
  }),
];
