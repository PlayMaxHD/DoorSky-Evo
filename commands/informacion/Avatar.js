module.exports = ({
name: "avatar",
description: "con este Comando podrás ver el avatar de una persona",
usage: "dr!avatar <user>",
note: "la imagen será con la calidad original",
code: `$title[Avatar de $username[$findMember[$message]]]
$description[[Descargar\\]($userAvatar[$findMember[$message]])]
$image[$userAvatar[$findMember[$message]]]
$color[RANDOM]`
})
