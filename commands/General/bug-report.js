module.exports = ({
name: "bug-report",
description: "reporta bugs a el creador",
usage: "dr!bug-report <bug>",
note: "debe tener 15 carácteres!!",
code: `
$title[Nuevo Bug Encontrado!!]
$description[
Autor: $username
Reporte: $message]
$footer[$authorID;$authorAvatar]
$color[RANDOM]
$useChannel[835613383277150238]
$channelSendMessage[$channelID;Bug Enviado!!]
$onlyIf[$message[10]!=;tu sugerencia debe tener 10 carácteres!!]`
})
