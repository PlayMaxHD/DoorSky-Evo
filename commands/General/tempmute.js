module.exports = ({
name: "tempmute",
description: "Sirve para mutear a alguien temporalmente",
usage: "dr!tempmute <usuario> <tiempo>",
note: "si no defines el tiempo el muteo sera permanente",
code: `
$channelSendMessage[$channelID;$title[El mute a acabado]
$descripion[El tempmute de <@$mentioned[1]> a terminado

$addField[Razón:;El tiempo acabo]]
$color[RANDOM]]
$takeRoles[$mentioned[1];$roleID[Muted]]
$wait[$replaceText[$replaceText[$checkCondition[$noMentionMessage[1]==];true;24d];false;$noMentionMessage[1]]]
$channelSendMessage[$channelID;{description::white_check_mark: | se silencio a $username[$mentioned[1]]#$discriminator[$mentioned[1]] durante \`$replaceText[$replaceText[$checkCondition[$noMentionMessage[1]==];true;Tiempo Indefinido];false;$noMentionMessage[1]]\`}{color:RANDOM}]
$giveRoles[$mentioned[1];$roleID[Muted]]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];Ese usuario es más alto que yo en el puesto]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];Ese usuario es más alto que tú en la posición del rol.]
$onlyIf[$mentioned[1]!=$authorID;No puedes silenciarte]
$onlyIf[$mentioned[1]!=;Debes mencionar a alguien.]
$onlyPerms[managemessages;{title:Missing Permissions}{color:RANDOM}{description:Debes tener el permiso \`MANAGE_MESSAGES\` para usar este comando}]`
})