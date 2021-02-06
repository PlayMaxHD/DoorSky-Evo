module.exports = ({
  name: "set-welcome",
  description: "sirve para establecer el canal de bienvenidas",
  usage: "dr!set-welcome <canal>",
  note: "puedes quitar la bienvenida poniendo dr!reset-welcome",
  code:`$setServerVar[wchannel;$mentionedChannels[1]] $replaceText[$replaceText[$getServerVar[language];Español;Ahora las bienvenidas apareceran en <#$mentionedChannels[1]>
$onlyIf[$mentionedChannels[1]!=;:x: menciona un canal!!]];Inglés;Now the welcomes will appear in <#$mentionedChannels[1]>
$onlyIf[$mentionedChannels[1]!=;:x: mention a channel!!]{}]`
})