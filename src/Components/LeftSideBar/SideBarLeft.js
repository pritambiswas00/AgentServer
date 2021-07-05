import React, { useState, useEffect, useContext } from "react";
import Styles from "./SideBarLeft.module.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import LeftSideList from "./LeftSideBarConversation/LeftSideList";
import { getConversations } from "../../APIUtlis/APIUtlis";
import Agent_Context from "../../Store/agent__Context";
import DropDown from "../Layout/Dropdown/Dropdown";

function SidebarLeft() {
  const [list, setList] = useState([]);
  const agentContext = useContext(Agent_Context);
  const { agentInfo } = agentContext;
  console.log(agentInfo, "After login Passing agent details");

  useEffect(() => {
    const conversationsList = getConversations(
      agentInfo.token,
      agentInfo.accountname,
      agentInfo.Agent
    );
    conversationsList.then((lists) => {
      setList(lists.data);
      console.log(lists);
    });
  }, [agentInfo]);

  return (
    <div className={Styles.sidebar}>
      <div className={Styles.sidebar__header}>
        <Avatar />
        <div className={Styles.sidebar__headerRight}>
          <DropDown />
        </div>
      </div>
      <div className={Styles.sidebar__search}>
        <div className={Styles.sidebar__searchContainer}>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </div>
        <input type="text" placeholder="Search Conversation" />
      </div>
      <div className={Styles.sidebar__chats}>
        {list.map((conversation) => {
          return (
            <LeftSideList
              key={conversation.conversation.id}
              id={conversation.conversation.id}
              name={conversation.sender.name}
              lastMessage={conversation.conversation.lastmessage}
              clientLastActivity={conversation.conversation.createdAt}
              channelType={
                conversation.conversation.additionalAttributes.channelType
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default SidebarLeft;
