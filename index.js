//Código para que funcione el bot
const aoijs = require(`aoi.js`);
const memes = require('discord-memes');
const express = require('express');  
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000,() => {
  console.log('server started');
});

const bot = new aoijs.Bot({
	sharding: true,
	shardAmount: 2,
	token: "Nzk1NDgzNDA2NDI2MTc3NTQ3.X_KBpw.A3_Q8HPvzPfLAiJ4pw5-tw-ZymM",
	prefix: [
		'$getServerVar[prefix]',
		'<@795483406426177547>',
		'<@!795483406426177547>'
	],
	mobile: true
});

//aca empiezan los estados

bot.status({
  text: "$commandsCount Comandos!!",
  type: "WATCHING",
  time: 6
})

bot.status({
  text: "$allMembersCount Miembros!!",
  type: "WATCHING",
  time: 6
})

bot.status({
  text: "$serverCount servidores",
  type: "WATCHING",
  time: 6
})

bot.status({
  text: "dr!help | para mas ayuda",
  type: "PLAYING",
  time: 12
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
  msgEditorID: "undefined",
  esnipeOldMsg: "undefined",
	Message_Snipe: '',
	Author_Snipe: '',
	prefix: 'dr!',
	items: 0,
	edad: 0,
	bank: 0,
	money: 0,
	logs: ``,
	level: 0,
	warn: 0,
	time: "00:00",
	premium: 0,
	mute: "false",
	hijo: "Ningúno",
	marry: "Soltero/a",
	pets: "Ningúno",
	sexo: "Masculino",
	verify: "set",
	leave: 9192891,
	language: "Inglés",
	pene: "undefine",
	wchannel: 92929296,
	wmessage: "Test",
	sorteo: 0272828,
	suggest: 02928,
	ticketMessage: 01372937,
	ticketChannel: 927382827,
	ticketCategory: 9282829273,
});

//aca empiezan los awaited
bot.onMessage();




bot.awaitedCommand({
name: "rock",
code: `$title[RPS DoorSky Evolution]
$description[
$randomText[
🪨 │Elegí \`Piedra\` es un empate.;
📄│Elegi \`Papel\`, perdiste.;
✂️│Elegi \`Tijeras\`, Ganaste.]]
$footer[$randomText[¡Bien jugado!; ¡Buen juego!]]
$color[RANDOM]`
})

bot.awaitedCommand({
name: "paper",
code:`$title[RPS DoorSky Evolution]
$description[
$randomText[
🪨│Elegi \`Piedra\`, Ganaste.;
📄│Elegi \`Papel\` Es Un Empate.;
✂️│Elegi \`Tijeras\`, Perdiste.]
$randomText[Bien Jugado!;Buen Juego!]]
$color[RANDOM]`
})

bot.awaitedCommand({
name: "scissor",
code:`$title[RPS DoorSky Evolution]
$description[
$randomText[
🪨│Elegi \`Piedra\`, Perdiste.;
📄│Elegi \`Papel\`, Ganaste.;
✂️│Elegi \`Tijeras\` Es Un Empate.]
$randomText[Bien Jugado!;Buen Juego!]]
$color[RANDOM]`
})


bot.awaitedCommand({
	name: 'asalto',
	code: ` $title[Manos Arriba!!]
	$description[has asaltado $randomText[Un Banco;Un Hospital;Una Casa;Una Joyería] y has ganado $$random[150;500] monedas!!]
$color[RANDOM]
$setUserVar[money;$sum[$getUserVar[money];$random[150;500]]]`
});

bot.awaitedCommand({
	name: 'hack',
	code: `
$title[Hack 100%]
$description[has hackeado $randomText[al gobierno;a la nasa;a los chinos;a la ONU;a tu vecino;Elon Musk] y ganaste $$random[100;450] Monedas!!]
$color[RANDOM]
$setUserVar[money;$sum[$getUserVar[money];$random[100;450]]]
`
});

bot.awaitedCommand({
	name: 'mafia',
	code: `
$title[Tratos con la mafia]
$color[RANDOM]
$description[has hecho un trato con la mafia y te han pagado $$random[100;400] Monedass!!]
$setUserVar[money;$sum[$getUserVar[money];$random[100;400]]]
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
bot.loadCommands('./commands/configuracion');
bot.loadCommands('./commands/moderacion');
bot.loadCommands('./commands/General');
bot.loadCommands('./commands/interaccion');
bot.loadCommands('./commands/diversion');
bot.loadCommands('./commands/musica');
bot.loadCommands('./commands/animal');
//aca empiezan los eventos

bot.leaveCommand({
 channel: "$getServerVar[leave]",
 code: `$title[$replaceText[$replaceText[$getServerVar[language];Español;Hasta Pronto 😟];Inglés;GoodBye 😟]]
$description[$replaceText[$replaceText[$getServerVar[language];Español;Adios $username Te extrañaremos y esperamos tu regreso...];Inglés;Goodbye $username We will miss you and look forward to your return ...]]
$attachment[https://api.avux.ga/welcomer?avatar=$replaceText[$authorAvatar;.webp;.png]&username=$username&discrim=$discriminator&title=Adios&message=Sin%20Ti%20Somos%20$membersCount[$guildID;all;no]%20Miembros&key=B4R6SZX-X04M40A-N4HGZCX-SKS7ZWJ;Despedida.png]`
})
bot.onLeave();

bot.interactionCommand({
	name: 'ping',
	code: `$description[$interactionReply[🏓 Pong: $ping ms]]
 `
});
bot.interactionCommand({
name: "help", 
code: `$title[$replaceText[$replaceText[$getServerVar[language];Español;Comando de Ayuda];Inglés;Help command]]
$description[$replaceText[$replaceText[$getServerVar[language];Español;Hola esta es mi lista de ayuda, y mi prefix es $getServerVar[prefix]

**Moderación:**
mute | unmute | warn | warn-list | remove-warn | clear | kick | ban | unban | addrole | change-name | remove-role | purge | tempban | tempmute 

**Configuración:**
set-welcome | set-suggest | set-leave | set-msg-leave | set-confession | set-logs | setprefix | set-lang | set-ticket | giveaway

**Economía:**
work | daily | bal | remove-money | add-money | gift | crime | rob

**Diversión:**
meme | rps | chiste | truthdare | among | 8ball | trump | waifu | say 

**Información:**
botinfo | serverinfo | covid | today | horoscopo | donate | support | cmdinfo | help | ping | profile | uptime | web | avatar | jumbo | vote | invite 

**Animales:**
cat | dog | pand | fox 

**Reacción & Interacción:**
love | trash | baka | bite | claps | cook | dance | hug | kill | kiss | punch | run | sleep | angry | boom | confused | cry | dab | fbi | game | happy | shrug | sip | vomit | wanted

**Música:**
queue | play | reproduciendo |

**Otros:**
translate | calc | youtube | wiki

];Inglés;Hi this is my help list, and my prefix is $getServerVar[prefix]

**Moderatión:**
mute | unmute | warn | warn-list | remove-warn | clear | kick | ban | unban | addrole | change-name | remove-role | purge | tempban | tempmute 

**Configuratión:**
set-welcome | set-suggest | set-leave | set-msg-leave | set-confession | set-logs | setprefix | set-lang | set-ticket | giveaway

**Economy:**
work | daily | bal | remove-money | add-money | gift | crime | rob

**Fun:**
meme | rps | chiste | truthdare | among | 8ball | trump | waifu | say 

**Informatión:**
botinfo | serverinfo | covid | today | horoscopo | donate | support | cmdinfo | help | ping | profile | uptime | web | avatar | jumbo | vote | invite 

**Animals:**
cat | dog | pand | fox 

**Reactions & Interactións:**
love | trash | baka | bite | claps | cook | dance | hug | kill | kiss | punch | run | sleep | angry | boom | confused | cry | dab | fbi | game | happy | shrug | sip | vomit | wanted

**Músic:**
queue | play | reproduciendo |

**Other:**
traducir | calc | youtube | wiki

]]
$color[06FF00]
$footer[$username#$discriminator;$authorAvatar]
$thumbnail[$userAvatar[$clientID]]
$onlyForIDs[814010071939416074;717901806050738177;:x: no disponible aun]
`
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
	channel: '$channelID',
	code: `$setChannelVar[Message_Snipe;$message]
$setChannelVar[Author_Snipe;$authorID]`
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
 channel: "$channelID",
 code: `$setChannelVar[msgEditorID;$authorID]
 $setChannelVar[esnipeOldMsg;$oldMessage]`
})
bot.updateCommand({
	channel: '$getServerVar[logs]',
	code: `$title[Mensaje editado]
$description[$username a editado un mensaje

**Mensaje Anterior:**
$oldMessage

**Mensaje Nuevo:**
$message]
$color[ORANGE]
$footer[$day/$month/$year]
`
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
	channel: '830096426217898025',
	code: `$title[me han removido de un server ☹️]
$description[
**Nombre:** $serverName
**Owner:** $username[$ownerID]
**Miembros:** $membersCount
**Boost:** $serverBoostCount Mejoras (Nivel $serverBoostLevel)
**Region:** $serverRegion
**Canales de texto:** $channelCount[text]
**Canales de voz:** $channelCount[voice]
**Cantidad Emojis:** $emojiCount
**ID Server:** $guildID
**invitación:** Imposible
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
	channel: '830096426217898025',
	code: `$title[me han añadido a un nuevo servidor!!]
$description[
**Nombre:** $serverName
**Owner:** $username[$ownerID]
**Miembros:** $membersCount
**Boost:** $serverBoostCount Mejoras (Nivel $serverBoostLevel)
**Region:** $serverRegion
**Canales de texto:** $channelCount[text]
**Canales de voz:** $channelCount[voice]
**Cantidad Emojis:** $emojiCount
**ID Server:** $guildID
**invitación:** [$serverName\\]($getServerInvite)]
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
$attachment[https://api.avux.ga/welcomer?avatar=$replaceText[$authorAvatar;.webp;.png]&username=$username&discrim=0192&title=Bienvenid@&message=Ahora%20Somos%20$membersCount[$guildID;all;no]%20Miembros!!&key=B4R6SZX-X04M40A-N4HGZCX-SKS7ZWJ;Welcome.png]
$color[RANDOM]`
});
bot.onJoined();

bot.musicStartCommand({ 
 channel: "$channelID",
 code: `$title[Ahora Sonando!]
 $description[Ahora Escuchando: $songInfo[title]
 Artista: $songInfo[publisher]
 Pedido Por: <@$songInfo[userID]>]
 $addField[Link;[Click Aqui!\\]($songInfo[url])]
 $color[RANDOM]
 $addTimestamp
 $image[$songInfo[thumbnail]]` 
})
bot.onMusicStart()

bot.readyCommand({
    channel: "783884652641255454",
    code: `$title[Ya Estoy Listo!]
    $description[ $commandsCount Listos
    Base De Datos Lista
    Ready para ayudar en $serverCount Servers]
    $color[RANDOM]`
})
bot.onReady()