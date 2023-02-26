import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:5173/scoops", (req, res, ctx) => {
    return res(
      ctx.delay(500),
      ctx.json([
        {
          name: "Chocolate",
          path: "src/images/chocolate.jpeg",
        },
        {
          name: "Vanilla",
          path: "src/images/vanilla.jpeg",
        },
      ])
    );
  }),
];
