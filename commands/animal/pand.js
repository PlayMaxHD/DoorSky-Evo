module.exports = ({
 name: "panda",
 description: "Foto de Un panda",
 usage: "dr!panda",
 note: "Abrazable...",
 code: `
$description[**$jsonRequest[https://no-api-key.com/api/v1/animals/panda;fact]**]

$image[$jsonRequest[https://no-api-key.com/api/v1/animals/panda;image]]
$color[RANDOM]
$footer[$userTag;$authorAvatar]
`
 });