module.exports = ({
name: "invite",
description: "Obtenga una invitación para añadir a DoorSky a su servidor!!",
usage: "dr!invite",
note: "Esta invitación tendrá la función del slash command asi que le pedira ese permiso",
code: `$title[$replaceText[$replaceText[$getServerVar[language];Español;Invitalo 🥇];Inglés;Invite him 🥇]]
$description[$replaceText[$replaceText[$getServerVar[language];Español;Invita a [DoorSky Evolution\\]($getBotInvite)];Inglés;Invite for [DoorSky Evolution\\]($getBotInvite)]]
$color[GREEN]
$footer[$replaceText[$replaceText[$getServerVar[language];Español; Gracias];Inglés;Thank you] $userTag]`
})