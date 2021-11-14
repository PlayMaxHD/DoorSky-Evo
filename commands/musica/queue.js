module.exports = ({
name: "queue",
description: "Sirve para ver la lista de canciones",
usage: "dr!queue",
note: "tenés que estar en un chat de voz!!",
code: `
$title[$queueLength Canciones!!] 
$description[$queue[1;15; {number} - {title} (By: <$\{userID}>]]
$color[RANDOM]
$onlyIf[$queueLength>0;:x: No hay Músicas En la Cola!!]
$onlyIf[$voiceID!=;:x: No estás en un chat de voz!!]`
})
