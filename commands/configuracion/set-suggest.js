module.exports = ({
name: "set-suggest",
description: "establece el canal de sugerencias",
usage: "dr!set-suggest <canal>",
note: "Nunca esta de mas que la gente te de ideas!!",
code: `$setServerVar[suggest;$mentionedChannels[1]]
$title[$replaceText[$replaceText[$getServerVar[language];Español;Canal Estabelecido];Inglés;Established Channel]!!]
$description[$replaceText[$replaceText[$getServerVar[language];Español;el canal <#$mentionedChannels[1]> Fue establecido para sugerencias, las sugerencias se pueden hacer escribiendo dr!suggest <sugerencia>];Inglés;the channel <#$mentionedChannels[1]> was set for suggestions, suggestions can be made by typing dr!suggest <suggestion>]]
$color[RANDOM]
$onlyIf[$mentionedChannels[1]!=;:x: Mencióna un canal!!]
$onlyIf[$message!=;:x: $replaceText[$replaceText[$getServerVar[language];Español;Mencióna un canal!!];Inglés;Mention a channel!!]]`
})