module.exports = ({
 name: 'calc',
 code: `
$title[Matemáticas]
$description[ 
Pregúnta:
$message[1] $message[2] $message[3]

Respuesta:
 $math[$replaceText[$message; ;]]]
 $color[RANDOM]
 
$onlyIf[$isNumber[$message[3]]!=false;:x: debes seguir este orden <número> <símbolo> <número>. los símbolos son los siguientes: +, *, /, -]
$onlyIf[$checkContains[$message[2];*;/;-;+]!=false;:x: debes seguir este orden <número> <símbolo> <número>. los símbolos son los siguientes: +, *, /, -]
$onlyIf[$isNumber[$message[1]]!=false;:x: debes seguir este orden <número> <símbolo> <número>. los símbolos son los siguientes: +, *, /, -]
$onlyIf[$isNumber[$message[3]]!=false;:x: debes seguir este orden <número> <símbolo> <número>. los símbolos son los siguientes: +, *, /, -]
 `
})
