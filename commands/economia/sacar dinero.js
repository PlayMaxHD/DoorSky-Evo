module.exports = ({
name: "with",
description: "saca dinero de tu banco",
usage: "dr!with <cantidad>",
note: "para depositar luego tu dinero del banco usa dr!dep <camtidad>",
code: `
$setUserVar[bank;$sub[$getUserVar[bank];$message]]
$setUserVar[money;$sum[$getUserVar[money];$message]]
$title[$replaceText[$replaceText[$getServerVar[language];Español;Has Retirado Tu Dinero!!];Inglés;You have withdrawn your money!!]]
$description[$replaceText[$replaceText[$getServerVar[language];Español;has Retirado $$message de tu banco!!];Inglés;You have Withdrawn $$message from your bank!!]]
$color[GREEN]
$onlyIf[$message>0;:x: $replaceText[$replaceText[$getServerVar[language];Español;No puedes retirar menos de];Inglés;You cannot withdraw less than] 0]
$onlyIf[$message<$sum[$getUserVar[bank];1];:x: $replaceText[$replaceText[$getServerVar[language];Español;No tienes tanto dienero en el banco para retirar, solo tienes];Inglés;You don't have that much money in the bank to withdraw, you only have] $$getUserVar[bank]]
$onlyIf[$isNumber[$message]==true;:x: $replaceText[$replaceText[$getServerVar[language];Español;Usa solo Numeros no letras ni simbolos];Inglés;Use only Numbers, not letters or symbols]]`
})