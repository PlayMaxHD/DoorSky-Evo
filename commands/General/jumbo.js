module.exports = ({
name: "jumbo",
description: "Sirve para conseguir la URL de un emoji",
usage: "dr!jumbo <emoji>",
note: "Si tenés Nitro y querés sacar los emojis de otros servidores el bot tendrá que estar en el sv de donde sea el emoji",
code: `$title[Aquí tienes El emoji]
$descirption[[descarga Aqui\\](https://cdn.discordapp.com/emojis/$advancedTextSplit[\`$customEmoji[$message[1]]\`;:;3;>;1].jpg?size=4096)]
$image[https://cdn.discordapp.com/emojis/$advancedTextSplit[\`$customEmoji[$message[1]]\`;:;3;>;1].jpg?size=4096]
$color[RANDOM]
$onlyIf[$message!=;:x: Escribe el emoji primero!!]`
})
