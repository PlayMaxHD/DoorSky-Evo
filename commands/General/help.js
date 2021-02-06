module.exports = ({
name: "help",
description: "Sirve para ver una lista de comandos",
usage: "dr!help",
note: "Esto te será útil si eres nuevo con el bot!!",
code: `$title[$replaceText[$replaceText[$getServerVar[language];Español;Comando de Ayuda];Inglés;Help command]]
$description[$replaceText[$replaceText[$getServerVar[language];Español;Hola esta es mi lista de ayuda, y mi prefix es $getServerVar[prefix]

**Moderación:**
mute | unmute | warn | warn-list | remove-warn | clear | kick | ban | unban | addrole | change-name | remove-role | purge | tempban | tempmute 

**Configuración:**
set-welcome | set-suggest | set-leave | set-msg-leave | set-confession | set-logs | setprefix | set-lang | set-ticket | giveaway

**Economía:**
work | daily | bal | remove-money | add-money | gift | crime | rob

**Diversión:**
meme | rps | chiste | verdad-o-reto | among | 8ball | trump | waifu | say 

**Información:**
botinfo | serverinfo | covid | today | horoscopo | donate | support | cmdinfo | help | ping | profile | uptime | web | avatar | jumbo | vote | invite 

**Animales:**
gato | perro | panda | fox 

**Reacción & Interacción:**
love | trash | baka | bite | claps | cook | dance | hug | kill | kiss | punch | run | sleep | angry | boom | confused | cry | dab | fbi | game | happy | shrug | sip | vomit | wanted

**Música:**
queue | play | reproduciendo |

**Otros:**
traducir | calc | youtube | wiki

];Inglés;Hi this is my help list, and my prefix is $getServerVar[prefix]

**Moderatión:**
mute | unmute | warn | warn-list | remove-warn | clear | kick | ban | unban | addrole | change-name | remove-role | purge | tempban | tempmute 

**Configuratión:**
set-welcome | set-suggest | set-leave | set-msg-leave | set-confession | set-logs | setprefix | set-lang | set-ticket | giveaway

**Economy:**
work | daily | bal | remove-money | add-money | gift | crime | rob

**Fun:**
meme | rps | chiste | verdad-o-reto | among | 8ball | trump | waifu | say 

**Informatión:**
botinfo | serverinfo | covid | today | horoscopo | donate | support | cmdinfo | help | ping | profile | uptime | web | avatar | jumbo | vote | invite 

**Animals:**
gato | perro | panda | fox 

**Reactions & Interactións:**
love | trash | baka | bite | claps | cook | dance | hug | kill | kiss | punch | run | sleep | angry | boom | confused | cry | dab | fbi | game | happy | shrug | sip | vomit | wanted

**Músic:**
queue | play | reproduciendo |

**Other:**
traducir | calc | youtube | wiki

]]
$color[06FF00]
$footer[$username#$discriminator;$authorAvatar]
$thumbnail[$userAvatar[$clientID]]
$onlyForIDs[717901806050738177;:x: no disponible aun]
`
})