module.exports = ({
name: "serverinfo",
description: "Ve la información del servidor",
usage: "dr!serverinfo",
note: "te da casi toda la info",
code: `$title[Informe Del Servidor]
$description[
Logo Del Servidor: ==> 

**Información General**
📲 Nombre: $serverName
🌎 Region: $serverRegion
🔒 Sistema de Seguridad: $serverVerificationLevel
🚀 Boosteos: $serverBoostCount boost (Nivel $serverBoostLevel)
⭐ Emojis: $emojiCount


**Información de Canales:**
💬 Texto: $channelCount[text]
🎙️ Voz: $channelCount[voice]
📣 Anuncio: none
📼 CasaClub: None


**Información de Miembros:**
👤 Miembros: $membersCount
<:Online:780554632711503902> Online: $membersCount[$guildID;online]
<:Offline:780554549617885214> Offline: $membersCount[$guildID;offline]
:dnd: No molestar: $membersCount[$guildID;dnd]
:ban: Baneados: $banCount
  ]
  $footer[$userTag;$authorAvatar]
$color[RANDOM]
$thumbnail[$serverIcon]
 `
})