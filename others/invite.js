const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `invite`,
  description: `Gives you an invite`,
  aliases: ["add"],
  cooldown: 3,
  edesc: "Type this command to get an invite link for the Bot, thanks for every Invite",
  execute(message, args, client) {
    //react with approve emoji
    message.react("<a:setting:813404135181385759>");
    //send the invite embed
    message.reply(new MessageEmbed().setColor("#146DF6").setTitle("").setDescription("<a:emoji_17:839459192631722025> **[Click Here](https://discord.com/api/oauth2/authorize?client_id=837868306131452004&permissions=8&scope=bot) to invite the bot.**")
    .setFooter(""));
  }
}
