module.exports = ({
name: "dog",
description: "Muestra una imagen random de un perro",
usage: "dr!dog",
note: "es demasiada ternura",
code: `$title[$replaceText[$replaceText[$getServerVar[language];Español;Un Adorable Perrito😲];Inglés;An Adorable Puppy😲]]
$image[$jsonRequest[https://some-random-api.ml/img/dog;link]]
$color[RANDOM]`
})
