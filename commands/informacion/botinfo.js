module.exports = ({
name: "botinfo",
description: "para ver la información de DoorSky",
usage: "dr!botinfo",
note: "nunca está de más saber sobre DoorSky ;)",
code: `
$title[Información DoorSky!!]
$description[
🤖 **Nombre:** DoorSky Evolution
⏳ **Edad:** (top Secret)
👑 **Creador:** $userTag[717901806050738177]
📟 **Comandos:** $commandsCount
📤 **Servidores:** $serverCount
👥 **Miembros:** $allMembersCount
🎂 **Fecha de Creación:** 1 abril 2021 
🏓 **Ping:** $ping ms
⏱️ **Uptime:** $uptime
💽 **CPU:** $cpu%
💾 **Ram:**  $ram MB
📚 **Librería:** Discord.js
💻 **Lenguaje:** Javascript
🗣️ **Idioma:** Español, English
🎊 **Invitación:** [Invitame]($getBotInvite[admin])
]
$color[GREEN]
$footer[$userTag;$authorAvatar]`
})
