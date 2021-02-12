module.exports = {
    name: "checkperm",
    description: "This checks if you are powerful enough to crush people's dreams",
    execute(message, args) {
        let role = message.guild.roles.cache.find(r => r.name === "Overlord")
        if (message.member.permissions.has("KICK_MEMBERS") || message.member.permissions.has("BAN_MEMBERS")) {
            message.channel.send("You have been bestowed the power to crush others' hope and dreams")
        }
        else {
            message.channel.send("Dumbass")
        }
    }
}