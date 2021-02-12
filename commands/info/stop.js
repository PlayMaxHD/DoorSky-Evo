module.exports = ({
 name: "stop",
 code: ` $sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**

dr!$commandName $message

**Usado por:**

$username#$discriminator

**Server**

$serverName[$guildID]

**ServerID:**

$guildID}]
 has quitado la musica correctamente!!
$stopSong
$onlyIf[$voiceID!=;{color:RED}{description: Primero únase a un canal de voz}]
$addCmdReactions[⏹️]
$onlyPerms[kick;{color:RED}{description: Permisos faltantes! \`KICK_MEMBERS\`}]`
}) 