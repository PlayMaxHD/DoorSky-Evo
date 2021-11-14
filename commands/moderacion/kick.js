module.exports = ({
name: "kick",
description: "expulsa a un usuario",
usage: "dr!kick <user>",
note: "debes tener el permiso de Kick_members",
code: `
$title[Usuario Expulsado]
$description[Una F Por **$username[$mentioned[1]]** Que fue expulsad@ por **$username**]
$addTimeStamp
$color[RANDOM]
$kick[$mentioned[1]]
$onlyIf[$mentioned[1]!=;:x: mencióna a alguien]
$onlyIf[$mentioned[1]!=$clientID;:x: no puedes expulsarme!!]
$onlyIf[$mentioned[1]!=$authorID;:x: no puedes expulsarte a ti mismo]
$onlyBotPerms[kick;:x: no tengo el permiso para expulsar gente!]
$onlyPerms[kick;:x: no tienes el permiso para expulsar gente!]`
})
