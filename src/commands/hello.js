const execute = (bot, msg, args) => {
  return msg.reply("Hello");
};

module.exports = {
  name: "hello",
  help: "Mostre os comandos do bot",
  execute,
};
