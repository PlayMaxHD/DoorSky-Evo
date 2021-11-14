bot.command({
name: "songinfo",
descripcion: "info de la música que este puesta",
usage: "dr!songinfo",
note: "¿Nadie le esto? :c",
code: `
$title[SongInfo (NP)]
$description[
Actualmente Tocando: $songInfo[title]
Descripcion de La Cancion: $songInfo[description]
Duracion: $songInfo[duration]
Pedida Por: $songInfo[userID]
Artista: $songInfo[publisher]
Link: $songInfo[publisher_url]
$songInfo[thumbnail]]
$onlyIf[$voiceID!=;no estas en un chat de voz!!]
`
})