module.exports = ({
name: "hug",
description: "Podrás a abrazar a todos!!",
usage: "dr!hug <user>",
note: "No hay nada mejor que un abrazo!!",
code: `$title[¡¡Abrazo!!]
$description[**$username** le dio un Abrazo a **$username[$mentioned[1]]**]
$image[$jsonRequest[https://some-random-api.ml/animu/hug;link]]
$color[RANDOM]
$onlyIf[$mentioned[1]!=;:x: Debes mencionar a quien quieras abrazar!!]`
})
