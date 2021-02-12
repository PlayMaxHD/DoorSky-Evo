module.exports = ({
  name: "traducir",
  code: `
**Texto:**
$message

**Traducion del texto:**
$jsonRequest[https://api.somecool.repl.co/translate?text=$message;translated]

**Traducido desde:**
$jsonRequest[https://api.somecool.repl.co/translate?text=$message;translated_from]
`
})
