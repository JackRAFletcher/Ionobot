const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    // List servers the bot is connected to
    console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)

        // List all channels
        guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
        })
    })
})

client.login("NjM0MDk2NTA5NTI4NDQwODUz.XksG_g.AZzAP1Okwc1i7O85lodoWHXVIp0") // Replace XXXXX with your bot token