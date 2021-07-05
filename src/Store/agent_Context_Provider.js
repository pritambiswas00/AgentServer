import React, { useReducer } from "react";
import Agent_Context from "./agent__Context";

const defaultAgentState = {
  agentInfo: {}
};

const agentReducer = (state, action) => {
  switch (action.type) {
    case "SET_AGENT":
      return {
        ...state,
        agentInfo: action.agent
      };
    default:
      return defaultAgentState;
  }
};

const AgentContextProvider = (props) => {
  const [agentState, dispatch] = useReducer(agentReducer, defaultAgentState);
  const addAgentHandler = (agentDetails) => {
    dispatch({
      type: "SET_AGENT",
      agent: agentDetails
    });
  };
  console.log(agentState, "Agent State");
  const contextValue = {
    agentInfo: agentState.agentInfo,
    addAgent: addAgentHandler
  };
  return (
    <Agent_Context.Provider value={contextValue}>
      {props.children}
    </Agent_Context.Provider>
  );
};

export default AgentContextProvider;
