module.exports = {
    name: "ping",
    description: "This is ping pong",
    execute(message, args) {
        message.channel.send("pong")
    }
}