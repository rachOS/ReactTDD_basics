import { JSXElementConstructor, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";

const renderWithContext = (
  ui: ReactElement<any, string | JSXElementConstructor<any>>,
  options: any //RenderOptions<any>
): void => {
  render(ui, { wrapper: <div />, ...options });
};
export * from "@testing-library/react";

export { renderWithContext as render };
