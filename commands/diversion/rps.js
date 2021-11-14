module.exports = ({
name: "rps",
code: `$awaitMessages[$authorID;10s;rock,paper,scissor;rock,paper,scissor;Te has quedado sin tiempo]
$title[Piedra, Papel, o Tijera!!]
$description[$replaceText[$replaceText[$getServerVar[language];Español;elige que con que vas a jugar!!];Inglés;choose what you are going to play with !!]

\`rock\` \`paper\` \`scissor\`] 
$footer[$userTag;$authorAvatar]
$color[RANDOM]
$deleteIn[10s]
`
})
