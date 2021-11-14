module.exports = ({
name: "crime",
description: "comete un crimen para ganar dinero",
usage: "dr!crime",
note: "tiene 3 crimenes, mafia, hack, asalto",
code: `$title[$replaceText[$replaceText[$getServerVar[language];Español;Es Hora de robar! 💰];Inglés;It's time to steal! 💰]]
$description[$replaceText[$replaceText[$getServerVar[language];Español;¿Que Crimen quieres cometer?];Inglés;What Crime do you want to commit?]

\`$replaceText[$replaceText[$getServerVar[language];Español;asalto, hack, mafia];Inglés;assault, hack, mafia]\`]
$color[RANDOM]
$awaitMessages[$authorID;3m;asalto,hack,mafia,assault;asalto,hack,mafia;asalto]
`
})