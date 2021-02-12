module.exports = {
    name: "clear",
    description: "Rids the place of your unholy mess",
    async execute(message, args) {
        if (!args[0]) {
            return message.reply("Dumb bitch you're supposed to type a number");
        } 
        else if (isNaN(args[0])) {
            return message.reply("Please stop")
        }
        else if (args[0] > 100 || args[0] < 1) {
            return message.reply("Hahaha you're only allowed to delete between 1 and 100 messages")
        }
        else {
            await message.channel.messages.fetch({limit: args[0]}).then(messages => {
                message.channel.bulkDelete(messages)
            })
        }
    }
}