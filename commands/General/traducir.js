module.exports = ({
name: "translate",
description: "Sirve para traducir tu texto!!",
usage: "dr!translate <lang> <text>",
note: "si vas a traducir un texto que este en ingles al español debes poner \`en\`",
code: `$title[Texto Traducido!!]
$description[
Texto Normal:
$message

Texto Traducido:
$jsonRequest[https://api.playmax.repl.co/api/traducir?la=$message[1]?text=$replaceText[$messageSlice[1]; ;%20];res]`
})
