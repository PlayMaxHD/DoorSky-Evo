module.exports = ({
name: "se-busca",
description: "nuestra una imágen cin la foto de la persona mencionada y la recompensa",
usage: "dr!se-busca <user>",
note: "solo se puede mencionar a 1 persona a la vez",
code: `$attachment[https://api.xzusfin.repl.co/wanted?image=$userAvatar[$mentioned[1]]?size=4096&style=3;buscado.webp]
$onlyIf[$mentioned[1]!=;:x: menciona a alguien]`
})