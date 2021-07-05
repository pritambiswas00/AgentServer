import React, { useContext } from "react";
import "./styles.css";
import SideBarLeft from "./Components/LeftSideBar/SideBarLeft";
import Login from "./Components/Login/Login";
import EmptyBox from "./Components/Layout/EmptyBox/EmptyBox";
import Agent_Context from "./Store/agent__Context";
import MessageList from "./Components/MessageList/MessageList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const agentContext = useContext(Agent_Context);
  const { agentInfo } = agentContext;
  console.log(agentInfo, "In APP>JS");
  return (
    <div className="app">
      {agentInfo.success === true ? (
        <div className="app__body">
          <Router>
            <SideBarLeft />
            <Switch>
              <Route
                path="/conversations/:conversationid"
                component={MessageList}
              />
              <Router path="/" exact>
                <EmptyBox />
              </Router>
            </Switch>
          </Router>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
