import { REST, Routes } from "discord.js";
import { message } from "./message";

const rest = new REST().setToken(process.env.TOKEN as string);
try {
  await rest.post(Routes.channelMessages(process.env.CHANNEL_ID as string), {
    body: {
      content: message,
    },
  });
} catch (error) {
  console.error(error);
}
