module.exports = ({
name: "botinfo",
description: "para ver la información de DoorSky",
usage: "dr!botinfo",
note: "nunca está de más saber sobre DoorSky ;)",
code: `
$title[$replaceText[$replaceText[$getServerVar[language];Español;Información];Inglés;Information] DoorSky!!]
$description[$replaceText[$replaceText[$getServerVar[language];Español;
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
];Inglés;
🤖 **Name:** DoorSky Evolution
⏳ **Age:** (top Secret)
👑 **Creator:** $userTag[717901806050738177]
📟 **Commands:** $commandsCount
📤 **Servers:** $serverCount
👥 **Members:** $allMembersCount
🎂 **Creation Of Date:** 1 abril 2021 
🏓 **Ping:** $ping ms
⏱️ **Uptime:** $uptime
💽 **CPU:** $cpu%
💾 **Ram:**  $ram MB
📚 **Library:** Discord.js
💻 **Language:** Javascript
🗣️ **Idiom:** Español, English
🎊 **Invite:** [Invite me]($getBotInvite[admin])
]] 
$footer[$userTag] 
`
})