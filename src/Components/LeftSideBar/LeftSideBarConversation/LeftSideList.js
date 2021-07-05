import React from "react";
import { Avatar } from "@material-ui/core";
import Styles from "./LeftSideBarList.module.css";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import { Link } from "react-router-dom";
import APIIcon from "../../../Assets/API.svg";
import FACEBOOKIcon from "../../../Assets/FACEBOOK.svg";
import TWITTERIcon from "../../../Assets/TWITTER.svg";
import WHATSAPPIcon from "../../../Assets/WHATSAPP.svg";

function LeftSideList(props) {
  const clientIcon = () => {
    if (props.channelType.upperCase() === "WHATSAPP") {
      return WHATSAPPIcon;
    } else if (props.channelType.upperCase() === "TWITTER") {
      return TWITTERIcon;
    } else if (props.channelType.upperCase() === "FACEBOOK") {
      return FACEBOOKIcon;
    } else {
      return APIIcon;
    }
  };
  return (
    <Link to={`/conversations/${props.id}`}>
      <div className={Styles.sidebarChats}>
        <Avatar src={`LanguageOutlinedIcon`} />
        <div className={Styles.sidebarChats__info}>
          <h2>
            {props.name.trim().length > 10
              ? `${props.name.substring(0, 10)}...`
              : props.name}
          </h2>
          <p>
            {props.lastMessage.length > 30
              ? `${props.lastMessage.substring(0, 30)}...`
              : props.lastMessage}
          </p>
          <span>{props.clientLastActivity}</span>
        </div>
      </div>
    </Link>
  );
}

export default LeftSideList;
