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

export const ChatForms = ({ slug, clerkUser }) => {
  function capitalize(str) {
    if (!str) return ""; // Handle empty or undefined input
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  const apiKey = "bxfuxpqtdst7";
  const userId = clerkUser.id;
  const userName = clerkUser.name;
  const userToken = clerkUser.token;

  console.warn({
    slug: slug,
    clerkUser: clerkUser,
    userId: userId,
    userName: userName,
    userToken: userToken,
  });

  const user = {
    id: userId,
    name: userName,
    image: `https://getstream.io/random_png/?name=${userName}`,
  };

  const [channel, setChannel] = useState();
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel("messaging", slug, {
      image: "https://getstream.io/random_png/?name=react",
      name: capitalize(slug) + " Chat",
      members: [userId],
    });

    setChannel(channel);
    channel.addMembers([userId]);
  }, [client]);

  if (!client) return <div>Setting up client & connection...</div>;

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
