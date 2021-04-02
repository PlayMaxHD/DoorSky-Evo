//Código para que funcione el bot
const memes = require('discord-memes');
const express = require('express');
const dbd = require(`dbd.js`);
const app = express();

app.get('/', (req, res) => {
	res.send('Hello Express app!');
});

app.listen(3000, () => {
	console.log('Estoy Listo');
});

const bot = new dbd.Bot({
	sharding: true,
	shardAmount: 2,
	token: "Nzk1NDgzNDA2NDI2MTc3NTQ3.X_KBpw.o08sVbQiOpsyP_oGX2UjTMQzXns",
	prefix: [
		'$getServerVar[prefix]',
		'<@795483406426177547>',
		'<@!795483406426177547>'
	],
	mobile: true
});

//aca empiezan los estados
bot.status({
  text: "$allMembersCount Miembros 😻",
  type: "WATCHING",
  time: 9
})

bot.status({
  text: "$serverCount Servidores 😲",
  type: "WATCHING",
  time: 9
})

bot.status({
  text: "$commandsCount Comandós!! ⭐",
  type: "WATCHING",
  time: 9
})

/*
PLAYING - Jugando
WATCHING - Viendo 
LISTENING - Escuchando
STREAMING - Transmitiendo
COMPETING - Compitiendo
*/

//aca empiezan las variables
bot.variables({
	prefix: 'dr!',
	items: 0,
	edad: 0,
	bank: 0,
	money: 0,
	logs: "no definido",
	level: 0,
	time: "00:00",
	mute: "false",
	hijo: "Ningúno",
	marry: "Soltero/a",
	pets: "Ningúno",
	sexo: "Masculino",
	verify: "set",
	leave: "9192891",
	language: "Inglés",
	pene: "undefine",
	wchannel: "018281",
	wmessage: "Test",
	ticketMessage: "01372937",
	ticketChannel: "927382827",
	ticketCategory: "9282829273"
});

//aca empiezan los awaited
bot.onMessage();

bot.awaitedCommand({
	name: 'asalto',
	code: ` Asaltado test
`
});

bot.awaitedCommand({
	name: 'hack',
	code: `
hackeado test
`
});

bot.awaitedCommand({
	name: 'mafia',
	code: `
mafia test
`
});

bot.awaitedCommand({
	name: 'massivepurge',
	code: `
$clear[100]
`
});

bot.loadCommands('./commands/informacion');
bot.loadCommands('./commands/economia');
bot.loadCommands('./commands/moderacion');
bot.loadCommands('./commands/General');
bot.loadCommands('./commands/interaccion');
//aca empiezan los eventos

bot.leaveCommand({
 channel: "$getServerVar[leave]",
 code: `$title[😞 Hasta Pronto!!]
$description[Adios $username Te extrañaremos y esperamos tu regreso...]
$image[https://api.xzusfin.repl.co/card?avatar=$replaceText[$authorAvatar;.
webp;.png;1]?size=2048&middle=Adios%23Vaquero...&name=$replaceText[$replaceText[$username[$authorID]#$discriminator[$authorID];#;%23;-1]; ;%20;-1]&bottom=$replaceText[Si  ti somos $membersCount Miembros; ;%20;-1]&background=https://cdn.discordapp.com/attachments/789656208276848682/798106281189572645/default11.png&text=%23ffffff&avatarborder=%23FFFFFF&avatarbg=%23FF28b3]
$color[RANDOM]`
})
bot.onLeave();

bot.interactionCommand({
	name: 'ping',
	code: `$description[$interactionReply[🏓 Pong: $ping ms]]
 `
});
bot.onInteractionCreate();

bot.interactionCommand({
name: "help", 
code: `te`
})
bot.onInteractionCreate()


bot.reactionRemoveCommand({
	channel: '$getServerVar[logs]',
	code: `$title[Reaccion removida]
$description[$username a quitado su reacccion de un mensaje

**Emoji removido:**
$toStiringEmoji]
$color[RED]
$footer[$day/$month/$year]`
});



bot.deletedCommand({
	channel: "$getServerVar[logs]",
	code: `$title[Mensaje eliminado]
$description[$username a Eliminado un mensaje 

**Mensaje:**
$message]
$color[RED]
$footer[$day/$month/$year]`
});
bot.onMessageDelete();

bot.updateCommand({
	channel: '$getServerVar[logs]',
	code: `$title[Mensaje editado]
$description[$username a editado un mensaje

**Mensaje Anterior:**
$oldMessage

**Mensaje Nuevo:**
$message]
$color[ORANGE]
$footer[$day/$month/$year]`
});
bot.onMessageUpdate();

bot.inviteDeleteCommand({
	channel: '$getServerVar[logs]',
	code: `$title[Invitacion Elimianda]
$description[$username a eliminado una invitación 

**Codigo:**
$inviteCode]
$color[RED]
$footer[$day/$month/$year]`
});
bot.onInviteDelete();

bot.inviteCreateCommand({
	channel: '$getServerVar[logs]',
	code: `$title[Invitacion Creada]
$description[$username[$inviteUserID] a creado una invite

**Codigo:**
$inviteCode

**Usos:**
$inviteUses

**Expira en:**
$getInviteInfo[$inviteCode;expiresAt]]
$color[GREEN]
$footer[$day/$month/$year]`
});
bot.onInviteCreate();

bot.botLeaveCommand({
	channel: '$getServerVar[logs]',
	code: `$title[me han removido de un server ☹️]
$description[
**Nombre:**
$serverName

**Owner:**
$username[$ownerID]

**Miembros:**
$membersCount

**Boost:**
$serverBoostCount Mejoras (Nivel $serverBoostLevel)

**Region:**
$serverRegion

**Canales de texto:**
$channelCount[text]

**Canales de voz:**
$channelCount[voice]

**Cantidad Emojis:**
$emojiCount

**ID Server:**
$guildID

**invitación:**
[$serverName\\]($getServerInvite)]
$footer[$serverCount Servers]
$color[RED]
$thumbnail[$serverIcon]
`
});
bot.onGuildLeave();

bot.banRemoveCommand({
	channel: '$getServerVar[logs]',
	code: `$title[Desbaneo
$description[
Han desbaneado a alguien

$addField[Usuario;$username]
]
$color[RANDOM]

  `
});
bot.onBanRemove();

bot.banAddCommand({
	channel: '$getServerVar[logs]',
	code: `$title[Baneo]
$description[
Han Baneado a otro usuario!!

$addField[Razón;undefined]

$addField[Usuario;$username]
] $color[RANDOM] $thumbnail[$userAvatar[$clientID]] $footer[$username#$discriminator;$authorAvatar]
`
});
bot.onBanAdd();

bot.botJoinCommand({
	channel: '799079451099004928',
	code: `$title[me han añadido a un nuevo servidor!!]
$description[
**Nombre:**
$serverName

**Owner:**
$username[$ownerID]

**Miembros:**
$membersCount

**Boost:**
$serverBoostCount Mejoras (Nivel $serverBoostLevel)

**Region:**
$serverRegion

**Canales de texto:**
$channelCount[text]

**Canales de voz:**
$channelCount[voice]

**Cantidad Emojis:**
$emojiCount

**ID Server:**
$guildID

**invitación:**
[$serverName\\]($getServerInvite)]
$footer[$serverCount Servers]
$color[06FF00]
$thumbnail[$serverIcon]
`
});
bot.onGuildJoin();
bot.joinCommand({
	channel: '$getServerVar[wchannel]',
	code: `$title[Nuevo Miembro!!]
$description[Bienvenido $username espero la pases genial aca!! :D y no olvides leer las reglas!!]
$image[https://cdn.discordapp.com/attachments/780553507752378378/817138590038360124/Welcome_x_DoorSky-1.jpg]
$color[RANDOM]`
});
bot.onJoined();

bot.onReactionAdd()
bot.reactionAddCommand({
 channel: "$getServerVar[ticketChannel]",
 code: `$newTicket[ticket $discriminator;<@$authorID> {title:Ticket Abierto!}{description:escribe su duda o problema y un personal del staff lo atendera}{footer: Reacciona a 🔒 para cerrar el ticket.}{color:RED};$getServerVar[ticketCategory];no;Algo salió mal al crear el ticket. Inténtalo de nuevo.]
 $clearReaction[$channelID;$getServerVar[ticketMessage];801302155842682880]
 $onlyIf[$userMessageID==$getServerVar[ticketMessage];]
 $onlyIf[$emojiID==801302155842682880;]`
 })
 