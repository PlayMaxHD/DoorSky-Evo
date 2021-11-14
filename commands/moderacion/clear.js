module.exports = ({
name: "clear",
description: "elimina mensajes",
usage: "dr!clear <cantidad>",
note: "máximo 100",
code: `$clear[$message]
$title[Mensajes Borrados!!]
$description[he borrado $message[1] Con éxito!!]
$color[RANDOM]
$deleteIn[5s]
$onlyIf[$isNumber[$message]!=;:x: Solo Números, No Símbolos, Letras o espacios!!]
$onlyBotPerms[managemessages;:x: no tengo el permiso de MANAGE_MESSAGES sorry!!]
$onlyPerms[managemessages;No tienes el permiso de borrar mensajes!!]`
})
