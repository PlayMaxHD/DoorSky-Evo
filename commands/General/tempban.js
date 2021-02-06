module.exports = ({
name: "tempban",
description: "Banea a alguien temporalmente",
usage: "dr!tempban <user> <tiempo> <razon>",
note: "la razon es opcional",
code: `$channelSendMessage[$channelID;$title[El baneo a acabado]
$descripion[El tempban de <@$mentioned[1]> a terminado

$addField[Razón:;El tiempo acabo]]
$color[RANDOM]]
$unban[$mentioned[1]]
$wait[$replaceText[$replaceText[$checkCondition[$noMentionMessage[1]==];true;24d];false;$noMentionMessage[1]]]
$channelSendMessage[$channelID;{description::white_check_mark: | $username[$mentioned[1]]#$discriminator[$mentioned[1]] fue baneado durante \`$replaceText[$replaceText[$checkCondition[$noMentionMessage[1]==];true;Tiempo Indefinido];false;$noMentionMessage[1]]\`}{color:RANDOM}]
$ban[$mentioned[1]]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];Ese usuario es más alto que yo en el puesto]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];Ese usuario es más alto que tú en la posición del rol.]
$onlyIf[$mentioned[1]!=$authorID;No puedes banearte]
$onlyIf[$mentioned[1]!=;Debes mencionar a alguien.]$channelSendMessage[$channelID;
El tempban de <@$mentioned[1]> a terminado

**Razón:**
El tiempo acabo]
$unban[$mentioned[1]]
$wait[$replaceText[$replaceText[$checkCondition[$noMentionMessage[1]==];true;24d];false;$noMentionMessage[1]]]
$channelSendMessage[$channelID;{description::white_check_mark: | $username[$mentioned[1]]#$discriminator[$mentioned[1]] fue baneado durante \`$replaceText[$replaceText[$checkCondition[$noMentionMessage[1]==];true;Tiempo Indefinido];false;$noMentionMessage[1]]\`}{color:RANDOM}]
$ban[$mentioned[1]]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];Ese usuario es más alto que yo en el puesto]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];Ese usuario es más alto que tú en la posición del rol.]
$onlyIf[$mentioned[1]!=$authorID;No puedes banearte]
$onlyIf[$mentioned[1]!=;Debes mencionar a alguien.]
$onlyPerms[ban;{title:Missing Permissions}{color:RANDOM}{description:Debes tener el permiso \`MEMBERS_BAN\` para usar este comando}]`
})