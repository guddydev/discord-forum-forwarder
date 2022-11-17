## Description
This simple utility bot forwards posts (e.g., news stories) from a vanilla Discord channel to a Discord forum.

The bot expects a headline with an URL. Headlines longer than 99 characters are truncated and added to the body of the post

## How to run
0. Enable developer mode in your Discord settings
1. Create a Discord application and a bot and save the token and clientId.
2. Create a `config.json` with the token, clientId and guildId (obtained from the server settings). 
3. Replace the sourceId and forumId with the source channel you want to send from and to 
4. Run `node index.js` to start the bot. 

