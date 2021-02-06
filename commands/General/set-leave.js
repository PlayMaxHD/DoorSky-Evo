module.exports = ({
name: "set-leave",
description: "Establece el canal de despedídas",
usage: "dr!set-leave <canal>",
note: "puedes restablecer la bienvenida poniendo dr!reset-leave",
code: `$setServerVar[leave;$findChannel[$message[1]]]
$title[Canal Para las Despedidas establecído!!]
$description[el canal <#$findChannel[$message[1]]> fue establecido para las despedidas]
$color[RANDOM]
$addTimeStamp
$onlyIf[$findChannel[$message[1]]!=$channelID;:x: elije el canal de despedidas]`
})