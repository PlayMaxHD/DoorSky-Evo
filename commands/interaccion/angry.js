module.exports = ({
name: "angry",
description: "Ponte Modo Enojad@!!",
usage: "dr!angry",
note: "usalo si te enoja la conversación",
code: `$title[FURIOSO!!]
$description[**$username** Esta enojado!!]
$image[$httpRequest[https://api.avux.ga/angry;GET;;message;error;X-API-Key:nPj9dETq8z1LZRUCjD]]
$footer[$userTag;$authorAvatar]
$color[RANDOM]
`
})