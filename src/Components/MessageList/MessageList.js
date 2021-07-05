import { Avatar, IconButton } from "@material-ui/core";
import React, { useState, useEffect, useContext } from "react";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import { useParams } from "react-router-dom";
import Styles from "./MessageList.module.css";
import Button from "../UI/Button";
import { getMessages } from "../../APIUtlis/APIUtlis";
import Agent_Context from "../../Store/agent__Context";

function MessageList() {
  const [input, setInput] = useState("");
  const { conversationid } = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const agentContext = useContext(Agent_Context);
  const { agentInfo } = agentContext;
  console.log(agentInfo);
  //  useEffect(() => {
  //    setSeed(Math.floor(Math.random() * 5000));

  //  }, [roomId])

  useEffect(() => {
    console.log(conversationid, "Conversationid Changed ");
    console.log(agentInfo);
    if (conversationid) {
      getMessages(
        agentInfo.token,
        agentInfo.accountname,
        agentInfo.Agent,
        conversationid
      );
    }
  }, [conversationid]);

  return (
    <div className={Styles.message}>
      <div className={Styles.message__header}>
        <Avatar />
        <div className={Styles.message__headerInfo}>
          <h3>Hello</h3>
          <p>Paragraph</p>
        </div>
        <div className={Styles.message__headerRight}>
          <Button>Resolved</Button>
        </div>
      </div>
      <div className={Styles.message__body}>
        {/* {messages.map((message) => (
            <p key={message.name}className={`chat__messages ${message.name === user.displayName && "chat__recieve"}`}>
            {message.message}
            <span className="chat__roomName">
             {message.name}
            </span>
            <span className="chat__timeStamp">
            </span>
             </p>
           )) } */}
      </div>
      <div className={Styles.message__footer}>
        <form>
          <input
            className={Styles.Input}
            type="text"
            placeholder="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton type="submit" value="Submit">
            <SendRoundedIcon />
          </IconButton>
        </form>
      </div>
    </div>
  );
}

export default MessageList;
