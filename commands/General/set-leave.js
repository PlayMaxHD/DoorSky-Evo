module.exports = ({
name: "set-leave",
description: "Establece el canal de despedídas",
usage: "dr!set-leave <canal>",
note: "puedes restablecer la bienvenida poniendo dr!reset-leave",
code: `$setServerVar[leave;$findChannel[$message]]
$title[$replaceText[$replaceText[$getServerVar[language];Español;Canal Para las Despedidas establecído!!];Inglés;Channel Established for Farewells]]
$description[$replaceText[$replaceText[$getServerVar[language];Español;el canal <#$findChannel[$message]> fue establecido para las despedidas];Inglés;channel <#$findChannel[$message]> was set for bounces]]
$color[RANDOM]
$addTimeStamp
$onlyIf[$findChannel[$message]!=;:x: $replaceText[$replaceText[$getServerVar[language];Español; Mencióna un canal];Inglés;Mention a channel]]`
})