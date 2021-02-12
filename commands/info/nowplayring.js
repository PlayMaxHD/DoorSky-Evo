module.exports = ({
 name: "reproduciendo" ,
code: `$channelSendMessage[$channelID;{color:RANDOM}{description: 
**Se está reproduciendo** 
$songInfo[title]

**Descripcion**
$songInfo[description]

**Autor**
Desconocido

**Link de la cancion**
$songInfo[url]}]
$onlyIf[$voiceID!=;{color:RED}{title:Error!!}{description: Primero únete a un canal de voz}]
$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**

dr!$commandName $message

**Usado por:**

$username#$discriminator

**Server**

$serverName[$guildID]

**ServerID:**

$guildID}]`
})