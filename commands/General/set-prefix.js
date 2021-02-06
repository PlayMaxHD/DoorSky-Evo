module.exports = ({
name: "set-prefix",
aliases: "setprefix",
description: "Sirve para establecer un nuevo prefix",
usage: "dr!setprefix <nuevo prefijo>",
note: "para restablecer el prefix use $getServetVar[prefix]reset-prefix",
code: `$setServerVar[prefix;$message[1]
$title[Prefijo Cambiado ☑️]
$description[El prefijo nuevo ahora es \`\`\`$getServerVar[prefix]\`\`\`]
$color[GREEN]
$argsCheck[>3;:x: No puedes tener un prefijo de mas de 4 caracteres]
$argsCheck[>1;Su prefijo debe tener mas de 1 caracter]`
})