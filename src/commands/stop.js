const execute = (bot, msg, args) => {
  const queue = bot.queues.get(msg.guild.id);
  if (!queue) {
    return msg.reply("Não existe nenhuma música sendo reproduzida.");
  }
  queue.songs = [];
  bot.queues.set(msg.guild.id, queue);
  queue.dispatcher.end();
};

module.exports = {
  name: "stop",
  help: "Parar as reproduções de músicas no discord.",
  execute,
};