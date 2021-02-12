module.exports = ({
name: "lyrics",
code: `$title[$message's Lyrics] $description[$jsonRequest[https://some-random-api.ml/lyrics?title=$songInfo[title];lyrics;No se encontro la letra de esta canción.]]
$onlyIf[$message!=;{color:RED}{title:uso incorrecto!!}{description:debes proporcionar el nombre de la cancion  que deseas ver la letra

**Ejemplo:**
dr!lyrics Marama

**Nota:**
el nombre de la cancion debe ser exacta si no, no va a funcionar}]
$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**

dr!$commandName $message

**Usado por:**

$username#$discriminator

**Server**

$serverName[$guildID]

**ServerID:**

$guildID}]
`
})