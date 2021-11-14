module.exports = ({
name: "vote",
description: "Vota a DoorSky Para que crezca!!",
usage: "dr!vote",
note: "El bot esta en muchas botlist pero solo mostramos en las que se pueda votar",
code: `$title[$replaceText[$replaceText[$getServerVar[language];Español;Vota Por mi];Inglés;Vote For Me] 💚]
$description[
$replaceText[$replaceText[$getServerVar[language];Español;Estas son los lugares donde puedes votar por DoorSky Evolution];Inglés;These are the places where you can vote for DoorSky Evolution]

** Top.gg**
\`\`\`Proximamente\`\`\`

 **Discord Boats**
\`\`\`Proximamente\`\`\`
 
 **Botrix**
\`\`\`Proximamente\`\`\`
]
$color[GREEN]
$footer[$replaceText[$replaceText[$getServerVar[language];Español;Gracias];Inglés;Thanks] $userTag]`
})