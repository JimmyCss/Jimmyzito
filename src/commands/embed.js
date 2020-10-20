const MessageEmbed = require("discord.js").MessageEmbed;

// código de embed -> objetivo: fazer uma mensagem de bem vindos(as) aos novos no discord.
const execute = (bot, msg, args) => {
  console.log(msg.guild.splash);
  const embed = new MessageEmbed()
    .setColor("##000000")
    .setTitle(`Seja bem vindo, ${msg.author.username}!`)
    .setDescription("Esperamos que goste da comunicadade de energúmenos, por gentileza, leia as regras.")
    .setThumbnail(
      msg.author.avatar ?
      `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png`:
      `https://cdn.discordapp.com/embed/avatars/${msg.author.discriminator % 5}.png`)
    .setURL("https://discord.com/invite/vqT3kwa")
    .setAuthor("JimmyC",`https://cdn.discordapp.com/icons/${msg.guild.id}/${msg.guild.icon}.png`,
    "https://instagram.com/lipe.jimmy")
    .addFields([
      {
        name: "Atualmente existem",
        value: msg.guild.memberCount,
        inline: true,
      },
      {
        name: "nº",
        value: "...",
        inline: true,
      },
    ])
    .setTimestamp()
    .setFooter("Cuidado com os direitos autorais.",
    `https://cdn.discordapp.com/icons/${msg.guild.id}/${msg.guild.icon}.png`
    );

    msg.channel.send(embed);
  };

module.exports = {
  name: "embed",
  help: "Mostra o perfil do bot.",
  execute,
};