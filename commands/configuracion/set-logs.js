module.exports = ({
  name: "set-logs",
  description: "establece el canal para logs",
  usage: "dr!set-logs <channel>",
  note: "Recomiendo que sea en un canal que solo admins puedan verlo",
  code: `$setServerVar[logs;$findChannel[$message]]
  $title[$replaceText[$replaceText[$getServerVar[language];Español;Canal Establecido];Inglés;Established Channel] ☑️]
  $description[$replaceText[$replaceText[$getServerVar[language];Español;El Canal <#$findChannel[$message]> fue establecido para logs];Inglés;Channel <#$findChannel[$message]> was set for logs]!!]
  $color[RANDOM]
  $onlyPerms[managechannels;> :x: $replaceText[$replaceText[$getServerVar[language];Español;debes de tener el permiso de];Inglés;you must have the permission of] \`MANAGE_CHANNELS\`]`
})