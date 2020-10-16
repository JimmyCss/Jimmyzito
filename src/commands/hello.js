const execute = (bot, msg, args) => {
  console.log(args)
  return msg.reply("olá, vou te ajudar: +ajuda");
};

module.exports = {
  name: "hello",
  help: "posso ajudar?",
  execute,
};
