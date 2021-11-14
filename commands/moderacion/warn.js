module.exports = ({
name: "warn",
description: "advierte a alguien que incumplió alguna regla",
usage: "dr!warn <user> <reasson> (optional)",
note: "solo los que tengan el permiso de borrar Mensajes",
code: `$setUserVar[warn;$sum[$getUserVar[warn;$mentioned[1]];1];$mentioned[1]]
$title[Advertencia!!]
$description[:0 **$username** acaba de advertir a **$username[$mentioned[1]]**!!

**Razon:**
$messageSlice[1]]
$color[RED]
$onlyIf[$mentioned[1]!=$clientID;:x: No Puedes Advertirme a mi >:0]
$onlyIf[$mentioned[1]!=;:x: Menciona a alguien]
$onlyPerms[admin;:x: No eres un moderador!!]
`
})