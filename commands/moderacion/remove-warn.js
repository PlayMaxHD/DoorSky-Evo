module.exports = ({
name: "remove-warn",
description: "quita warns a el usuario Menciónado",
usage: "dr!remove-warn <user> <cantidad>",
note: "la cantidad es la cantidad de warns que desea quitar",
code: `$setServerVar[warn;$sub[$getServerVar[warn;$mentioned[1]];$message[2]];$mentioned[1]]
$title[Warns Removidoss!!]
$description[<@$authorID> le quito $message warns a <@$mentioned>]
$addTimeStamp
$color[RANDOM]
$onlyIf[$isNumber[$message[2]!=;solo números!!]
$onlyIf[$message[2]!=; Escribe cuantos warns quieres quitar!!]
$onlyIf[$mentioned[1]!=; Menciona a Alguien]
$onlyPerms[managemessages;Sorry, nesesitas el permiso de NANAGE_MESSAGES para poder usar este comando!!]`
})