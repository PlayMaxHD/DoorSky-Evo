module.exports = ({
name: "with",
description: "saca dinero de tu banco",
usage: "dr!with <cantidad>",
note: "para depositar luego tu dinero del banco usa dr!dep <camtidad>",
code: `
$setUserVar[bank;$sub[$getUserVar[bank];$message]]
$setUserVar[money;$sum[$getUserVar[money];$message]]
$title[Has Retirado Tu Dinero!!]
$description[has Retirado $$message de tu banco!!]
$color[GREEN]
$onlyIf[$message>0;:x: No puedes retirar menos de $0]
$onlyIf[$message<$sum[$getUserVar[bank];1];:x: No tienes tanto dienero en el banco para retirar, solo tienes $$getUserVar[bank]]
$onlyIf[$isNumber[$message]==true;:x: Usa solo Numeros no letras ni simbolos]`
})