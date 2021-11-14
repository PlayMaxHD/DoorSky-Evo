module.exports = ({
  name: "trump",
  description: "crea tus propios tweet de Trump",
  usage: "dr!trump <message>",
note: "Nada Al Respecto",
 code: `
 
$color[RANDOM]
$image[https://api.no-api-key.com/api/v2/trump?message=$replaceText[$message; ;+]]

$onlyIf[$message!=;$replaceText[$replaceText[$getServerVar[language];Español;¡Escribe algo!];Inglés;Type something!]]`
})
