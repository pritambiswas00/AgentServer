import axios from "../axios/axios";

const getNames = async () => {
  const names = await axios.get("/getAccounts");
  return names;
};

const login = async (email, password, accountname) => {
  // axios.post("/signin", {
  //   email: email,
  //   password: password,
  //   accountname: accountname
  // }).then(agent=>{
  //   return agent.json()
  // }).then(res=>{
  //   console.log(res)
  // }).catch(error=>{
  //   console.log(error)
  // });
  const setting = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password,
      accountname: accountname
    })
  };
  const response = await fetch("http://localhost:5000/signin", setting);
  const agentDetails = await response.json();
  return agentDetails;
};

const getConversations = async (token, accountname, agentid) => {
  const setting = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  };

  const response = await fetch(
    `http://localhost:5000/account/${accountname}/agent/${agentid}/conversations?status=open`,
    setting
  );
  const conversationsList = await response.json();
  console.log(conversationsList);
  return conversationsList;
};

const getMessages = async (token, accountname, agentid, conversationid) => {
  // const setting = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${token}`
  //   },
  //   body: JSON.stringify({
  //     accountname: accountname,
  //     agentid: agentid,
  //     conversationid: conversationid
  //   })
  // };
  // const response = await fetch(
  //   `http://localhost:5000/account/conversations/messages`,
  //   setting
  // );
  // const messages = await response.json();
  // console.log(messages);
  // return messages;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  const body = JSON.stringify({
    accountname: accountname,
    agentid: agentid,
    conversationid: conversationid
  });
  const response = await axios.post(
    "/account/conversations/messages",
    body,
    headers
  );
  console.log(response, "in APIUtlis");
};

export { getNames, login, getConversations, getMessages };
