module.exports = ({
name: "jumbo",
description: "Sirve para conseguir la URL de un emoji",
usage: "dr!jumbo <emoji>",
note: "Si tenés Nitro y querés sacar los emojis de otros servidores el bot tendrá que estar en el sv de donde sea el emoji",
code: `$title[$replaceText[$replaceText[$getServerVar[language];Español;Aquí tienes El emoji];Inglés;Here you have the emoji]]
$description[[$replaceText[$replaceText[$getServerVar[language];Español;Descargar];Inglés; Download]\\](https://cdn.discordapp.com/emojis/$advancedTextSplit[\`$message[1]\`;:;3;>;1].jpg?size=4096)]
$image[https://cdn.discordapp.com/emojis/$advancedTextSplit[\`$message[1]\`;:;3;>;1].jpg?size=4096]
$color[RANDOM]
$onlyIf[$message!=;:x: $replaceText[$replaceText[$getServerVar[language];Español;Escribe el emoji primero];Inglés;Write the emoji first]!!]
$onlyIf[$checkContains[$message;:]!=;:x: $replaceText[$replaceText[$getServerVar[language];Español;Eso no es un emoji];Inglés;That's not an emoji]!!]`
})
