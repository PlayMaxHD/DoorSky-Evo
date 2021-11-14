module.exports = ({
name: "confused",
description: "demuestrale a alguien que estas confundido",
usage: "dr!confused",
note: "O.o Confusa esta información",
code: `$title[Confuso... O.o]
$description[**$username** esta muy confundido...]
$image[$httpRequest[https://api.avux.ga/confused;GET;;message;error;X-API-Key:nPj9dETq8z1LZRUCjD]]
$color[RANDOM]`
})