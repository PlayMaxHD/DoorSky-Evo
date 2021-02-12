module.exports = {
  name: "say",
  code: `$onlyIf[$checkContains[$message;everyone;here]==false;No usar everyone ni here!!]
$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**

dr!$commandName $message

**Usado por:**

$username#$discriminator

**Server**

$serverName[$guildID]

**ServerID:**

$guildID}]
  $deletecommand $message`
};
