module.exports = ({
name: "rob",
description: "robale a un usuario su dinero",
usage: "dr!rob <user>",
note: "solo Usuarios!!",
code: `$title[Dame Todo!!]
$description[$username acaba de robarle a $username[$mentioned[1]] un total de $$random[50;$getUserVar[money;$mentioned[1]]] monedas!!]
$color[RANDOM]
$addTimeStamp
$setUserVar[money;$sub[$getUserVar[money;$mentioned[1]];$random[50;$getUserVar[money;$mentioned[1]]]];$mentioned[1]]
$setUserVar[money;$sum[$getUserVar[money];$random[50;$getUserVar[money;$mentioned[1]]]]]
$onlyIf[$getUserVar[money;$mentioned[1]]>49;:x: el usuario tiene menos de 50 monedas, no vale la pena]
$onlyIf[$getUserVar[money]>49;:x: debes tener mas de 50 monedas para robar!!]
$onlyIf[$mentioned[1]!=$authorID;:x: no puedes robarte a ti mismo!!]
$onlyIf[$mentioned[1]!=;:x: Mencióna a alguien]
$cooldown[5h; debes esperar 5 horas antes de volver a robar]`
})