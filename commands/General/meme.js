module.exports = ({
	name: 'meme',
	description: "Te da un meme totalmente al azar",
	usage: "dr!meme",
	note: "Este comando contiene algunos memes +18",
	code: `$replaceText[$replaceText[$getServerVar[language];Español;$getObjectProperty[momo];$djsEval[const memes = require("discord-memes")
d.object.momo = memes.deTodoEspañol();no]
$createObject[{}]];Inglés;$jsonRequest[https://some-random-api.ml/meme;image]]
$suppressErrors`
});