module.exports = ({
name: "unmute",
description: "desmutea a alguien",
usage: "dr!unmute <user>",
note: "si no muteaste a nadie no va a funcionar",
code: `$setUserVar[mute;false;$mentioned[1]]
$title[Has desmuteado a alguien]
$description[$username a desmuteado a $username[$mentioned[1]]]
$footer[por: $username#$discriminator;$authorAvatar]
$color[GREEN]
$onlyIf[$getUserVar[mute;$mentioned[1]]!=;este usuario no esta muteado]
$onlyPerms[managemessages;no tienes permisos suficientes, nesesitas el permiso de \`MANAGE_MESSAGES\`]
$onlyBotPerms[managemessages;no tengo los permisos nesesarios, nesesito el permiso de \`MANAGE_MESSAGES\` para mutear a alguien]`
})