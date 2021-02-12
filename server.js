const dbd = require("dbd.js");

const bot = new dbd.Bot({
  sharding: true,
  shardAmount: 2,
  token: process.env.TOKEN,
  prefix: [
    "$getServerVar[prefix]",
    "<@779179437668171786>",
    "<@!779179437668171786>"
  ]
});

bot.variables({
  welcome: "Not set",
  chatbotchannel: "Not Set",
  Warns: "0",
  money: "0",
  bank: "0",
  suggest: "Not set",
  help: "0",
  xp: "0",
  prefix: "dr!",
  rr: "",
  rg: "",
  rrole: "",
  exp: "0",
  req: "1500",
  level: "1",
  sistemrank: "false",
  score: "0"
});

bot.status({
  text: "$serverCount servidores!!",
  type: "WATCHING",
  status: "Discord Android",
  time: 12
});

bot.status({
  text: "$allMembersCount Personas",
  type: "WATCHING",
  status: "Discord Android",
  time: 12
});

bot.onMessage();

bot.command({
  name: "role-create",

  code: `$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**
dr!$commandName $message

**Usado por:**
$username#$discriminator

**Server**
$serverName[$guildID]

**ServerID:**
$guildID}]

✅ El role-menu con el nombre **$message** se ha creado correctamente!
$setServerVar[rg;$splitText[1]$replaceText[$replaceText[$checkCondition[$splitText[1]==];true;];false;,]$splitText[2]]
$textSplit[$getServerVar[rg],"$replaceText[$message;|;]": "";,]
$onlyIf[$checkContains[$getServerVar[rg];"$message": "$getObjectProperty[$message]"]==false;❌ El role-menu con el nombre \ $message \ ya está creado
Utilice \ role-edit \ para editar el menú de roles
O \ role-delete \ para eliminarlo!]
$createObject[{$getServerVar[rg]}]
$argsCheck[>1;❌ Ingrese el nombre del  Role-menu que desea crear!]
$onlyPerms[manageroles;managechannels;❌ Necesita permiso de administración de roles para crear un menú de roles!]`
});

const role = `$replaceText[$replaceText[$checkCondition[$mentionedRoles[1]==];true;$splitText[4]];false;$mentionedRoles[1]]`;

bot.command({
  name: "role-edit",
  code: `$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!
**Comando:**
dr!$commandName $message

**Usado por:**
$username#$discriminator

**Server**
$serverName[$guildID]

**ServerID:**
$guildID}]

✅ el Role-menu Ha sido actualizado!
$setServerVar[rg;$replaceText[$getServerVar[rg];"$splitText[2]": "$getObjectProperty[$splitText[2]]";"$splitText[2]": "$getObjectProperty[$splitText[2]]$replaceText[$replaceText[$checkCondition[$getObjectProperty[$splitText[2]]==];true;];false;∆]'$splitText[3]':'${role}'"]]
$textSplit[$message; | ]
$onlyIf[$getTextSplitLength$textSplit[$getObjectProperty[$splitText[2]];∆]<20;❌ El rol máximo en un role-menu son 20!]
$onlyIf[$toLowercase[$splitText[1]]==add;]
$onlyIf[$roleExists[${role}]==true;❌ El rol con id \ ${role} \` no existe!]
$onlyIf[$checkContains[$getServerVar[rg];"$splitText[2]": "$getObjectProperty[$splitText[2]]"]==true;❌ El role-menu con nombre \`$splitText[2]\` no existe, créelo primero.]
$createObject[{$getServerVar[rg]}]
$onlyIf[$checkContains[$toLowercase[$splitText[1]];add;edit;remove]==true;❌ Las opciones disponibles son \ add \, \ edit \ y \ delete \.]
$textSplit[$message; | ]
$suppressErrors[❌ Usa: \`$getServerVar[prefix]role-edit add | <roleMenu> | <emoji> | <role>\`]
$onlyPerms[manageroles;managechannels;❌ Necesita permiso de administración de roles para editar role-menu!]`
});

const role1 = `$replaceText[$replaceText[$checkCondition[$mentionedRoles[1]==];true;$splitText[4]];false;$mentionedRoles[1]]`;
const role2 = `$replaceText[$replaceText[$checkCondition[$mentionedRoles[2]==];true;$replaceText[$replaceText[$checkCondition[$mentionedRoles[1]==];true;$splitText[6]];false;$mentionedRoles[1]]];false;$mentionedRoles[2]]`;

bot.command({
  name: "role-edit",
  code: `$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!
**Comando:**
dr!$commandName $message
**Usado por:**
$username#$discriminator

**Server**
$serverName[$guildID]

**ServerID:**
$guildID}]

✅el Role-menu Ha sido actualizado!
$setServerVar[rg;$replaceText[$getServerVar[rg];"$splitText[2]": "$getObjectProperty[$splitText[2]]";"$splitText[2]": "$replaceText[$getObjectProperty[$splitText[2]];'$splitText[3]':'${role1}';'$splitText[5]':'${role2}']"]]
$onlyIf[$roleExists[${role2}]==true;❌ El Rol con id \`${role2}\` no existe!]
$onlyIf[$roleExists[${role1}]==true;]
$onlyIf[$checkContains[$getServerVar[rg];"$splitText[2]": "$getObjectProperty[$splitText[2]]"]==true;]
$createObject[{$getServerVar[rg]}]
$onlyIf[$toLowercase[$splitText[1]]==edit;]
$textSplit[$message; | ]
$suppressErrors[❌ Usa: \`$getServerVar[prefix]role-edit edit | <roleMenu> | <emoji> | <role> | <newEmoji> | <newRole>\`]
$onlyPerms[manageroles;managechannels;]`
});

bot.command({
  name: "role-edit",
  code: `$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!
**Comando:**
dr!$commandName $message

**Usado por:**
$username#$discriminator

**Server**
$serverName[$guildID]

**ServerID:**
$guildID}]

✅ el Role-menu Ha sido actualizado!
$setServerVar[rg;$replaceText[$getServerVar[rg];$getObjectProperty[$getChannelVar[rrole]];$joinSplitText[∆]]]
$removeTextSplitElement[$replaceText[$findTextSplitIndex[];0;1]]
$textSplit[$replaceText[$getObjectProperty[$splitText[2]];'$splitText[3]':'${role}';];∆]
$setChannelVar[rrole;$splitText[2]]
$onlyIf[$roleExists[${role}]==true;]
$onlyIf[$checkContains[$getServerVar[rg];"$splitText[2]": "$getObjectProperty[$splitText[2]]"]==true;]
$createObject[{$getServerVar[rg]}]
$onlyIf[$toLowercase[$splitText[1]]==remove;]
$textSplit[$message; | ]
$suppressErrors[❌ Usa: \`$getServerVar[prefix]role-edit dele | <roleMenu> | <emoji> | <role>\`]
$onlyPerms[manageroles;managechannels;]`
});

bot.command({
  name: "role-delete",
  code: `$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**
dr!$commandName $message

**Usado por:**
$username#$discriminator

**Server**
$serverName[$guildID]

**ServerID:**
$guildID}]

✅ el Role-menu con nombre \`$message\` ha sido eliminado!
$setServerVar[rg;$joinSplitText[,]]
$removeTextSplitElement[$replaceText[$findTextSplitIndex[];0;1]]
$textSplit[$replaceText[$getServerVar[rg];$getObjectProperty[$message];];,]
$onlyIf[$checkContains[$getServerVar[rg];"$message": "$getObjectProperty[$message]"]==true;❌ El Role-menu con el nombre \`$message\` no existe!]
$createObject[{$getServerVar[rg]}]
$argsCheck[>1;❌ Debe especificar el role-menu que desea eliminar]
$suppressErrors[❌ Usa: \`$getServerVar[prefix]role-delete <roleMenu>\`]
$onlyPerms[manageroles;managechannels;❌ Necesita permiso de administración de roles para eliminar un role-menu!]`
});

bot.command({
  name: "role-setup",
  code: `$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!
**Comando:**
dr!$commandName $message

**Usado por:**
$username#$discriminator

**Server**
$serverName[$guildID]

**ServerID:**
$guildID}]

$sendMessage[✅ Reaction-role-menu ¡se ha establecido!;no]
$setMessageVar[rr;$replaceText[$replaceText[$getObjectProperty[$message];';"];∆;,];$getChannelVar[rrole]]
$reactionCollector[$getChannelVar[rrole];everyone;1;$joinSplitText[,];map-reactions]
$textSplit[$textSplitMap[map-reactions];\n]
$setChannelVar[rrole;$sendMessage[**$message**\n$textSplitMap[map-roles]\n\`Reacciona con el emoji a la izquierda del nombre del rol para obtener los roles.!\`;yes]]
$onlyIf[$joinSplitText[∆]!=;❌ El Role-menu Esta Vacio!]
$onlyIf[$checkContains[$getServerVar[rg];"$message": "$joinSplitText[∆]"]==true;❌  El Role-menu con el nombre \`$message\` no existe, crea uno primero!]
$ArgsCheck[>1;debes escribir el nombre del role-menu]
$textSplit[$getObjectProperty[$message];∆]
$createObject[{$getServerVar[rg]}]
$suppressErrors[❌ Hubo un error al configurar el reaction-role-menu.]
$onlyPerms[manageroles;managechannels;❌ Necesita permisos de administración de roles para configurar reaction-role-menu!]
$onlyBotPerms[manageroles;❌ I Necesito permiso de gestión de roles para realizar roles de reacción.!]`
});

bot.awaitedCommand({
  name: "map-reactions",
  code: `$splitText[2]$textSplit[$message[1];']`
});

bot.awaitedCommand({
  name: "map-roles",
  code: `$splitText[2] - $roleName[$splitText[4]]$textSplit[$message[1];']`
});

bot.onReactionAdd();
bot.reactionAddCommand({
  channel: "$channelID",
  code: `
$giveRoles[$authorID;$getObjectProperty[$replaceText[$replaceText[$emojiToString;<;#LEFT_CLICK#];>;#RIGHT_CLICK#]]]
$createObject[{$getMessageVar[rr]}]
$onlyIf[$getMessageVar[rr]!=;]
$onlyIf[$getChannelVar[rrole]!=;]
$onlyIf[$isBot==false;]`
});

bot.onReactionRemove();

bot.reactionRemoveCommand({
  channel: "$channelID",
  code: `
$takeRoles[$authorID;$getObjectProperty[$replaceText[$replaceText[$emojiToString;<;#LEFT_CLICK#];>;#RIGHT_CLICK#]]]
$createObject[{$getMessageVar[rr]}]
$onlyIf[$getMessageVar[rr]!=;]
$onlyIf[$getChannelVar[rrole]!=;]
$onlyIf[$isBot==false;]`
});

let img = `$replaceText[$userAvatar[$findMember[$message]];webp;png]`;
let userData = {
  xp: `$getUserVar[xp;$mentioned[1;yes]]`,
  requiredXP: `$getUserVar[req;$mentioned[1;yes]]`,
  level: `$getUserVar[level;$mentioned[1;yes]]`,
  status: `$status[$mentioned[1;yes]]`,
  name: `$username[$mentioned[1;yes]]`,
  discriminator: `$discriminator[$mentioned[1;yes]]`
};
bot.command({
  name: "rank",
  aliases: ["level", "r"],
  code: `$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**
dr!$commandName $message

**Usado por:**
$username#$discriminator

**Server**
$serverName[$guildID]

**ServerID:**
$guildID}]
$djsEval[const Discord = require('discord.js');
const canvacord = require("canvacord");
const rank = new canvacord.Rank().setAvatar("${img}").setLevel(${userData.level}, "Level", true).setCurrentXP(${userData.xp}).setRequiredXP(${userData.requiredXP}).setStatus(\`${userData.status}\`).setProgressBar("#FFFFFF", "COLOR").setUsername(\`${userData.name}\`).setDiscriminator(\`${userData.discriminator}\`).setRank(1, "Rank", false).renderEmojis(true);
rank.build()
 .then(data => {
 const attachment = new Discord.MessageAttachment(data, "RankCard.png");
 d.channel.send(attachment);
 });
]

$onlyIf[$isBot[$mentioned[1;yes]]==false;{description: Los bots no tienen rango en el servidor!}{color: ff0000}{author: :x: Usuario invalido.}]
`
});

bot.command({
  name: "$alwaysExcute",
  code: `
$setUserVar[score;$sum[$getUserVar[score;$authorID];$random[0;10];$authorID]
$onlyIf[$getServerVar[sistemrank]==true;]
$setUserVar[xp;$sum[$getUserVar[xp;$authorID];$random[0;10];$authorID]

`
});

bot.command({
  name: "$X",
  code: `
Felicidades!! <@$authorID>, has subido al nivel $getUserVar[level;$authorID]!!
$setUserVar[req;$sum[$getUserVar[req;$authorID];1500];$authorID]
$setUserVar[xp;0;$authorID]
$onlyIf[$getServerVar[sistemrank]==true;]
$setUserVar[level;$sum[$getUserVar[level;$authorID];1];$authorID]
$onlyIf[$getUserVar[req;$authorID]<$getUserVar[xp;$authorID];]
`
});

bot.command({
  name: "set-levels",
  code: `$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!
**Comando:**
dr!$commandName $message

**Usado por:**
$username#$discriminator

**Server**
$serverName[$guildID]

**ServerID:**
$guildID}]
  El comando ahora está  $replaceText[$replaceText[$message;on;**Activado**];off;**Desactivado**] correctamente!!
$setServerVar[sistemrank;$replaceText[$replaceText[$message;on;true];off;false]]
$onlyIf[$checkCondition[$message==on]$checkCondition[$message==off]!=falsefalse;Escribe **on** o **off**]
$onlyPerms[managemessages;{color:RED}{title:Error ❎}{description:no tienes suficientes permisos

**Permisos Requeridos:**
MANAGE_MESSAGE

**Nota:**
puedes pedirle a un admin o alguien que tenga este permiso que lo haga por ti}]
`
});

bot.command({
  name: "play",
  aliases: ["Play"],
  code: `$playSong[$message;]
  $sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**
dr!$commandName $message

**Usado por:**
$username#$discriminator

**Server**
$serverName[$guildID]

**ServerID:**
$guildID}]`
});

bot.command({
  name: "play",

  aliases: ["Play"],

  code: `
$color[RANDOM]
$thumbnail[$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;thumbnail]]
$title[**__Cancion añadida a la cola__**]
$description[**La cancion** \`($message)\` Fue añadida a la **Cola**]
$addField[⏱️| Duración:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;duration]__**]
$addField[📀 | Vistas:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;views]__**]
$addField[☕ | Author:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;uploader_name]__**]
$addField[🕙 Uploaded:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;uploaded]__**]
$playSong[$message;{title:Error}{description:There was an error while making the request.}{color:RED}]
$onlyIf[$message!=;{color:RED}{title:Error ❎}{description:Escribe que cancion deceas buscar!! 

**Ejemplo:**
dr!play la cucaracha

**Nota:**
es recomendable poner el nombre de la canción!!}]
$onlyIf[$voiceID!=;unete a un chat de voz Primero!!]
$cooldown[3s;Wow tranquilo, no querrás que colapse el sistema verdad? espera %time% antes de añadir otra cancion a la cola]

`
});

bot.command({
  name: "vote",
  code: `$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**
dr!$commandName $message

**Usado por:**
$username#$discriminator

**Server**
$serverName[$guildID]

**ServerID:**
$guildID}]
  $title[♥️ Vota por mi!!]
$description[Hola $username, vota por mi en 

[Top.gg//](https://top.gg/bot/779179437668171786/vote)

esos son todos los lugares donde se encuentra DoorSky por ahora :D]
$color[$random[1;9999]]`
});

bot.command({
  name: "invite",
  code: `$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**
dr!$commandName $message

**Usado por:**
$username#$discriminator

**Server**
$serverName[$guildID]

**ServerID:**
$guildID}]
  $title[invita a DoorSky Plus!!]
$description[Puedes invitar a DoorSky Plus haciendo [click aqui\\](https://discord.com/oauth2/authorize?client_id=779179437668171786&scope=bot&permissions=2147483647)]
$footer[gracias ♥️]
$color[$random[1;9999]]`
});

bot.command({
  name: "warn",
  code: `$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**
dr!$commandName $message

**Usado por:**
$username#$discriminator

**Server**
$serverName[$guildID]

**ServerID:**
$guildID}]
$color[$random[1;999999]]
$description[<@$authorID> ha advertido **<@$mentioned[1]>**
Razón: $replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;Unspecified];false;***$noMentionMessage***]]
$setUserVar[Warns;$sum[$getUserVar[Warns;$mentioned[1]];1];$mentioned[1]]
$onlyIf[$mentioned[1]!=;Debes mencionar a alguien.]
$onlyIf[$mentioned[1]!=$authorID;No puedes advertirte a ti mismo]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];Ese usuario tiene un rango más alto que el mío]
$onlyPerms[managemessages;{color:RED}{title:Error ❎}{description:No tienes los suficientes permisos!!

**Permiso Requerido"**
 MANAGE_MESSAGE

**Nota:**
puede pedirle a un admin que lo haga por ti}]
`
});

bot.command({
  name: "checkwarns",
  code: `$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**

dr!$commandName $message

**Usado por:**

$username#$discriminator

**Server**

$serverName[$guildID]

**ServerID:**

$guildID}]
$onlyPerms[managemessages;{color:RED}{title:Error ❎}{description:No tienes los suficientes permisos!!

**Permiso Requerido"**
 MANAGE_MESSAGE

**Nota:**
puede pedirle a un admin que lo haga por ti}]
$onlyIf[$mentioned[1]!=;{color:RED}{title:Error ❎}{description:Debes mencionar a alguien.

**Ejemplo:**
dr!checkwarns @user

**Nota:**
debes de menciónar al usuario no puedes poner el nombre si no, no funcionara}]
$title[lista de warns]
$description[**<@$mentioned[1]>** tiene ***$getUserVar[Warns;$mentioned[1]]*** warning(s)]
$color[$random[1;999999]]`
});

bot.command({
  name: "remove-warns",
  code: `$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**

dr!$commandName $message

**Usado por:**

$username#$discriminator

**Server**

$serverName[$guildID]

**ServerID:**

$guildID}]$setUserVar[Warns;0;$mentioned[1]]
$title[Warns Removidos!!]
 $description[ahora <@$mentioned[1]> tiene  **0** warns]
$color[$random[1;99999]]
$argsCheck[>1;{color:RED}{title:Error ❎}{description: uso incorrecto del comando check warns 

**Ejemplo:**
dr!remove-warns @user

**Nota:**
Solo puedes menciónar a un usuario}] $onlyPerms[managemessages;Debes tener el **Manage Messages** permiso para ejecutar este comando!]`
});

bot.command({
  name: "bal",
  code: `$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**

dr!$commandName $message

**Usado por:**

$username#$discriminator

**Server**

$serverName[$guildID]

**ServerID:**

$guildID}]
  $title[dinero de $username!]
$description[

💸 Billetera
 **$onlyIf[$mentioned[1]==; ]
$getUserVar[money]$**!

🏦 Banco **$onlyIf[$mentioned[1]==; ]
$getUserVar[bank]$**!

]
$footer[Comando de Economia!] 
$addTimestamp
$color[RANDOM]`
});

bot.command({
  name: "work",
  code: `$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**

dr!$commandName $message

**Usado por:**

$username#$discriminator

**Server**

$serverName[$guildID]

**ServerID:**

$guildID}]
  $setUserVar[money;$sum[$getUserVar[money];$random[100;700]]]
$title[Buen trabajo!]
$description[trabajaste como $randomText[Maestro;doctor;chef; empresario;sicario;militar;cazador;Vago] y ganaste $random[100;700] De dinero]
$cooldown[12h;{color:RED}{description:Para volver a trabajar debes esperar %time%]
$color[#FDFD96]
$footer[Trabajaste]
$addTimestamp`
});

bot.command({
  name: "queue",
  code: `$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**

dr!$commandName $message

**Usado por:**

$username#$discriminator

**Server**

$serverName[$guildID]

**ServerID:**

$guildID}]
  $title[🎵 Lista de Musica 🎶]
$description[$queueLength canciones en cola
$queue[1]
$queue[2]
$queue[3]
$queue[4]
$queue[5]
$queue[6]
$queue[7]
$queue[8]
$queue[9]
$queue[10]]
$footer[Lista de reproducción]
$color[RANDOM]
$suppressErrors[{color:RED}{title:Error ❎}{description:No se pudieron encontrar las canciones. O no hay canciones en la cola.}]`
});

bot.command({
  name: "set-welcome",
  code: `$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**

dr!$commandName $message

**Usado por:**

$username#$discriminator

**Server**

$serverName[$guildID]

**ServerID:**

$guildID}]
  Canal configurado con exito 
$setServerVar[welcome;$mentionedChannels[1]]
$onlyIf[$mentionedChannels[1]!=;{color:RED}{title:Error ❎}{description:debes menciónar un canal!!

**Ejemplo:**
dr!set-welcome  #channel

**Nota:**
no puedes desactivar la bienvenida}]
$onlyPerms[manageserver;{color:RED}{title:Error ❎}{description:no tienes suficientes permisos

**Permisos Requeridos:**
MANAGE_SERVER

**Nota:**
puedes pedirle a un admin o alguien que tenga este permiso que lo haga por ti}]

`
});

bot.command({
  name: "clear",
  code: `$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**

dr!$commandName $message

**Usado por:**

$username#$discriminator

**Server**

$serverName[$guildID]

**ServerID:**

$guildID}]
$title[😼 arrasé con todo 😼]
$description[
Cantidad mensajes borrados:
$message

Ejecutado por:
$username]
$color[$random[1;99999]]
$deletecommand
$clear[$message]
$cooldown[15s;**Demasiado rápido, espera % time% para usar este comando nuevamente**]
$onlyPerms[admin;{color:RED}{title:Error ❎}{description:No tienes los suficientes permisos!!

**Permiso Requerido"**
 ADMINISTRADOR

**Nota:**
puede pedirle a un admin que lo haga por ti}]
$argsCheck[>1;{color:RED}{title:Error ❎}{description:Debes proporcionar un número para poder eliminar mensajes

**Ejemplo:**
dr!clear 34

**Nota:**
puedes usar un número del 1 al 100}]
$onlyIf[$isNumber[$message]==true;]`
});

bot.command({
  name: "daily",
  code: `$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**
dr!$commandName $message

**Usado por:**
$username#$discriminator

**Server**
$serverName[$guildID]

**ServerID:**
$guildID}]
  $setUserVar[money;$sum[$getUserVar[money];500]]
$title[Aquí tienes tu recompensa diaria]
$description[Has obtenido 500 DoorCoins Por usar a DoorSky Plus ]
$footer[gracias $username por usarme <3] 
$cooldown[24h;{color:RED}{description:oye, tranquilo viejo espérate %time% para poder usar este comando}]
$color[$random[1;9999]]`
});

bot.command({
  name: "reporte",
  code: `$dm[717901806050738177]
$title[Nuevo Reporte!!]
$description[$message]
$footer[Reporte enviado por $username]
$argsCheck[>15;{color:RED}{title:Error ❎}{description:Escribe un poco más no sea vag@!!

**Ejemplo:"**
 dr!reporte Hola he encontrado un error que podría hacer que los usuarios se aprovechen de el bot el error es cuando usas el comando dr!daily no tiene cooldown y así la gente hace trampa y obtiene mucho dinero en muy poco tiempo por favor puedes soluciónarlo lo antes posible

**Nota:**
El mensaje debe tener más de 15 palabras }]
$color[$random[1;9999]]`
});

bot.command({
  name: "crime",
  code: `$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**

dr!$commandName $message

**Usado por:**

$username#$discriminator

**Server**

$serverName[$guildID]

**ServerID:**

$guildID}]
  $setUserVar[money;$sum[$getUserVar[money];$random[5;250]]] 
$cooldown[3h;{color:RED}{title:Error ❎}{description:wow acabas de robar espérate %time% antes de hacer otro robo!!}]
$title[Has Hecho un robo!!]
$description[ Has robado $randomText[en un banco;en una tienda;en una casa;en un restaurante] y has ganado $random[5;250]$ DoorCoins]
$color[$random[1;9999]]`
});

bot.command({
  name: "app",
  code: `$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**

dr!$commandName $message

**Usado por:**

$username#$discriminator

**Server**

$serverName[$guildID]

**ServerID:**

$guildID}]
$title[Descarga la app de DoorSky Plus!!]
$description[Hola, esta es la aplicación de DoorSky Plus, está en face beta pero pronto estará mejorada!!

**Link:**
http://www.mediafire.com/file/kj3avm55wxhfatk/DoorSky+Plus_9.8.apk.zip/file]
`
});

bot.command({
  name: "web",
  code: `$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**

dr!$commandName $message

**Usado por:**

$username#$discriminator

**Server**

$serverName[$guildID]

**ServerID:**

$guildID}]
  Hola por ahora no tenemos una web oficial de DoorSky Plus pero estamos trabajando en eso ;)`
});

bot.command({
  name: "botinfo",
  code: `$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**

dr!$commandName $message

**Usado por:**

$username#$discriminator

**Server**

$serverName[$guildID]

**ServerID:**

$guildID}]
  $title[Infromacion de DoorSky Plus]
$description[

🤴 __**Creador**__
     🎄PlayMax535😼#1251

🤖 __**Nombre**__
     DoorSky Plus

📤 __**Versión**__
     0.0.3

⏱️ __**Uptime**__
     $uptime

📀 __**CPU**__
     $cpu

💾 __**Ram**__
     $ram

🏓 __**Ping**__
     $ping
   
💽 __**Server en los que estoy**__
      $serverCount

👤 __**Miembros que ayudo**__
     $allMembersCount

📟 __**Comandos**__
     $commandsCount]
$footer[gracias ♥️]
$color[$random[1;9999]]`
});

bot.command({
  name: "covid",
  code: `$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**

dr!$commandName $message

**Usado por:**

$username#$discriminator

**Server**

$serverName[$guildID]

**ServerID:**

$guildID}]
  $title[Covid-19 Global Stats]
 $description[**Casos**
$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/all;cases]]
**Muertes**
$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/all;deaths]]
**Casos de hoy **
$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/all;todayCases]]
**Hoy Muertes**
$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/all;todayDeaths]]
**Casos de corona activos**
$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/all;active]]
**Recuperados**
$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/all;recovered]]]
$thumbnail[https://dshs.texas.gov/uploadedImages/Content/Consumer_and_External_Affairs/coronavirus/banner.png]
$footer[Estadísticas de la pandemia.]
$color[RANDOM]`
});

bot.command({
  name: "rps",
  code: `$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**

dr!$commandName $message

**Usado por:**

$username#$discriminator

**Server**

$serverName[$guildID]

**ServerID:**

$guildID}]
  $title[Piedra Papel tijeras!]
$description[Usted seleccionó $message - el bot selecciono $randomText[piedra;Papel;tijeras].]$color[$random[1;9999]]
$argsCheck[>1;{color:RED}{title:Error ❎}{description:debes seleccionar piedra papel o tijeras

**Ejemplo:**
dr!rps piedra

**Nota:**
solo puedes usar piedra papel o tijeras!!}]`
});

bot.command({
  name: "suggest",
  code: `$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**

dr!$commandName $message

**Usado por:**

$username#$discriminator

**Server**

$serverName[$guildID]

**ServerID:**

$guildID}]
$title[Nueva Sugerencia]
$color[RANDOM]
$description[$message]
$addReactions[❎;☑️;❓]
$footer[☑️ Te gusto|❎ no te gusto|❓eh que?]
$argsCheck[>2;{color:RED}{title:Error ❎}{description:debes de escribír tu sugerencia

**Ejemplo:**
dr!suggest Añadan más emojis!!

**Nota:**
debes de estar puesto el canal de Sugerencias !!}]
$useChannel[$getServerVar[suggest]]`
});

bot.command({
  name: "set-suggest",
  code: `$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**

dr!$commandName $message

**Usado por:**

$username#$discriminator

**Server**

$serverName[$guildID]

**ServerID:**

$guildID}]
  Canal de Sugerencias configurado con exito 
$onlyIf[$mentionedChannels[1]!=;{color:RED}{title:Error ❎}{description:No mencionaste un canal 

**Ejemplo:**
dr!set-suggest #channel

**Nota:** 
una vez seleccionado el canal no podrás quitarlo pero si cambiarlo}]
$setServerVar[suggest;$mentionedChannels[1]]
$onlyPerms[admin;{color:RED}{title:Error ❎}{description: No tienes los permisos nesesarios!!

**Permisos requeridos:**
ADMINISTRADOR

**Nota:**
puedes pedirle a alguien que tenga este permiso que lo haga por ti}]`
});

bot.command({
  name: "server-info",
  code: `$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**

dr!$commandName $message

**Usado por:**

$username#$discriminator

**Server**

$serverName[$guildID]

**ServerID:**

$guildID}]
$color[FFFFFF]
$thumbnail[$serverIcon[$guildID]]
$title[Información del servidor]
$description[
📜 __**Servidor: Información general**__ 

👑**•Nuestro Fundador:** 
   <@$ownerID>

📚**•Nombre del servidor:** 
   $serverName[$guildID]

🇪🇸**•Región del servidor:** 
   $serverRegion🔗

**•Invitación al servidor:**
   $getServerInvite[$guildID]

🆔**•Server Id:** 
     $guildID
     
🚀**•Server Boost:**
     $serverBoostCount
     
 **📆•Fecha de creación:** 
    $creationDate[$guildID]

**🛡•Nivel de la verificación:** 
     $serverVerificationLevel

📜 __**Servidor: Canales e Info de roles Info**__

**Canales en total:**
   $channelCount
**Roles en total:**
  $roleCount



__**Otra información**__

🤣•**Emojis personalizados:** 
 $serverEmojis
 
 **👤•Total de Miembros:** 
 $membersCount]`
});

bot.readyCommand({
  channel: "783884652641255454",
  code: `
$color[RANDOM]
$title[Loading...]
$description[ Ohh valla parece que PlayMax esta editandome que bien :D

Reiniciando mi base de datos....]
$addTimestamp`
});

bot.joinCommand({
  channel: "$getServerVar[welcome]",
  code: `
$title[tenemos un nuevo miembro!!]
$description[ Bienvenido <@$authorID> Espero la pases genial y te diviertas!! no olvides pasarte por el canal de reglas para no llevarte ningún warn!!]
$color[FF00FF]
$image[https://civeriur.sirv.com/Project%20Capture%20(10).jpg?text.0.text=$username&text.0.position.x=-16%25&text.0.position.y=-30%25&text.0.size=40]
`
});
bot.onJoined();

const fs = require("fs");

const folders = fs.readdirSync("./commands/");

for (const files of folders) {
  const folder = fs
    .readdirSync(`./commands/${files}/`)
    .filter(file => file.endsWith(".js"));

  for (const commands of folder) {
    const command = require(`./commands/${files}/${commands}`);
    bot.command({
      name: command.name,
      code: command.code
    });
  }
}
