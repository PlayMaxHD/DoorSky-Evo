module.exports = ({
name: "daily",
description: "recompensa semanal",
usage: "dr!daily",
note: "por ahora solo da dinero cada 24h",
code: `$title[Recompensa Diaria]
$description[Has Obtenido $$random[300;500] Monedas!!]
$color[GREEN]
$setUserVar[money;$sum[$getUserVar[money];$random[300;500]]]
$cooldown[24h;:x: Debes esperar *%time% para otra recompensa]`
})