import React from "react";

const AgentContext = React.createContext({
  agentInfo: {},
  addAgent: () => {}
  // conversations : [],
  // conversation_messages : []
});

export default AgentContext;
