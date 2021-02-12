module.exports = ({
name: "volume",
code: ` $sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**

dr!$commandName $message

**Usado por:**

$username#$discriminator

**Server**

$serverName[$guildID]

**ServerID:**

$guildID}]
el volumen de la musica a cambiado a $message correctamente!!
$volume[$message]
$onlyIf[$message!=;{color:RED}{description: Error, escriba un número del 1 al 100}]
$onlyIf[$isNumber[$message]==false:{color:RED}{description: Error, el mensaje solo puede contener números del 1 al 100}]
$onlyIf[$voiceID!=;{color:RED}{description: Primero únase a un canal de voz}]
$addCmdReactions[🔊]
$onlyPerms[kick;{color:RED}{description: Permisos faltantes! \`KICK_MEMBERS\`}]`
}) 