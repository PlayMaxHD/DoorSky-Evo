module.exports = ({
name: "crime",
description: "comete un crimen para ganar dinero",
usage: "dr!crime",
note: "tiene 3 crimenes, mafia, hack, asalto",
code: `$title[Es Hora de robar! 💰]
$description[¿Que Crimen quieres cometer?

\`asalto, hack, mafia\`]
$color[RANDOM]
$awaitMessages[$authorID;3m;asalto,hack,mafia;asalto,hack,mafia]
`
})