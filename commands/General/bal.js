module.exports = ({
name: "bal",
description: "Sirve para poder ver tu dinero en mano y en el banco",
usage: "dr!bal",
note: "si ppnes dr!bal <mención> también podras ver el dinero de esa persona",
code: `$title[Balance $userTag;https://api.playmax.repl.co/]
$dedcription[$replaceText[$replaceText[$getServerVar[language];Español;💵 **Dinero:**
$getUserVar[money;$findMember[$message[1]]]

🏛️** Banco:**
$getUserVar[bank;$findMember[$message[1]]]

💰 **Total:**
$sum[$getUserVar[bank;$findMember[$message[1]]];$getUserVar[money;$findMember[$message[1]]]]];Inglés;💵 **Money:**
$getUserVar[money;$findMember[$message[1]]]

🏛️** Bank:**
$getUserVar[bank;$findMember[$message[1]]]

💰 **Total:**
$sum[$getUserVar[bank;$findMember[$message[1]]];$getUserVar[money;$findMember[$message[1]]]]]
]
$color[RANDOM]
$footer[$replaceText[$replaceText[$getServerVar[language];Español;De];Inglés;Of] $username[$findMember[$message[1]]]]
`
})