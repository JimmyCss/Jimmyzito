const execute = (bot, msg, args) => {
  const queue = bot.queues.get(msg.guild.id);
  if (!queue) {
    return msg.reply("Não existe nenhuma música sendo reproduzida para alterar o volume.");
  }
  const volume = Number(args.join(""));
  console.log(volume);
  if (isNaN(volume) || volume < 0 || volume > 10) {
    return msg.repley("O volume deve ser um valor entre o a 10.");
  }
  queue.dispatcher.setVolume(volume/10);
  queue.volume = volume;
  bot.queues.set(msg.guild.id, queue);
};

module.exports = {
  name: "vol",
  help: "Ajuste o volume numa escola de 0 a 10",
  execute,
};