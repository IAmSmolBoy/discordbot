module.exports = {
    name: "kick",
    description: "Begone!",
    execute(message, args) {
        const member = message.mentions.user.first()
        if (member) {
            const Target = messageguildmembers.cache.get(member.id)
            Target.kick()
            message/channel.send(`${member.id} has been kicked`)
        } else {
            message.channel.send("He doesn't exist")
        }
    }
}