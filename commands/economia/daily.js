module.exports = ({
name: "daily",
description: "recompensa semanal",
usage: "dr!daily",
note: "por ahora solo da dinero cada 24h",
code: `$title[$replaceText[$replaceText[$getServerVar[language];Español;Recompensa Diaria];Inglés;Daily Reward]]
$description[$replaceText[$replaceText[$getServerVar[language];Español;Has Obtenido $$random[300;500] Monedas!!];Inglés;You have obtained $$random[300;500] Coins !!]]
$color[GREEN]
$setUserVar[money;$sum[$getUserVar[money];$random[300;500]]]
$cooldown[24h;:x: $replaceText[$replaceText[$getServerVar[language];Español;Debes esperar %time% para otra recompensa];Inglés;You must wait %time% for another reward]]`
})