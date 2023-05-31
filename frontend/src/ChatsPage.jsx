import { PrettyChatWindow } from "react-chat-engine-pretty";

// import { ChatEngine } from 'react-chat-engine';
import React from 'react'
const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={'4200f1f5-b2da-428e-8b98-748e631ec930'}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;