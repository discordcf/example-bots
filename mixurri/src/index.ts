import { listCommand } from './cmd/list';
import { createApplicationCommandHandler, PermissionFlags, Permissions} from 'cloudflare-discord-bot';

declare const APPLICATION_ID: string;
declare const CLIENT_SECRET: string;
declare const PUBLIC_KEY: string;

/*
* To install guild commands (instantly), Discord should use the following URL:
*     https://discord.com/api/v8/applications/${applicationId}/guilds/${guild_id}/commands
*
* Therefore, you should pass a guildId in the Application.
*/
const applicationCommandHandler = createApplicationCommandHandler({
  applicationId: APPLICATION_ID,
  applicationSecret: CLIENT_SECRET,
  publicKey: PUBLIC_KEY,
  commands: [
    listCommand,
  ],
  permissions: new Permissions(
    [ 
      'AddReactions',
      'AttachFiles',
      'EmbedLinks',
      'SendMessages',
      'SendTTSMessages',
      'MentionEveryone',
      'UseExternalEmojis',
      'UseExternalStickers'
    ]
  )
});

addEventListener('fetch', (event) => {
  event.respondWith(applicationCommandHandler(event.request))
})
