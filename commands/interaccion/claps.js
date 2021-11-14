module.exports = ({
  name: "claps",
  description: "Aplausos",
  usage: "dr!claps",
  note: "Tu te mereces un aplauso",
  code: `$title[Aplausos!! 👏]
$description[Genial, **$username** Esta Aplaudiendo!!]
$image[$httpRequest[https://api.avux.ga/claps;GET;;message;error;X-API-Key:nPj9dETq8z1LZRUCjD]]
$footer[$userTag;$authorAvatar]
$color[RANDOM]`
})