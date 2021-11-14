module.exports = ({
name: "today",
description: "te da información del dia",
usage: "dr!today",
note: "con esto ya no tendras que volverte loco para saber que dia es!!",
code: `$title[Información del Dia]
$description[Dia: $day
Mes: $month
Año: $year
Hora: ⬇️⬇️
]
$addTimeStamp
$color[RANDOM]`
})