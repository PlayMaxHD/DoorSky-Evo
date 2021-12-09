module.exports = ({
 name: 'calc',
 code: `
$title[$replaceText[$replaceText[$getServerVar[language];Español;Matemáticas];Inglés;Maths]]
$description[ 
$replaceText[$replaceText[$getServerVar[language];Español;Pregúnta:];Inglés;Question:]
$message[1] $message[2] $message[3]

$replaceText[$replaceText[$getServerVar[language];Español;Respuesta:];Inglés;Answer:]
 $math[$replaceText[$message; ;]]]
 $color[RANDOM]
 
$onlyIf[$isNumber[$message[3]]!=false;:x: $replaceText[$replaceText[$getServerVar[language];Español;debes seguir este orden <número> <símbolo> <número>. los símbolos son los siguientes:];Inglés;You must follow this order <number> <symbol> <number>. the symbols are as follows:] +, *, /, -]
$onlyIf[$checkContains[$message[2];*;/;-;+]!=false;:x: $replaceText[$replaceText[$getServerVar[language];Español;debes seguir este orden <número> <símbolo> <número>. los símbolos son los siguientes:];Inglés;You must follow this order <number> <symbol> <number>. the symbols are as follows:] +, *, /, -]
$onlyIf[$isNumber[$message[1]]!=false;:x: $replaceText[$replaceText[$getServerVar[language];Español;debes seguir este orden <número> <símbolo> <número>. los símbolos son los siguientes:];Inglés;You must follow this order <number> <symbol> <number>. the symbols are as follows:] +, *, /, -]
$onlyIf[$isNumber[$message[3]]!=false;:x: $replaceText[$replaceText[$getServerVar[language];Español;debes seguir este orden <número> <símbolo> <número>. los símbolos son los siguientes:];Inglés;You must follow this order <number> <symbol> <number>. the symbols are as follows:] +, *, /, -]
 `
})
