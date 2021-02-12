module.exports = {
    name: "boasttheranks",
    description: "This allows high ranking officials to assert dominance on the rest of the peasants",
    execute(message, args) {
        let role = message.guild.roles.cache.find(r => r.name === "Overlord")
        if (message.member.roles.cache.some(r => r.name === "Overlord")) {
            message.channel.send("All hail The Lord, NOW DIE!")
            message.member.roles.remove(role).catch(console.error)
        }
        else {
            message.channel.send("Hahaha, know your place peasant, but I'll let it slide, FOR NOW.")
            message.member.roles.add(role).catch(console.error)
        }
    }
}