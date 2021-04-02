module.exports = ({
name: "confused",
description: "demuestrale a alguien que estas confundido",
usage: "dr!confused",
note: "O.o Confusa esta información",
code: `$title[Confuso... O.o]
$description[**$username** esta muy confundido...]
$image[$jsonRequest[https://api.willz.repl.co/anime/confuse;message]]
$color[RANDOM]`
})