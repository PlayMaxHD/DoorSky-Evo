module.exports = ({
name: "unmute",
description: "desmutea a alguien",
usage: "dr!unmute <user>",
note: "si no muteaste a nadie no va a funcionar",
code: `$setUserVar[mute;false;$mentioned[1]]
$title[$replaceText[$replaceText[$getServerVar[language];Español;Has desmuteado a alguien];Inglés;You have unmuted someone]]
$description[$username $replaceText[$replaceText[$getServerVar[language];Español;a desmuteado a];Inglés;to unmute to] $username[$mentioned[1]]]
$footer[$replaceText[$replaceText[$getServerVar[language];Español;por];Inglés;for]: $username#$discriminator;$authorAvatar]
$color[GREEN]
$onlyIf[$getUserVar[mute;$mentioned[1]]!=;$replaceText[$replaceText[$getServerVar[language];Español;este usuario no esta muteado];Inglés;this user is not muted]]
$onlyPerms[managemessages;$replaceText[$replaceText[$getServerVar[language];Español;no tienes permisos suficientes, nesesitas el permiso de \`MANAGE_MESSAGES\`];Inglés;You do not have sufficient permissions, you need the permission of \`MANAGE_MESSAGES \`]]
$onlyBotPerms[managemessages;$replaceText[$replaceText[$getServerVar[language];Español;no tengo los permisos nesesarios, nesesito el permiso de \`MANAGE_MESSAGES\` para mutear a alguien];Inglés;I don't have the necessary permissions, I need the \`MANAGE MESSAGES \` permission to mute someone]]`
})