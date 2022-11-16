const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fpost')
		.setDescription('sends a forum post'),
	async execute(interaction) {
		await interaction.reply('/post channel:botforum topic: hello test content: google.com');
	},
};