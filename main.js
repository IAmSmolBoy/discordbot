const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "-"
const token = ":)"
const fs = require("fs")
client.commands = new Discord.Collection()
const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"))
for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
}

client.once("ready", () => {
    console.log("The bot is almost completely out of order, why did you activate it? It's still not too late to- Oh god...")
})

client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()
    if (command === "help") {
        message.channel.send("Oh no, whatever will you do?")
        client.commands.forEach(e => {
            message.channel.send(e)
        })
    }
    try {
        client.commands.get(`${command}`).execute(message, args)
    } catch {
        if (command === "kick") {
            args.forEach(e => {
                
            })
        }
    }
})

client.login(token)