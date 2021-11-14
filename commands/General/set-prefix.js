module.exports = ({
name: "set-prefix",
aliases: "setprefix",
description: "Sirve para establecer un nuevo prefix",
usage: "dr!setprefix <nuevo prefijo>",
note: "para restablecer el prefix use $getServetVar[prefix]reset-prefix",
code: `$setServerVar[prefix;$message[1]]
$title[$replaceText[$replaceText[$getServerVar[language];Español;Prefijo Cambiado];Inglés;Changed prefix] ☑️]
$description[$replaceText[$replaceText[$getServerVar[language];Español;El prefijo nuevo ahora es];Inglés;The new prefix is] \`\`\`$getServerVar[prefix]\`\`\`]
$color[GREEN]
$argsCheck[>3;:x: $replaceText[$replaceText[$getServerVar[language];Español;No puedes tener un prefijo de mas de 4 caracteres];Inglés;You cannot have a prefix of more than 4 characters]]
$argsCheck[>1;$replaceText[$replaceText[$getServerVar[language];Español;Su prefijo debe tener mas de 1 caracter];Inglés;Your prefix must have more than 1 character]]`
})