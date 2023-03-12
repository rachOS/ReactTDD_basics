import { JSXElementConstructor, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { OrderDetailsProvider } from "./contexts/ordersContext";

const renderWithContext = (
  ui: ReactElement<any, string | JSXElementConstructor<any>>,
  options?: RenderOptions<any>
): void => {
  render(ui, { wrapper: OrderDetailsProvider, ...options });
};
export * from "@testing-library/react";

export { renderWithContext as render };
