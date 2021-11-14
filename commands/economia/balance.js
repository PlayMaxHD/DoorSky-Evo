module.exports = ({
name: "bal",
description: "Sirve para poder ver tu dinero en mano y en el banco",
usage: "dr!bal",
note: "si ppnes dr!bal <mención> también podras ver el dinero de esa persona",
code: `$title[Balance $userTag[$findMember[$message]]]
$description[$replaceText[$replaceText[$getServerVar[language];Español;💵 **Dinero:**
$abbreviate[$getUserVar[money;$findMember[$message]]]
🏛️** Banco:**
$abbreviate[$getUserVar[bank;$findMember[$message]]]
💰 **Total:**
$abbreviate[$sum[$getUserVar[bank;$findMember[$message]];$getUserVar[money;$findMember[$message]]]]];Inglés;💵 **Money:**
$abbreviate[$getUserVar[money;$findMember[$message]]]
🏛️** Bank:**
$abbreviate[$getUserVar[bank;$findMember[$message]]]
💰 **Total:**
$abbreviate[$sum[$getUserVar[bank;$findMember[$message]];$getUserVar[money;$findMember[$message]]]]]
]
$color[RANDOM]
$footer[$replaceText[$replaceText[$getServerVar[language];Español;De];Inglés;Of] $username[$findMember[$message[1]]]]
$thumbnail[$userAvatar[$findMember[$message]]]
`
})