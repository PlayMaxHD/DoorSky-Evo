module.exports = ({
name: "list-warn",
description: "con esto puedes ver la cantidad de warns de x persona",
usage: "dr!list-warn <user>",
note: "si no Menciónas a alguien saldran tus warns",
code: `$title[Warns De $username[$mentioned[1]]]
$description[Vaya... Parece que **$username[$mentioned[1]]** tiene $getUserVar[warn;$mentioned[1]]]
$addTimeStamp
$color[RANDOM]
$onlyIf[$mentioned[1]!=;:x: Menciona a alguien]`
})