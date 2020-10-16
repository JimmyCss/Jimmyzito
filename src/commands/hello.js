const execute = (bot,msg,args) => {
  return msg.reply("hello");
};

module.exports = {
  nome: "Ajuda",
  ajude: "Mostre os comandos do bot",
  execute,
};
