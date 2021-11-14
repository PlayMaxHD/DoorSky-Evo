module.exports = ({
name: "purge",
description: "Sirve para eliminar mensajes en forma masiva",
usage: "dr!purge <cantidad>",
note: "Puedes eliminar hasta 1000 Mensajes pero solo si son hace menos de 2 semanas",
code: `
$loop[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[true;$checkCondition[$message[1]==100];1];$checkCondition[$message[1]==200];2];$checkCondition[$message[1]==300];3];$checkCondition[$message[1]==400];4];$checkCondition[$message[1]==500];5];$checkCondition[$message[1]==600];6];$checkCondition[$message[1]==700];7];$checkCondition[$message[1]==800];8];$checkCondition[$message[1]==900];9];$checkCondition[$message[1]==1000];10];massivepurge]
$onlyIf[$checkContains[$message[1];100;200;300;400;500;600;700;800;900;1000]!=false;$replaceText[$replaceText[$getServerVar[language];Español;Solo puedes usar estos números];Inglés;You can only use these numbers]:
\`100\`,\`200\`,\`300\`,\`400\`,\`500\`,\`600\`,\`700\`,\`800\`,\`900\`,\`1000\`]
$onlyIf[$isNumber[$message[1]]!=false;$replaceText[$replaceText[$getServerVar[language];Español;Ese no es un número válido, valores disponibles];Inglés;That is not a valid number, available values]: \`100\`,\`200\`,\`300\`,\`400\`,\`500\`,\`600\`,\`700\`,\`800\`,\`900\`,\`1000\`]
$onlyIf[$message[1]!=;$replaceText[$replaceText[$getServerVar[language];Español;No se encontraron argumentos];Inglés;No arguments found]]]
`
})