module.exports = ({
name: "cry",
description: "todos tenemos sentimientos y esta bien llorar por eso",
usage: "dr!cry",
note: "recuerda, los hombres Tambien lloran",
code: `$title[Llorando... 😖]
$description[**$username** esta llorando...]
$image[$httpRequest[https://api.avux.ga/cry;GET;;message;error;X-API-Key:nPj9dETq8z1LZRUCjD]]
$color[RANDOM]`
})