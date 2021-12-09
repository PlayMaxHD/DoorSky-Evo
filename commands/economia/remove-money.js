module.exports = ({
name: "remove-money",
description: "quita dinero a un usuario selecciónado!!",
usage: "dr!remove-money <user> <cantidad>",
note: "solo para admins",
code: `$setServerVar[money;$sub[$getServerVar[money;$mentioned[1]];$messageSlice[1]];$mentioned[1]]
$title[$replaceText[$replaceText[$getServerVar[language];Español;Dinero Removido];Inglés;Money Removed]!!]
$description[$replaceText[$replaceText[$getServerVar[language];Español;<@$authorID> le quito a <$mentioned[1]> $$message[2] Monedas];Inglés;<@$authorID> I remove <$mentioned[1]> $$message[2] Currencies]]
$addTimeStamp
$color[RANDOM]
$onlyIf[$isNumber[$message[2]!=;$replaceText[$replaceText[$getServerVar[language];Español;solo números];Inglés;only numbers]!!]
$onlyIf[$message[2]!=; $replaceText[$replaceText[$getServerVar[language];Español;Escribe cuanto dinero quieres quitar];Inglés;Write how much money you want to remove]!!]
$onlyIf[$mentioned[1]!=; $replaceText[$replaceText[$getServerVar[language];Español;Menciona a Alguien];Inglés;Mention Someone]]
$onlyPerms[admin;Sorry, $replaceText[$replaceText[$getServerVar[language];Español;nesesitas el permiso de Admininistrador para poder usar este comando];Inglés;you need Administrator permission to be able to use this command]!!]`
})