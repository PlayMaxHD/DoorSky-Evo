module.exports = {
  name: "chatbot",
  code: `$djsEval[
const Discord = require('discord.js');
const client = new Discord.Client();
const chatbot = require("espchatbotapi")
    chatbot.hablar(args).then(respuesta => {
    message.channel.send(respuesta)
   
    });
}]`
};
