module.exports = ({
name: "cat",
description: "Muestra una imagen random de un gato",
usage: "dr!cat",
note: "no vas a poder resistir tanta ternura 😻",
code: `$title[Un Adorable Gatito 😻]
$image[$jsonRequest[https://some-random-api.ml/img/cat;link]]
$color[RANDOM]`
})
