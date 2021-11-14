module.exports = ({
name: "resume", 
description: "vuelve a poner la música que estaba en pausa",
usage: "dr!resume",
note: "Que siga la fiesta!!!!",
code: ` Quitando el modo pausa...
$editIn[3s;$resumeSong Musica Despausada!!]
$onlyIf[$voiceID!=;{color:RED}{description: Please join a Voice Channel First}]
$onlyIf[$queueLength>0;{color:RED}{description: Queue is empty!!}]
$addCmdReactions[▶️]`
})