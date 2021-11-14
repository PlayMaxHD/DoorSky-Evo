module.exports = ({
name: "sleep",
description: "práctica la dormicion",
usage: "dr!sleep",
note: "usalo si lo que estas hablando te aburre",
code: `$title[Zzzzz...]
$description[*$username** esta dormido]
$image[$httpRequest[https://api.avux.ga/sleep;GET;;message;error;X-API-Key:nPj9dETq8z1LZRUCjD]]
$footer[$userTag;$authorAvatar]
$color[RANDOM]`
})