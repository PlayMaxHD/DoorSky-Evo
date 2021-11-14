module.exports = ({
name: "baka",
description: "Insulta a alguien",
usage: "dr!baka <user>",
note: "no insultes a nadie!! aprende a respetar!!",
code: `$title[Muchos Insultos!! :0]
$description[**$username** a insultado a **$username[$mentioned[1]]**]
$image[$httpRequest[https://api.avux.ga/baka;GET;;message;error;X-API-Key:nPj9dETq8z1LZRUCjD]]
$footer[$userTag;$authorAvatar]
$color[RANDOM]
$onlyIf[$mentioned[1]!=;:x: Menciona a alguien]`
})