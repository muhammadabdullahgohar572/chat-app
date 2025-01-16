import { NextResponse } from "next/server";
import { StreamChat } from "stream-chat";

const api_key = "bxfuxpqtdst7";
const api_secret = "vzszktvcwdhbkkzzt8wp4cfujykjucgjnx23x874v7822a6z4hp3rc34sp4xc8rh";
const user_id = "john";




export const GET = () => {
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  // Create User Token
  const token = serverClient.createToken(user_id);
  return NextResponse.json({
    meassage: "HI I AM ABDULLAH AND I AM SOFTWARE ENGIEER",
  });
};
