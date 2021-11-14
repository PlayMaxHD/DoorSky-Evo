module.exports = ({
 name: "edit-snipe",
description: "sirve para ver el último mensaje editado",
usage: "también está el dr!snipe para mensajes borrados",
note: "",
 code: `$author[$username[$getChannelVar[msgEditorID]]#$discriminator[$getChannelVar[msgEditorID]];$userAvatar[$getChannelVar[msgEditorID]]]
$description[$getChannelVar[esnipeOldMsg]]
$addTimestamp
$color[RANDOM]
$onlyIf[$getChannelVar[esnipeOldMsg]!=undefinied;{description: there is nothing i can snipe}{color: RED}]
$onlyIf[$getChannelVar[msgEditorID]!=undefinied;{description: there is nothing i can snipe}{color: RED}]
$suppressErrors[There is nothing i can snipe]`
})