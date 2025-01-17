import { NextResponse } from "next/server";
import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server"; // Ensure Clerk is configured correctly
import { User } from "lucide-react";

const apiKey = "bxfuxpqtdst7";
const apiSecret =
  "vzszktvcwdhbkkzzt8wp4cfujykjucgjnx23x874v7822a6z4hp3rc34sp4xc8rh";

export const POST = async (request) => {
  try {
    // Parse the request body as JSON
    const user = await request.json();
    
    // Helper function to capitalize strings
    function capitalize(str) {
      if (!str) return ""; // Handle empty or undefined input
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    // Initialize the StreamChat client
    const serverClient = StreamChat.getInstance(apiKey, apiSecret);

    // Generate a token for the user
    const token = serverClient.createToken(user.data.id);
    console.log("Generated token:", token);  // Log the token to the console

    // Initialize Clerk client
    const client = await clerkClient();

    // Update user metadata with the token
    await client.users.updateUserMetadata(user.data.id, {
      publicMetadata: {
        token,
      },
    });

    // Define available slugs for chat creation
    const slugs = [
      "Python-chat",
      "JavaScript-chat",
      "React-chat",
      "CSS-chat",
      "Web Development-chat",
    ];

    // Create channels and add user to them
    for (const item of slugs) {
      const channel = serverClient.channel("messaging", item, {
        image: "https://getstream.io/random_png/?name=react",
        name: capitalize(item) + " Chat",
        members: [user.data.id],
        created_by_id: user.data.id,
      });
      
      // Create the channel
      await channel.create();
      console.log(`Created channel: ${channel.id}`);
      
      // Add the user to the channel
      await channel.addMembers([user.data.id]);
    }

    return NextResponse.json(
      { message: "Token generated successfully.", token },
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
