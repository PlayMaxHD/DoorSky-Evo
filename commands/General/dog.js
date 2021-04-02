module.exports = ({
name: "dog",
description: "Muestra una imagen random de un perro",
usage: "dr!dog",
note: "es demasiada ternura",
code: `$title[Un Adorable Perrito😲]
$image[$jsonRequest[https://some-random-api.ml/img/dog;link]]
$color[RANDOM]`
})
