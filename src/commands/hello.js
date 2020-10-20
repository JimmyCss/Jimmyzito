const execute = (bot, msg, args) => {
  console.log(args)
  return msg.reply(`olá, vou te ajudar: ${process.env.PREFIX}ajuda`);
};

module.exports = {
  name: "bot",
  help: "posso ajudar?",
  execute,
};
