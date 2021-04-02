module.exports = ({
name: "serverinfo",
description: "te da la información de el servidor",
usage: "dr!serverinfo",
note: "es recomendable que tenga todos los permisos el bot para que funcione correctamente",
code: `$title[Informacion Servidor]
$description[
Logo del servidor ==> 

Nombre del servidor:
$serverName

Dueño:
<@$ownerID>

Región:
$serverRegion

Nivel de seguridad:
$serverVerificationLevel

Cantidad de Boost
$ServerBoostCount (Nivel $serverBoostLevel)

Miembros:
$membersCount[$guildID;all;false]

Robots:
$botCont

Emojis:
$emojiCount

Roles:
$roleCount

Canales De Texto:
$channelCount[text]

Camales De Voz:
$channelCount[voice]
  ]
$color[RANDOM]
$thumbnain[$serverIcon[$guildID]]`
})