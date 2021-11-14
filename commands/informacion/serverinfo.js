module.exports = ({
name: "serverinfo",
description: "Ve la información del servidor",
usage: "dr!serverinfo",
note: "te da casi toda la info",
code: `$title[Informe Del Servidor]
$description[
Logo Del Servidor: ==> 

Información General
Nombre: $serverName
Region: $serverRegion
Sistema de Seguridad: $serverVerificationLevel
Boosteos: $serverBoostCount boost (Nivel $servervBoostLevel)
Emojis: $emojiCount


Información de Canales:
Texto: $channelCount[text]
Voz: $channelCount[voice]
Anuncio: none
Casaclub: None


Información de Miembros:
Miembros: $membersCount
Online: $membersCount[$guildID;online]
Offline: $membersCount[$guildID;offline]
No molestar: $membersCount[$guildID;dnd]
Baneados: $banCount
  ]
  $footer[$userTag;$authorAvatar]
$color[RANDOM]
$thumbnail[$serverIcon]
 `
})