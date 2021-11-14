module.exports = ({
name: "avatar",
description: "con este Comando podrás ver el avatar de una persona",
usage: "dr!avatar <user>",
note: "la imagen será con la calidad original",
code: `$title[$replaceText[$replaceText[$getServerVar[language];Español;Avatar de];Inglés;Avatar of] $username[$findMember[$message]]]
$description[[$replaceText[$replaceText[$getServerVar[language];Español;Descargar];Inglés;Download]\\]($userAvatar[$findMember[$message]])]
$image[$userAvatar[$findMember[$message]]]
$color[RANDOM]`
})
