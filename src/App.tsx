import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
if (!container) {
  throw new Error("no container to render to");
}
const root = createRoot(container);
root.render(<App />);
