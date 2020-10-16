const execute = (bot, msg, args) => {
  let str = "**===== Comandos =====**\n\n"
  bot.commands.forEach(command => {
    if (command.help) {
      str += `**comando**: ${process.env.PREFIX}${command.name}\n`
      str += `**descrição**: ${command.help}\n`
      str += '\n'
    }
  })

  return msg.channel.send(str)
};

module.exports = {
  name: 'ajuda',
  help: 'Lista de comandos',
  execute
}