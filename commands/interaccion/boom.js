module.exports = ({
name: "boom",
description: "pon una bomba y explota todo!!",
usage: "dr!boom",
note: "pon una en tu escuela >:)",
code: `$title[BOOOM!!]
$description[**$username** Ha hecho esplotar todo el lugar!!]
$image[$httpRequest[https://api.avux.ga/boom;GET;;message;error;X-API-Key:nPj9dETq8z1LZRUCjD]]
$footer[$userTag;$authorAvatar]
$color[RANDOM]`
})