const MessageEmbed = require("discord.js").MessageEmbed;

// código de embed -> objetivo: fazer uma mensagem de bem vindos(as) aos novos no discord.
const execute = (bot, msg, args) => {
  const embed = new MessageEmbed()
    .setColor("##000000")
    .setTitle("Página do JimmyC no Facebook")
    .setURL("https://fb.gg/pgJimmyC")
    .setAuthor("JimmyC",`https://cdn.discordapp.com/icons/${msg.guild.id}/${msg.guild.icon}.png`,
    "https://instagram.com/lipe.jimmy");

  msg.channel.send(embed);
};

module.exports = {
  name: "embed",
  help: "Mostra o perfil do bot.",
  execute,
};