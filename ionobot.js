const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
})

client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }
    
    //checks for a specific command and returns the predefined output
if (receivedMessage.content == "!test"){
    
    //posts username, supporting message and the sent message to a specific channel
    client.channels.get("679390226711445514").send(receivedMessage.author + " needs help; " + receivedMessage.content)
}

    //receivedMessage.channel.send("Message received: " + receivedMessage.content)
})






bot_secret_token = "Njc5MDg4ODUzMDI5NzQ4NzM5.XksQ2w.ksdbgoPhAlbrbZdCvT3LnXVDxr4"

client.login(bot_secret_token)