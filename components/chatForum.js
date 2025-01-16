
"use client"
import { useState, useEffect } from 'react';
import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';

const apiKey = 'bxfuxpqtdst7';
const userId = 'solitary-bar-7';
const userName = 'solitary';
const userToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic29saXRhcnktYmFyLTciLCJleHAiOjE3MzcwNzY1MzB9.wHMetTi_GKB36Pm3d0sk36RG4NZqIwZd07bKlcjDKP0';

const user = {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?name=${userName}`,
};

const ChatForms = () => {
  const [channel, setChannel] = useState(null);
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel('messaging', 'custom_channel_id', {
      image: 'https://getstream.io/random_png/?name=react',
      name: 'Talk about React',
      members: [userId],
    });

    setChannel(channel);
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

export default ChatForms;
