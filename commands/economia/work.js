module.exports = ({
name: "work",
description: "Trabaja para conseguir dinero!!",
usage: "dr!work",
note: "Solo es posible usarlo cada 12 horas y puedes ganar entre 10 y 400 monedas",
code: `$setUserVar[money;$sum[$getUserVar[money];$random[10;400]]]
$title[Has Trabajado ✔️]
$description[Has Trabajado como $randomText[cocinero;policía;bombero;doctor;sicario] y has ganado $$random[10;400]]
$color[RANDOM]
$cooldown[12h; :x: Espera %time% antes de volver a trabajar]`
})
