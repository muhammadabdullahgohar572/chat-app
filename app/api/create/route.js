import { NextResponse } from "next/server";
import { StreamChat } from "stream-chat";

const apiKey = "bxfuxpqtdst7";
const apiSecret = "vzszktvcwdhbkkzzt8wp4cfujykjucgjnx23x874v7822a6z4hp3rc34sp4xc8rh";
const userId = "user_2rgBtewRMEKDqpdyC6EEazJcdAx";

export const GET = async () => {
  try {
    // Create a StreamChat server client
    const serverClient = StreamChat.getInstance(apiKey, apiSecret);
    
    // Generate a user token
    const token = serverClient.createToken(userId);

    // Log the token (optional, for debugging purposes)
    console.log("Generated User Token:", token);

    // Return a JSON response
    return NextResponse.json(token,{
      message: "Hi, I am Abdullah and I am a Software Engineer.",
      token, // Include the token in the response
    });
  } catch (error) {
    console.error("Error generating token:", error);
    return NextResponse.json(
      { message: "Failed to generate token.", error: error.message },
      { status: 500 }
    );
  }
};
