module.exports = ({
name: "translate",
description: "Sirve para traducir tu texto!!",
usage: "dr!translate <lang> <text>",
note: "si vas a traducir un texto que este en ingles al español debes poner \`en\`",
code: `$title[Texto Traducido!!]
$description[
$replaceText[$replaceText[$getServerVar[language];Español;Texto Normal:];Inglés;Normal Text:]
$message

$replaceText[$replaceText[$getServerVar[language];Español;Texto Traducido:];Inglés;Translated text:]
$jsonRequest[https://api.playmax.repl.co/api/traducir?to=$message[1]?text=$replaceText[$messageSlice[1]; ;%20];res]
$onlyIf[$checkContains[$message[1];es;en;uk;fr]!=;:x: $replaceText[$replaceText[$getServerVar[language];Español;ese lenguaje no esta en mi lista, lo siento];Inglés;that language is not on my list, sorry] :/]
$onlyIf[$message[1]!=;$replaceText[$replaceText[$getServerVar[language];Español;no has Seleccionado un lenguaje!!];Inglés;You have not selected a language!!]]
$onlyIf[$message[2]!=; $replaceText[$replaceText[$getServerVar[language];Español;Genial!! elejiste un lenguaje pero que texto traduzco?];Inglés;Brilliant!! You chose a language but what text do I translate?] O.o]`
})
