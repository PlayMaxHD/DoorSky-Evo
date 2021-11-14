module.exports = ({
	name: 'snipe',
description: "Sirve Para Ver el último mensaje eliminado",
usage: "dr!snipe",
note: "también está el dr!edit-snipe",
	code: `$author[$userTag[$getChannelVar[Author_Snipe;$mentionedChannels[1;yes]]];$userAvatar[$getChannelVar[Author_Snipe;$mentionedChannels[1;yes]]]]
$description[$getChannelVar[Message_Snipe;$mentionedChannels[1;yes]]]
$footer[#$channelName[$mentionedChannels[1;yes]]]
$color[$userRoleColor[$getChannelVar[Author_Snipe;$mentionedChannels[1;yes]]]]
$addTimestamp
$onlyIf[$getChannelVar[Message_Snipe;$mentionedChannels[1;yes]]!=;> **❌ There's nothing to snipe.**]`
})