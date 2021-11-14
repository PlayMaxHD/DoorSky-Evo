module.exports = ({
name: "slap",
description: "dale una cachetada a alguien",
usage: "dr!slap <user>",
note: "Para la persona que te robo la goma en la escuela >:)",
code: `$title[Bofetada!! 😲]
$description[**$username** le dio una bofetada a *$username[$mentioned[1]]]
$image[$httpRequest[https://api.avux.ga/slap;GET;;message;error;X-API-Key:nPj9dETq8z1LZRUCjD]]
$color[RANDOM]
$onlyIf[$mentioned[1]!=;:x: Menciona a alguien primero]
`
})