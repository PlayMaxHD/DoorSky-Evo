module.exports = ({
name: "slap",
description: "dale una cachetada a alguien",
usage: "dr!slap <user>",
note: "Para la persona que te robo la goma en la escuela >:)",
code: `$title[Bofetada!! 😲]
$description[**$username** le dio una bofetada a *$username[$mentioned[1]]]
$image[]
$color[RANDOM]
$onlyIf[$mentioned[1]!=;:x: Menciona a alguien primero]
`
})