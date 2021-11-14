module.exports = ({
name: "dep",
description: "depósita dinero en tu banco para que no te roben",
usage: "dr!dep <cantidad>",
note: "para sacar tu dinero del banco luego usa dr!with <cantidad>",
code: `
$setUserVar[money;$sub[$getUserVar[money];$message]]
$setUserVar[bank;$sum[$getUserVar[bank];$message]]
$title[$replaceText[$replaceText[$getServerVar[language];Español;Has Depositado Tu Dinero!!];Inglés;You have deposited your money !!]]
$description[$replaceText[$replaceText[$getServerVar[language];Español;has depositado $$message en tu banco!!];Inglés;you have deposited $$message in your bank!!]]
$color[GREEN]
$onlyIf[$message>0;:x: $replaceText[$replaceText[$getServerVar[language];Español;No puedes depositar menos que 0];Inglés;You cannot deposit less than 0]]
$onlyIf[$message<$sum[$getUserVar[money];1];:x: $replaceText[$replaceText[$getServerVar[language];Español;No tienes tanto dienero para depositar, solo tienes];Inglés;You don't have that much money to deposit, you just have] $$getUserVar[money]]
$onlyIf[$isNumber[$message]==true;:x: $replaceText[$replaceText[$getServerVar[language];Español;Usa solo Numeros no letras ni simbolos];Inglés;Use only Numbers, not letters or symbols]]`
})