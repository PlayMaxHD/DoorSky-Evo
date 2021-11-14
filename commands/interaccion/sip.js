module.exports = ({
name: "sip",
description: "Toma Una bebida",
usage: "dr!sip",
note: "no bebas mucho!! jiji",
code: `$title[Bebida]
$description[**$username** Esta Bebiendo!!]
$image[$httpRequest[https://api.avux.ga/sip;GET;;message;error;X-API-Key:nPj9dETq8z1LZRUCjD]]
$footer[$userTag;$authorAvatar]
$color[RANDOM]`
})