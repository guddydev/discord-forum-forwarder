const { Client, Events, GatewayIntentBits} = require('discord.js');
const { token } = require('./config.json');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent, 
	],
});

client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
})

client.on(Events.MessageCreate, msg => {
    sourceId = '1038477842712887366'
    forumId = '1036001673346285648'
    console.log(`a message was created in ${msg.channel.name}`)
    if (msg.channel.id == sourceId){
        var res = msg.content.split(/\r?\n/)
        const forum = client.channels.cache.get(forumId)
        var name = res[0]
        var content = res[1]
        var rest = ""
        if (res[0].length > 99) {
            name = res[0].substr(0, 99)
            rest = res[0].substr(99, res[0].length)
        }
        if (content != null){
            forum.threads
            .create({
            name: name,
            message: {
                content: rest+" \n"+content,
            },
            })
            .then(threadChannel => console.log(threadChannel))
            .catch(console.error);
        }
        }

});
client.login(token);

