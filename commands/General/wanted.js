module.exports = ({
name: "wanted",
description: "nuestra una imágen cin la foto de la persona mencionada y la recompensa",
usage: "dr!se-busca <user>",
note: "solo se puede mencionar a 1 persona a la vez",
code: `$title[Se Busca...]
$image[https://api.xzusfin.repl.co/wanted?image=$replaceText[$userAvatar[$mentioned[1]];webp;png]?size=2048&style=3]
$onlyIf[$mentioned[1]!=;:x: menciona a alguien]`
})