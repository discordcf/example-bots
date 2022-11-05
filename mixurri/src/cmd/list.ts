import { User } from '../storage/types';
import { formatUserId } from '../utils/utils';
import { ApplicationCommand, Command, InteractionResponse} from 'cloudflare-discord-bot'

declare const MIXURRI: any;

export const listCommand: Command<any> = [
  {
    name: "list",
    description: "List players ready to play",
  },
  (interaction: any): InteractionResponse => {
    const guildId = interaction.guild_id;
    let users: User[] = MIXURRI.get(guildId, { type: "json" });
  
    if (users === null) {
      users = [];
    }
  
    return {
      type: 4,
      data: {
        content: `Players ready to play the match:\n\n${users.map(user => formatUserId(user.id)).join(" ")}`,
        allowed_mentions: {
            users: users.map(user => user.id),
        },
      },
    };
  }
]
