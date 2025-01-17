"use client";
import { useState, useEffect } from "react";
import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

import "stream-chat-react/dist/css/v2/index.css";

const apiKey = "bxfuxpqtdst7";
const userId = "user_2rgBtewRMEKDqpdyC6EEazJcdAx";
const userName = "Abdullah";
const userToken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8ycmdCdGV3Uk1FS0RxcGR5QzZFRWF6SmNkQXgifQ.UvwncpL9XJBGEC85RVetxaB3uEIl0EaSGLF-kpch5bs";

const user = {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?name=${userName}`,
};

const ChatForms = ({slug}) => {
   
  // fun toTittleCASE

  function toTitleCase(str) {
    return str.replace(
      /\b[a-z]/g,
      (char) => char.toUpperCase()
      
    );
  }



  const [channel, setChannel] = useState(null);
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel("messaging", slug, {
      image: "https://getstream.io/random_png/?name=react",
      name:toTitleCase(slug.replace(/-/g, " "))+" Dicusss",
      members: [userId],
    });

    setChannel(channel);
  }, [client]);

  if (!client) return <div>Jisut a  Min</div>;

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default ChatForms;
