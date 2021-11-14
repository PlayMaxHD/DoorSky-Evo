module.exports = ({
name: "tempban",
description: "Banea a alguien temporalmente",
usage: "dr!tempban <user> <tiempo> <razon>",
note: "la razon es opcional",
code: `$channelSendMessage[$channelID;$title[$replaceText[$replaceText[$getServerVar[language];Español;El baneo a acabado];Inglés;the ban is over]]
$descripion[$replaceText[$replaceText[$getServerVar[language];Español;El tempban de <@$mentioned[1]> a terminado];Inglés;The tempban of <@$mentioned[1]> has finished]

$addField[Razón:;$replaceText[$replaceText[$getServerVar[language];Español;El tiempo acabo];Inglés;Time is up]]]
$color[RANDOM]]
$unban[$mentioned[1]]
$wait[$replaceText[$replaceText[$checkCondition[$noMentionMessage[1]==];true;24d];false;$noMentionMessage[1]]]
$channelSendMessage[$channelID;{description::white_check_mark: | $username[$mentioned[1]]#$discriminator[$mentioned[1]] $replaceText[$replaceText[$getServerVar[language];Español;fue baneado durante];Inglés;was banned for] \`$replaceText[$replaceText[$checkCondition[$noMentionMessage[1]==];true;$replaceText[$replaceText[$getServerVar[language];Español;Tiempo Indefinido{}];Inglés;Undefined time]];false;$noMentionMessage[1]]\`}{color:RANDOM}]
$ban[$mentioned[1]]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];$replaceText[$replaceText[$getServerVar[language];Español;Ese usuario es más alto que yo en el puesto];Inglés;That user is taller than me in the position]]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];$replaceText[$replaceText[$getServerVar[language];Español;Ese usuario es más alto que tú en la posición del rol.];Inglés;That user is taller than you in the role position.]]
$onlyIf[$mentioned[1]!=$authorID;$replaceText[$replaceText[$getServerVar[language];Español;No puedes banearte];Inglés;You can't get banned]]
$onlyIf[$mentioned[1]!=;$replaceText[$replaceText[$getServerVar[language];Español;Debes mencionar a alguien.];Inglés;You must mention someone.]]$channelSendMessage[$channelID;
$replaceText[$replaceText[$getServerVar[language];Español;El tempban de <@$mentioned[1]> a terminado];Inglés;The tempban of <@$mentioned[1]> has finished]

$replaceText[$replaceText[$getServerVar[language];Español;**Razón:**
El tiempo acabo];Inglés;**Reason:**
Time is up]]
$unban[$mentioned[1]]
$wait[$replaceText[$replaceText[$checkCondition[$noMentionMessage[1]==];true;24d];false;$noMentionMessage[1]]]
$channelSendMessage[$channelID;{description::white_check_mark: | $username[$mentioned[1]]#$discriminator[$mentioned[1]] $replaceText[$replaceText[$getServerVar[language];Español;fue baneado durante];Inglés;was banned for] \`$replaceText[$replaceText[$checkCondition[$noMentionMessage[1]==];true;$replaceText[$replaceText[$getServerVar[language];Español;Tiempo Indefinido];Inglés;Undefined time]];false;$noMentionMessage[1]]\`}{color:RANDOM}]
$ban[$mentioned[1]]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];$replaceText[$replaceText[$getServerVar[language];Español;Ese usuario es más alto que yo en el puesto];Inglés;That user is taller than me in the position]]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];$replaceText[$replaceText[$getServerVar[language];Español;Ese usuario es más alto que tú en la posición del rol.];Inglés;That user is taller than you in the role position.]]
$onlyIf[$mentioned[1]!=$authorID;$replaceText[$replaceText[$getServerVar[language];Español;No puedes banearte];Inglés;You can't get banned]]
$onlyIf[$mentioned[1]!=;$replaceText[$replaceText[$getServerVar[language];Español;Debes mencionar a alguien.];Inglés;You must mention someone.]]
$onlyPerms[ban;{title:$replaceText[$replaceText[$getServerVar[language];Español;Permisos faltantes];Inglés;Missing Permissions]}{color:RANDOM}{description:$replaceText[$replaceText[$getServerVar[language];Español;Debes tener el permiso \`MEMBERS_BAN\` para usar este comando];Inglés;You must have \`MEMBERS_BAN \` permission to use this command]}]`
})