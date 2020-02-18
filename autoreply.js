const Discord = require('discord.js')
const client = new Discord.Client()

client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }

    receivedMessage.channel.send("Message received: " + receivedMessage.content)
})

client.login("NjM0MDk2NTA5NTI4NDQwODUz.XksG_g.AZzAP1Okwc1i7O85lodoWHXVIp0") // Replace XXXXX with your bot token