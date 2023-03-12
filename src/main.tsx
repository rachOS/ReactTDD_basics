import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "app/App";

const root = createRoot(document.getElementById("root") as HTMLElement);

if (import.meta.env.MODE === "development") {
  // When development, setup the MSW.
  // import the worker (under the browser.ts file)
  import("./mocks/browser")
    .then(({ worker }) => {
      // Start the worker.
      worker
        .start()
        .then((r) => console.debug("-> worker", r))
        .catch((e) => console.error("Start the worker", e));
    })
    .then(() => {
      // Render the application.
      root.render(
        // <StrictMode>
        <App />
        // </StrictMode>
      );
    })
    .catch((e) => console.error("Render the application", e));
} else {
  // Render the application in production without the MSW.
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
