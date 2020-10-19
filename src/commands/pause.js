const help = require("./help");

const execute = (bot, msg, args) => {
  const queue = bot.queues.get(msg.guild.id);
  if (!queue) {
    return msg.reply("Não existe nenhuma música sendo reproduzida.");
  }
  queue.dispatcher.pause();
};

module.exports = {
  name: "pause",
  help: "Pausar a reprodução de música atual.",
  execute,
};