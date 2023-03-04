import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:5173/scoops", (req, res, ctx) => {
    return res(
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
  rest.get("http://localhost:5173/toppings", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "Cherries",
          path: "src/images/cherries.jpeg",
        },
        {
          name: "M&Ms",
          path: "src/images/m-and-m-s.jpeg",
        },
        {
          name: "Hot fudge",
          path: "src/images/hot-fudge.jpeg",
        },
      ])
    );
  }),
];
