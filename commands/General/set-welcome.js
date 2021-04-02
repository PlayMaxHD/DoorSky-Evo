module.exports = ({
  name: "set-welcome",
  description: "sirve para establecer el canal de bienvenidas",
  usage: "dr!set-welcome <canal>",
  note: "puedes quitar la bienvenida poniendo dr!reset-welcome",
  code:`$setServerVar[wchannel;$mentionedChannels[1]]
  $title[$replaceText[$replaceText[$getServerVar[language];Español;Bienvenida Establecida];Inglés;Established welcome]]
  $description[$replaceText[$replaceText[$getServerVar[language];Español;Ahora las bienvenidas apareceran en <#$mentionedChannels[1]>
];Inglés;Now the welcomes will appear in <#$mentionedChannels[1]>]
]
$color[RANDOM]
$onlyIf[$mentionedChannels[1]!=;:x: $replaceText[$replaceText[$getServerVar[language];Español; Menciona un Canal!!];Inglés; mention a channel!!]]`
})