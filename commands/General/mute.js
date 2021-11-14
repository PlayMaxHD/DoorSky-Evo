module.exports = ({
name: "mute",
description: "mutea a un usuario",
usage: "dr!mute <usuario>",
note: "Este comando no añadiré ningún rol, necesita el permiso dd borrar mensajes, lo que va a hacer es que cada mensaje que mande se borrara solo automáticamente, pafa evitar cosas raras con roles y demas",
code: `$giveRoles[$mentioned[1];$roleID[Muted]]
$title[$replaceText[$replaceText[$getServerVar[language];Español;Has Silenciado a $username[$mentioned[1]]];Inglés;you have silenced $username[$mentioned[1]]]]
$description[se a muteado a $username[$mentioned[1]]]
$footer[por: $username#$discriminator;$authorAvatar]
$color[BLACK]
$onlyIf[$mentioned[1]!=;$replaceText[$replaceText[$getServerVar[language];Español;memciona a alguien];Inglés;name someone]]
$onlyIf[$getUserVar[mute;$mentioned[1]]!=;$replaceText[$replaceText[$getServerVar[language];Español;el usuario ya ests muteado, usa dr!umute <user> para desmutearlo];Inglés;the user is already muted, use de!unmute <user> to unmute it]]
$onlyPerms[managemessages;$replaceText[$replaceText[$getServerVar[language];Español;no tienes permisos suficientes, nesesitas el permiso de];Inglés;You do not have sufficient permissions, you need the permission of] \`MANAGE_MESSAGES\`]
$onlyBotPerms[managemessages;$replaceText[$replaceText[$getServerVar[language];Español;no tengo los permisos nesesarios, nesesito el permiso de \`MANAGE_MESSAGES\` para mutear a alguien];Inglés;I don't have the necessary permissions, I need the \`MANAGE MESSAGES \` permission to mute someone]]
$onlyIf[$mentioned[1]=!$AuthoriD;error, no puedes mutearte]`
})