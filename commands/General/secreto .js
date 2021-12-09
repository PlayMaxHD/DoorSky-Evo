module.exports = {
 name:"function",
 code:`
$title[$jsonrequest[https://api.leref.ga/functions/$message[1];data[0].name];https://aoi.leref.ga/functions/$replacetext[$jsonRequest[https://api.leref.ga/functions/$message[1];data[0].name];$;usd]]
$addField[Link:;[Has Click](https://aoi.leref.ga/functions/$replacetext[$jsonrequest[https://api.leref.ga/functions/$message[1];data[0].name];$;usd])]
$addField[Descripción:;\`\`\`html
$jsonRequest[https://api.leref.ga/functions/$message[1];data[0].desc]\`\`\`]
$addField[Uso:;\`\`\`kt
$jsonRequest[https://api.leref.ga/functions/$message[1];data[0].usage]\`\`\`]
$color[#0099FF]
$thumbnail[https://avatars.githubusercontent.com/u/83202021?s=280&v=4]
$onlyIf[$jsonRequest[https://api.leref.ga/functions/$message[1];message]==;Error, command not found.]
$argsCheck[>1;Uso incorrecto, dr!function <function>]
`
}  