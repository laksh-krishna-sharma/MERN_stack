const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent, 
    ] });

client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    else{
        message.reply({
            content: "Hi from bot",
        })
    }
});

client.on("interactionCreate", (interaction) => {
    interaction.reply("What is the similarity between an airplane and a woman? Both have cockpit")
});

client.login("MTIyOTc0NzkwNTQ0Mzc5MDg1OQ.Gt4YD7.LYDLrpGBaZRysT0a2fxHHbxzw878S1d1STP0Qc");