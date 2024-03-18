import { REST, Routes } from "discord.js";
import { message } from "./message";

const rest = new REST().setToken(process.env.TOKEN as string);
try {
  await rest.post(Routes.channelMessages(process.env.CHANNEL_ID as string), {
    body: {
      content: message,
    },
  });
  console.log("🍻 Successfully sent message to channel!");
} catch (error) {
  console.error(error);
  console.log("🍻 Failed to send message to channel!");
}
