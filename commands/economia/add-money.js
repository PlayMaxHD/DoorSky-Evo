module.exports = ({
name: "add-money",
description: "añade dinero a un usuario selecciónado!!",
usage: "dr!add-money <user> <cantidad>",
note: "solo para admins",
code: `$setServerVar[money;$sum[$getServerVar[money;$mentioned[1]];$messageSlice[1]];$mentioned[1]]
$title[$replaceText[$replaceText[$getServerVar[language];Español;Añadido Dinero];Inglés;Added Money]!!]
$description[$replaceText[$replaceText[$getServerVar[language];Español;<@$authorID> le dio a <$mentioned[1]> $$message[2] Monedas];Inglés;<@$authorID> gave <$mentioned[1]> $$message[2] Coins]]
$addTimeStamp
$color[RANDOM]
$onlyIf[$isNumber[$message[2]!=;$replaceText[$replaceText[$getServerVar[language];Español;solo números];Inglés;only numbers]!!]
$onlyIf[$message[2]!=; $replaceText[$replaceText[$getServerVar[language];Español;Escribe cuanto dinero quieres dar];Inglés;Write how much money you want to give]!!]
$onlyIf[$mentioned[1]!=; $replaceText[$replaceText[$getServerVar[language];Español;Menciona a Alguien];Inglés;Mention Someone]]
$onlyPerms[admin;$replaceText[$replaceText[$getServerVar[language];Español;Sorry, nesesitas el permiso de Admininistrador para poder usar este comando];Inglés;Sorry, you need Administrator permission to be able to use this command]!!]`
})