import { Command, InteractionDataType, InteractionResponseType } from "cloudflare-discord-bot";

export const hug: Command<InteractionDataType.ChatInput> = [
	{
		name: "hug",
		description: "Ask your bot for a friendly hug!",
	},
	async (interaction) => {
		const userId = interaction?.member?.user.id;
		// nullish and empty string checks redundant. See https://github.com/discordcf/discordcf/pull/14#discussion_r1007192199
		if (userId === undefined || userId === "" || userId === null) throw new Error(`User is undefined`);

		return {
			type: InteractionResponseType.ChannelMessageWithSource,
			data: {
				content: `Hello, <@${userId}>! *hugs*`,
				allowed_mentions: {
					users: [userId],
				},
			},
		};
	},
];
