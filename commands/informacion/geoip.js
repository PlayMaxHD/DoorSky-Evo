module.exports = ({
name: "geoip",
description: "sirve para ver información de una ip",
usage: "dr!geoip <IP>",
note: "usalo con responsabilidad >:)",
code: `$title[Localizando IP...]
$description[IP: \`$jsonRequest[https://saroki.tk/api/geoip?ip=$message;ip]\`
Country: \`$jsonRequest[https://saroki.tk/api/geoip?ip=$message;location.country]\`
Region: \`$jsonRequest[https://saroki.tk/api/geoip?ip=$message;location.region]\`
City: \`$jsonRequest[https://saroki.tk/api/geoip?ip=$message;location.city]\`
ISP: \`$jsonRequest[https://saroki.tk/api/geoip?ip=$message;isp]\`]
$color[RANDOM]
$footer[$userTag;$authorAvatar]
$onlyIf[$message!=;escribe una ip valida]`
})