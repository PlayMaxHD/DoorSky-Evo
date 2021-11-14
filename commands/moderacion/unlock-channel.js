module.exports = ({
name: "unlock-channel",
description: "sirve para desbloquear un canal que halla Sido bloqueado",
usage: "dr!unlock-channel <channel>",
note: "Para Bloquear un canal usa dr!lock-channel",
code: `$description[Canal Desbloqueado 🔓]
$color[GREEN]
$deleteIn[5s]
$deleteCommand
$modifyChannelPerms[$findChannel[$message];+viewchannel;$roleID[@everyone]]
$onlyPerms[managechannels;:x: lo siento, no tienes el permiso de \`MANAGE_CHANNELS\`]`
})