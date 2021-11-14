module.exports = ({
  name: "8ball",
  description: "has preguntas y la bola 8 te respondera :D",
  usage: "dr!8ball <question>",
  note: "No me hago responsable de nada de lo que diga el bot ._.",
  code: `$title[$replaceText[$replaceText[$getServerVar[language];Español;Una Pregunta];Inglés;A question]!!]
  $description[
    $replaceText[$replaceText[$getServerVar[language];Español;Pregunta];Inglés;Question]:
\`$message\`
    
$replaceText[$replaceText[$getServerVar[language];Español;Respuesta:
\`$randomText[si;no;talvez; probablemente;Mejor preguntame otra cosa;Si tu lo crees]\`];Inglés;Answer:
Answer:
\`$randomText[yes;no;maybe;probably;Better ask me something else;If you believe it] \`]]
    $color[RANDOM]
    $footer[$userTag;$authorAvatar]
$onlyIf[$message!=;:x: $replaceText[$replaceText[$getServerVar[language];Español;debes escribir lo que quieras preguntar];Inglés;you must write what you want to ask]]`
})