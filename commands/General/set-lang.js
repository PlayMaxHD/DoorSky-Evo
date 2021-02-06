module.exports = ({
name: "set-lang",
description: "Establece el lenguaje del bot!!",
usage: "dr!set-lang <es/en>",
note: "usa `es` para ponerlo en español o usa `en` para ponerlo en ingles!!",
code: `
  $replaceText[$replaceText[$getServerVar[language];Español;Ahora el bot estara en];Inglés;now the bot will be in] $replaceText[$replaceText[$message;en;**English**];es;**Español**] $replaceText[$replaceText[$getServerVar[language];Español;En este servidor!!];Inglés;on this server!!]
$setServerVar[language;$replaceText[$replaceText[$message;en;Inglés];es;Español]]
$onlyIf[$checkCondition[$message==en]$checkCondition[$message==es]!=falsefalse;$replaceText[$replaceText[$getServerVar[language];Español;Escribe];Inglés;writes] **en** $replaceText[$replaceText[$getServerVar[language];Español;o];Inglés;or] **es**]`
})