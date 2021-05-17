client.on("message", message => {
  if (message.content.startsWith(`${prefix}about`)) {
    const tnx = new Discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())
      .setColor("#FFD73F")
      .setTitle(`Info about ${client.user.username}`,true)
      .addField("<a:emoji_4:839173311132991558> | **Name Bot**", `${client.user.tag}`, true)
      .addField("<a:emoji_5:839440477917020160> | **ID Bot**", `${client.user.id}`, true)
      .addField("<a:emoji_6:839441980089958430> | **Servers**", `${client.guilds.cache.size}`, true)
      .addField("<a:emoji_7:839442980263165982> | **Users**", `\`${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}\``, true)
      .addField("<a:emoji_8:839444009378381834> | **channels**", `${client.channels.cache.size}`, true)
      .addField("<a:emoji_9:839444891175092255> | **Owner Bot**", `<@755566952449310842>`, true)
      .addField("<a:emoji_10:839446922174398464> | **Prefix Bot**", `${prefix}help`, true)
      .setFooter("Sun Music");

    message.channel.send(tnx);
  }
});
