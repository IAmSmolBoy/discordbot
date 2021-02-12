module.exports = {
    name: "ban",
    description: "Get lost!",
    execute(message, args) {
        const member = message.mentions.user.first()
        if (member) {
            const Target = messageguildmembers.cache.get(member.id)
            Target.ban()
            message/channel.send(`${member.id} has been banned`)
        } else {
            message.channel.send("He doesn't exist")
        }
    }
}