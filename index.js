const express = require("express");
const Discord = require("discord.js"); //Conexão com a livraria Discord.js

const client = new Discord.Client(); //Criação de um novo Client

const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(
    `Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`
  );
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online


client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token