module.exports = ({
 name: "among",
 description: "juega al among us",
 usage: "dr!among us <user>",
 note: "Eres Impostor o Tripulante",
 code: `$author[$userTag[$findUser[$message]] Has Been Voted Out;$userAvatar[$findUser[$message]]]
$color[RANDOM]
$image[https://vacefron.nl/api/ejected?name=$replaceText[$username[$findUser[$message]]; ;+;-1]&impostor=$randomText[true;false]&crewmate=$randomText[black;blue;brown;cyan;darkgreen;lime;orange;pink;purple;red;white;yellow]]
$footer[Request By:$userTag[$authorID];$authorAvatar]
$addTimestamp
$onlyIf[$mentioned[1]!=;:x: $replaceText[$replaceText[$getServerVar[language];Español;Mencióna a alguien];Inglés;Mention someone]!!]`
})