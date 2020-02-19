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
    
    receivedMessage.channel.send(receivedMessage.author + " Message received, admin team notified: " + receivedMessage.content)


   // var test = receivedMessage.content;
    //var shit = test.split(" ");
    //return shit[0];


if (receivedMessage.content.startsWith("*test") == true){

client.channels.get("679649137725276180").send(receivedMessage.author + " needs help; " + receivedMessage.content)

}






})






bot_secret_token = "Njc5NDYwMDM2NDQ3MTc0Njc5.Xk043A.uyvHAOpf1e17JsvJCZgTJEPq4AM"

client.login(bot_secret_token)






