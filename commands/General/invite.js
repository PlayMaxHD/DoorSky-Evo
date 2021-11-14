module.exports = ({
name: "invite",
description: "Obtenga una invitación para añadir a DoorSky a su servidor!!",
usage: "dr!invite",
note: "Esta invitación tendrá la función del slash command asi que le pedira ese permiso",
code: `$title[$replaceText[$replaceText[$getServerVar[language];Español;Invitame 🥇];Inglés;Invite me 🥇]]
$description[Link 
[DoorSky Evolution\\]($getBotInvite[admin])]
$color[GREEN]
$footer[$replaceText[$replaceText[$getServerVar[language];Español; Gracias];Inglés;Thank you] $userTag]`
})