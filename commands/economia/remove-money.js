module.exports = ({
name: "remove-money",
description: "quita dinero a un usuario selecciónado!!",
usage: "dr!remove-money <user> <cantidad>",
note: "solo para admins",
code: `$setServerVar[money;$sub[$getServerVar[money;$mentioned[1]];$messageSlice[1]];$mentioned[1]]
$title[Dinero Removido!!]
$description[<@$authorID> le quito a <$mentioned[1]> $$message[2] Monedas]
$addTimeStamp
$color[RANDOM]
$onlyIf[$isNumber[$message[2]!=;solo números!!]
$onlyIf[$message[2]!=; Escribe cuanto dinero quieres quitar!!]
$onlyIf[$mentioned[1]!=; Menciona a Alguien]
$onlyPerms[admin;Sorry, nesesitas el permiso de Admininistrador para poder usar este comando!!]`
})