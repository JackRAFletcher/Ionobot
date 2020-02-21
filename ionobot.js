const Discord = require('discord.js')
const client = new Discord.Client()
const {token}=require("./ionobot-config.json")

setInterval(function() {
    console.log("Ionobot Still Operational")
}, 60000);

client.on('ready', () => {
    console.log("Ionobot operational, connected as: " + client.user.tag)
})

client.on('message', (receivedMessage) => {
    
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return  
    }
    
    //split the users message up in to an array to be queried
    var test = receivedMessage.content;
    var firstword = test.split(" ");
    
    //check if the user tried a command and output serverside to track users use of the bot
    if(receivedMessage.content.charAt(0)=="!"){
    console.log("User "+ receivedMessage.author + " tried a command.")
    }

 //run logic on the first word the user sent   
switch(firstword[0]){
    
        case "!admin":
            //make sure the message was sent in the right channel
            if(receivedMessage.channel.id=="679450037893464064"){

            receivedMessage.channel.send(receivedMessage.author + " the admins now have your message ")    
            client.channels.get("679649137725276180").send(receivedMessage.author + " needs help. Their message:- " + receivedMessage.content)
       
            }
            else{
                //if the user sends !admin to ANY channel other than #admin-support the bot deletes it, notifies them and then deletes its own message
                receivedMessage.delete(1000);
                receivedMessage.channel.send(receivedMessage.author + ", wrong channel, I have deleted your message!").then(msg => {
                    msg.delete(10000)
                })
            }
            break;
        case "!ip":
            receivedMessage.channel.send(receivedMessage.author + " The IP address for the server is mc.iono.xyz ")
            break;
        case "!claim":
            receivedMessage.channel.send(receivedMessage.author + " If you want your base to be claimed: Make sure you have marked out the corners of your base with any block, then use the `!admin` command in #admin-support to let the admin team know you need help!  ")
            break;
        case "!dyn":
            receivedMessage.channel.send(receivedMessage.author + " The Dynmap link is; http://dyn.iono.xyz/ ")
            break;
        case "!f": 
            receivedMessage.channel.send(receivedMessage.author + " has given " + firstword[1] + " an F")
            break;
            
        case "!moto": 
        if(receivedMessage.channel.id=="597526794001842186"){
        receivedMessage.channel.send("Moto's meme of the month! https://cdn.discordapp.com/attachments/605465745282826250/680138514620219411/hatdfog.png")
        }
        else{
            //if the user sends !moto to ANY channel other than #media-share the bot deletes it, notifies them and then deletes its own message
            receivedMessage.delete(1000);
            receivedMessage.channel.send(receivedMessage.author + ", wrong channel, I have deleted your message!").then(msg => {
                msg.delete(10000)
            })
        break;
    }
} 
   
})


client.login(token)