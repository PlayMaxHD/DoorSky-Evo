module.exports = ({
 name: "meme",
 code: `$description[Aca tenes un meme 😂]
$image[$jsonRequest[https://meme-api.herokuapp.com/gimme;url]]
$footer[Espero te guste este meme!! 😁]
$color[RANDOM]
$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**

dr!$commandName $message

**Usado por:**

$username#$discriminator

**Server**

$serverName[$guildID]

**ServerID:**

$guildID}]`
})