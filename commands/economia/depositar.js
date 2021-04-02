module.exports = ({
name: "dep",
description: "depósita dinero en tu banco para que no te roben",
usage: "dr!dep <cantidad>",
note: "para sacar tu dinero del banco luego usa dr!with <cantidad>",
code: `
$setUserVar[money;$sub[$getUserVar[money];$message]]
$setUserVar[bank;$sum[$getUserVar[bank];$message]]
$title[Has Depositado Tu Dinero!!]
$description[has depositado $$message en tu banco!!]
$color[GREEN]
$onlyIf[$message>0;:x: No puedes depositar menos que 0]
$onlyIf[$message<$sum[$getUserVar[money];1];:x: No tienes tanto dienero para depositar, solo tienes $$getUserVar[money]]
$onlyIf[$isNumber[$message]==true;:x: Usa solo Numeros no letras ni simbolos]`
})