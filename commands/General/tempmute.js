module.exports = ({
name: "tempmute",
description: "Sirve para mutear a alguien temporalmente",
usage: "dr!tempmute <usuario> <tiempo>",
note: "si no defines el tiempo el muteo sera permanente",
code: `
$channelSendMessage[$channelID;$title[$replaceText[$replaceText[$getServerVar[language];Español;El mute a acabado];Inglés;The mute is finished]]
$descripion[$replaceText[$replaceText[$getServerVar[language];Español;El tempmute de <@$mentioned[1]> a terminado];Inglés;The tempmute of <@$mentioned[1]> to finished]

$addField[Razón:;$replaceText[$replaceText[$getServerVar[language];Español;El tiempo acabo];Inglés;Time is up]]]
$color[RANDOM]]
$takeRoles[$mentioned[1];$roleID[Muted]]
$wait[$replaceText[$replaceText[$checkCondition[$noMentionMessage[1]==];true;24d];false;$noMentionMessage[1]]]
$channelSendMessage[$channelID;{description::white_check_mark: | $replaceText[$replaceText[$getServerVar[language];Español;se silencio a];Inglés;be silent to] $username[$mentioned[1]]#$discriminator[$mentioned[1]] $replaceText[$replaceText[$getServerVar[language];Español;durante];Inglés;During] \`$replaceText[$replaceText[$checkCondition[$noMentionMessage[1]==];true;$replaceText[$replaceText[$getServerVar[language];Español;
Tiempo Indefinido];Inglés;Undefined time]];false;$noMentionMessage[1]]\`}{color:RANDOM}]
$giveRoles[$mentioned[1];$roleID[Muted]]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];$replaceText[$replaceText[$getServerVar[language];Español;Ese usuario es más alto que yo en el puesto];Inglés;That user is taller than me in the position]]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];$replaceText[$replaceText[$getServerVar[language];Español;Ese usuario es más alto que tú en la posición del rol.];Inglés;That user is taller than you in the role position.]]
$onlyIf[$mentioned[1]!=$authorID;$replaceText[$replaceText[$getServerVar[language];Español;No puedes silenciarte];Inglés;You can't silence yourself]]
$onlyIf[$mentioned[1]!=;$replaceText[$replaceText[$getServerVar[language];Español;Debes mencionar a alguien.];Inglés;You must mention someone.]]
$onlyPerms[managemessages;{title:$replaceText[$replaceText[$getServerVar[language];Español;Permisos faltantes];Inglés;Missing Permissions]}{color:RANDOM}{description:$replaceText[$replaceText[$getServerVar[language];Español;Debes tener el permiso \`MANAGE_MESSAGES\` para usar este comando];Inglés;You must have \`MANAGE_MESSAGES \` permission to use this command]}]`
})