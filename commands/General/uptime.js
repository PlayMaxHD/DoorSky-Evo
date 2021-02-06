module.exports = ({
  name: "uptime",
description: "sirve para ver el último reinicio que tuvo el bot",
usage: "dr!uptime",
note: "te servira para saber si estoy trabajando o haciendo el vago",
code: `$title[Última Actualización]
$image[https://falsiskremlin.sirv.com/resim_2020-11-28_113400.png?text.0.text=$replaceText[$uptime; ;+;-1]&text.0.position.x=-20%25&text.0.position.y=-30%25&text.0.size=50&text.0.color=ffffff&watermark.0.image=%2FImages%2Fresim_2020-11-29_103837.png&watermark.0.position.x=-35%25&watermark.0.scale.width=170&watermark.0.scale.height=170] $color[RANDOM]`
})