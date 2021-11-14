module.exports = ({
name: "lock-channel",
description: "Sirve Para Bloquear Un Canal",
usage: "dr!lock-channel <channel>",
note: "puedes usar dr!unlock-channel, para Desbloquear el canal ",
code: `$description[Canal Bloqueado 🔒]
$color[RED]
$deleteIn[5s]
$deleteCommand
$modifyChannelPerms[$findChannel[$message];-viewchannel;$roleID[@everyone]]
$onlyPerms[managechannels;:x: lo siento, no tienes el permiso de \`MANAGE_CHANNELS\`]`
})