module.exports = ({
name: "run",
description: "Corre!!!",
usage: "dr!run",
note: "Pa que corras de esta conversación",
code: `$title[CORREEEE!!!]
$description[**$username** se fue corriendo!!]
$image[$httpRequest[https://api.avux.ga/run;GET;;message;error;X-API-Key:nPj9dETq8z1LZRUCjD]]
$footer[$userTag;$authorAvatar]
$addTimeStamp
$color[RANDOM]`
})