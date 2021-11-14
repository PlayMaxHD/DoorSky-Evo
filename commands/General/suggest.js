module.exports = ({
name: "suggest",
description: "deja tu sugerencia en el server!!",
usage: "dr!suggest <sugerencia>",
note: "debes establecer el canal de sugerencias primero",
code: `$title[Nueva Sugerencia!!]
$description[$message]
$footer[$userTag;$authorAvatar]
$color[RANDOM]
$addReactions[🔽;🔼]
$useChannel[$getServerVar[suggest]]
$channelSendMessage[$channelID; Sugerencia Enviada!!]
$onlyIf[$message!=;escribe que queres sugerir!!]
$onlyIf[$channelExists[$getServerVar[suggest]]==true;Canal para sugerencias no establecido!!]`
})