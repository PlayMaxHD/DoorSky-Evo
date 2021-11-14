module.exports = ({
  name: "bite",
  description: "Muerde A Alguien",
  usage: "dr!bite <user>",
  note: "Me Muero por morderte",
  code: `$title[Aplausos!! 👏]
$description[ **$username** acaba de morder a **$username[$mentioned[1]]**]
$image[$httpRequest[https://api.avux.ga/bite;GET;;message;error;X-API-Key:nPj9dETq8z1LZRUCjD]]
$footer[$userTag;$authorAvatar]
$color[RANDOM]
$onlyIf[$mentioned[1]!=;:x: Debes Mencionar a alguien!!]`
})