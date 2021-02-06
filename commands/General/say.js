module.exports = ({
name: "say",
description: "Sirve para que el bot diga lo que quieras",
usage: "dr!say <texto>",
note: "si Pones @everyone saldra **@**everyone al igual que con here",
code: `$replaceText[$message;@;**@**]
$deletecommand`
})