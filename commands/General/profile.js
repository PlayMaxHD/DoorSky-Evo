module.exports = ({
name: "profile",
description: "Sirve para ver la información de tu Prefil en DoorSky",
usage: "dr!profile",
note: "Esto sera muy útil y es recomendable Configurar todo!!",
code: `$title[$replaceText[$replaceText[$getServerVar[language];Español;Prefil De ];Inglés;Profile of ]$username#$discriminator]
$description[$replaceText[$replaceText[$getServerVar[language];Inglés;
🥇 Level: $getUserVar[level]
📆 Age: $getGlobalUserVar[edad]
♂️ Gender: $getGlobalUserVar[sexo]

**Backpack:**
💵 Dinero: $getGlobalUserVar[money]
💰 Bank: $getGlobalUserVar[bank]
🎒 Items: $getGlobalUserVar[items]

**Family:**
🤵 Marriage: $getGlobalUserVar[marry]
🐈 Pets: $getGlobalUserVar[pets]
🧒 Children: $getGlobalUserVar[hijo]]

];Español;
🥇 Nivel: $getUserVar[level]
📆 Edad: $getGlobalUserVar[edad]
♂️ Genero: $getGlobalUserVar[sexo]

**Mochila:**
💵 Dinero: $getGlobalUserVar[money]
💰 Banco: $getGlobalUserVar[bank]
🎒 Items: $getGlobalUserVar[items]

**Familia:**
🤵 Matrimonio: $getGlobalUserVar[marry]
🐈 Mascota: $getGlobalUserVar[pets]
🧒 Hijos: $getGlobalUserVar[hijo]]

]]
$color[RANDOM]
$thumbnail[$authorAvatar]
$footer[$replaceText[$replaceText[$getServerVar[language];Español;Economia 💸];Inglés;Economy 💸]]
`
})