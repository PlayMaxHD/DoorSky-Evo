module.exports = ({
  name: "set-logs",
  description: "establece el canal para logs",
  usage: "dr!set-logs <channel>",
  note: "Recomiendo que sea en un canal que solo admins puedan verlo",
  code: `$setServerVar[logs;$findChannel[$message]]
  $title[Canal Establecido ☑️]
  $description[El Canal <#$findChannel[$message]> fue establecido para logs!!]
  $color[RANDOM]
  $onlyPerms[managechannels;> :x: debes de tener el permiso de \`MANAGE_CHANNELS\`]`
})