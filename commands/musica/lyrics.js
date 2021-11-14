module.exports = ({
name: "lyrics",
description: "Sirve para ver la letra de la canción",
usage: "dr!lyrics",
note: "tenes que estar en el chat de voz",
code:`
$title[Lyrics $songInfo[title]] $description[$jsonRequest[https://some-random-api.ml/lyrics?title=$songInfo[title];lyrics;No Lyrics Found for this song.] $color[RANDOM] ]
$onlyIf[$voiceID!=;:x: no estas en un chat de voz]`
})