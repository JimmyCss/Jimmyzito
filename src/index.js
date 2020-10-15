const express = require("express");
const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const { dirname } = require("path");

dotenv.config();

const bot = new Discord.Client(); //Criação de um novo Client

bot.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync(path.join(__dirname, "/commands"))
  .filter((filename) => filename.endsWith(".js"));

for(var filename of commandFiles) {
  const command = require(`./commands/${filename}`);
  bot.commands.set(command.name, command);
}

console.log(commandFiles);

bot.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token

bot.on("ready", () => {
  console.log(`Bot conectado como ${bot.user.username}`);
});

bot.on("message", (msg) => {
  if(!msg.content.startsWith(process.env.PREFIX)) return;
  return msg.channel.send("hello");
});
