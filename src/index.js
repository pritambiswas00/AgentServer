import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AgentContextProvider from "./Store/agent_Context_Provider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AgentContextProvider>
      <App />
    </AgentContextProvider>
  </StrictMode>,
  rootElement
);
