const { REST, Routes, Client } = require('discord.js');

const commands = [
    {
      name: 'joke',
      description: 'Replies with Pong!',
    },
  ];
  
  const rest = new REST({ version: '10' }).setToken("MTIyOTc0NzkwNTQ0Mzc5MDg1OQ.Gt4YD7.LYDLrpGBaZRysT0a2fxHHbxzw878S1d1STP0Qc");
  
(async () => {
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands('1229747905443790859'), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
  })();
