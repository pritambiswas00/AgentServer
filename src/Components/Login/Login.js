import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import Input from "../UI/Input";
import { useState, useEffect, useRef } from "react";
import SelectOption from "../UI/Select";
import Styles from "./Login.module.css";
import { getNames, login } from "../../APIUtlis/APIUtlis";
import Agent_Context from "../../Store/agent__Context";

function Login() {
  const [accountNames, setAccountNames] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const agentContext = useContext(Agent_Context);
  const accountName = useRef("");

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    const names = getNames();
    names
      .then((values) => {
        setAccountNames(values.data.AccountNames);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const selectHandleChange = (e) => {
    accountName.current = e.target.value;
    console.log(accountName.current);
  };

  const onLoginHandler = () => {
    const agentDetails = {
      email: email,
      password: password,
      accountname: accountName.current
    };
    const agent = login(
      agentDetails.email,
      agentDetails.password,
      agentDetails.accountname
    );
    agent
      .then((details) => {
        console.log(details);
        const agentInfo = {
          ...details,
          accountname: agentDetails.accountname
        };
        agentContext.addAgent(agentInfo);
      })
      .catch((error) => {
        console.log(error);
      });
    setEmail("");
    setPassword("");
    accountName.current = null;
  };

  return (
    <div className={Styles.login}>
      <div className={Styles.login__container}>
        <h1>LOGIN</h1>
        <div className={Styles.input}>
          <Input
            label="USERNAME"
            input={{
              id: "email",
              type: "text",
              placeholder: "Email"
            }}
            change={onEmailHandler}
            value={email}
          />
          <Input
            label="PASSWORD"
            input={{
              id: "password",
              type: "password",
              placeholder: "Password",
              min: "6",
              max: "10"
            }}
            change={onPasswordHandler}
            value={password}
          />
          <SelectOption
            label="ACCOUNT"
            value={accountName.current}
            id="accountnames"
            onSelectHandleChange={selectHandleChange}
            options={accountNames}
          />
        </div>
        <Button onClick={onLoginHandler}>Login</Button>
      </div>
    </div>
  );
}
export default Login;
