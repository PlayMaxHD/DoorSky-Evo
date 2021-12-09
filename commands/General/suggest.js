module.exports = ({
name: "suggest",
description: "deja tu sugerencia en el server!!",
usage: "dr!suggest <sugerencia>",
note: "debes establecer el canal de sugerencias primero",
code: `$title[$replaceText[$replaceText[$getServerVar[language];Español;Nueva Sugerencia];Inglés;New Suggestion]!!]
$description[$message]
$footer[$userTag;$authorAvatar]
$color[RANDOM]
$addReactions[🔽;🔼]
$useChannel[$getServerVar[suggest]]
$channelSendMessage[$channelID; $replaceText[$replaceText[$getServerVar[language];Español;Sugerencia Enviada];Inglés;Suggestion Sent]!!]
$onlyIf[$message!=;$replaceText[$replaceText[$getServerVar[language];Español;escribe que queres sugerir];Inglés;write what you want to suggest]!!]
$onlyIf[$channelExists[$getServerVar[suggest]]==true;$replaceText[$replaceText[$getServerVar[language];Español;Canal para sugerencias no establecido];Inglés;Channel for suggestions not established]!!]`
})