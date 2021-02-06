module.exports = ({
name: "set-ticket",
description: "Establece el canal de tickets",
usage: "dr!set-ticket <canal>",
note: "esto hace que el bot envía el mensaje para abrir ticket en el canal selecciónado",
code: `

$addReactions[<:Ticket_Evolution:801302155842682880>]
$title[Ticket Evolution <:Ticket_Evolution:801302155842682880>]
$description[Reacciona a <:Ticket_Evolution:801302155842682880> para abrír un ticket en este servidor!!] $color[GREEN] $footer[la evolución de los tickets!!]
$useChannel[$getServerVar[ticketChannel]]

$wait[3s]
$setServerVar[ticketMessage;$messageID]
$setServerVar[ticketCategory;$createChannel[Tickets Evolution;category;yes]]
$setServerVar[ticketChannel;$mentionedChannels[1]]
$onlyIf[$mentionedChannels[1]!=;:x: menciona un canal de texto]`
})