module.exports = ({
name: "happy",
description: "expresa tu felicidad",
usage: "dr!happy",
note: "todos debemos de ser felices",
code: `$title[Felicidad!! 😃]
$description[**username** esta saltando de felicidad!!]
$image[$httpRequest[https://api.avux.ga/happy;GET;;message;error;X-API-Key:nPj9dETq8z1LZRUCjD]]
$color[RANDOM]`
})