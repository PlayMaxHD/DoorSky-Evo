module.exports = ({
name: "kill",
description: "Sirve para matar a alguien O.o",
usage: "dr!kiss <user>",
note: "Mata a esa persona que te no te presto el lápiz en la escuela >:3",
code: `$title[Hubo un Asesinato]
$description[**$username** Asesino a **$username[$mentioned[1]]** \`😲\`]
$image[$randomText[https://media.discordapp.net/attachments/742455998136057927/742917422524399686/image0.gif;https://media.discordapp.net/attachments/742455998136057927/742917423052881920/image1.gif;https://media.discordapp.net/attachments/742455998136057927/742917457404100778/image0.gif;https://media.discordapp.net/attachments/742455998136057927/742917457878057021/image1.gif;https://media.discordapp.net/attachments/742455998136057927/742917464962367601/image0.gif;https://media.discordapp.net/attachments/742455998136057927/742917465364758548/image1.gif;https://media.discordapp.net/attachments/742455998136057927/742917470930599976/image0.gif;https://media.discordapp.net/attachments/742455998136057927/742917471715197079/image1.gif
]]
$color[RED]
$onlyIf[$mentioned[1]!=$clientID;No puedes matarme, soy inmortal 👌]
$onlyIf[$mentioned[1]!=$authorID;No!! No lo hagas, tienes mucho que vivir 😔]
$onlyIf[$mentioned[1]!=;:x: Lo siento pero debes mencionar a alguien primero]`
})
