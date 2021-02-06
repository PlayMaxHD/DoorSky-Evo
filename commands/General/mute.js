module.exports = ({
name: "mute",
description: "mueta a un usuario",
usage: "dr!mute <usuario>",
note: "Este comando no añadiré ningún rol, nesesita el permiso dd borrar mensajes, lo que va a hacer es que cads mensaje que mande se borrara solo automáticamente, pafa evitar cosas raras con roles y demas",
code: `$setServerVar[mute;true]
$title[se a muteado a alguien]
$description[se a muteado a $username[$mentioned[1]]]
$footer[por: $username#$discriminator;$authorAvatar]
$color[BLACK]
$onlyIf[$mentioned[1]!=;memciona a alguien]
$onlyIf[$getUserVar[mute;$mentioned[1]]!=;el usuario ya ests muteado, usa dr!umute <user> para desmutearlo]
$onlyPerms[managemessages;no tienes permisos suficientes, nesesitas el permiso de \`MANAGE_MESSAGES\`]
$onlyBotPerms[managemessages;no tengo los permisos nesesarios, nesesito el permiso de \`MANAGE_MESSAGES\` para mutear a alguien]`
})