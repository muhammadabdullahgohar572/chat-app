import { NextResponse } from "next/server";
import { StreamChat } from "stream-chat";

const apiKey = "bxfuxpqtdst7";
const apiSecret =
  "vzszktvcwdhbkkzzt8wp4cfujykjucgjnx23x874v7822a6z4hp3rc34sp4xc8rh";

export const POST = async (request) => {
  try {
    // Parse the request body as JSON
    const serverClient = StreamChat.getInstance(apiKey, apiSecret);
    const user = await request.json();

    const token = serverClient.createToken(user.data.id);

    console.log("Token generated:", token);

    return NextResponse.json(
      { message: "Token generated successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error generating token:", error);
    return NextResponse.json(
      { message: "Failed to generate token.", error: error.message },
      { status: 500 }
    );
  }
};
