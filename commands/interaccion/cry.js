module.exports = ({
name: "cry",
description: "todos tenemos sentimientos y esta bien llorar por eso",
usage: "dr!cry",
note: "recuerda, los hombres Tambien lloran",
code: `$title[Llorando... 😖]
$description[**$username** esta llorando...]
$image[$jsonRequest[https://api.willz.repl.co/anime/cry;url]]
$color[RANDOM]`
})