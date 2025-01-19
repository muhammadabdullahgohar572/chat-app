import { NextResponse } from "next/server";
import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";

const apiKey = "bxfuxpqtdst7";
const apiSecret =
  "vzszktvcwdhbkkzzt8wp4cfujykjucgjnx23x874v7822a6z4hp3rc34sp4xc8rh";

export const POST = async (request) => {
  try {
    const user = await request.json();

    const serverClient = StreamChat.getInstance(apiKey, apiSecret);

    const token = serverClient.createToken(user.data.id);

    await clerkClient.users.updateUserMetadata(user.data.id, {
      publicMetadata: { token },
    });

    const slugs = [
      "Python",
      "JavaScript",
      "React",
      "CSS",
      "Web Development",
    ];

    for (const item of slugs) {
      const channel = serverClient.channel("messaging", item, {
        image: "https://getstream.io/random_png/?name=" + item,
        name: capitalize(item) + " Chat",
        members: [user.data.id],
        created_by_id: user.data.id,
      });

      await channel.create();
      await channel.addMembers([user.data.id]);
    }

    return NextResponse.json(
      { message: "Token generated and channels created successfully.", token },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Failed to complete operation.", error: error.message },
      { status: 500 }
    );
  }
};

function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
