module.exports = ({
name: "help",
description: "Sirve para ver una lista de comandos",
usage: "dr!help",
note: "Esto te será útil si eres nuevo con el bot!!",
code: `$title[$replaceText[$replaceText[$getServerVar[language];Español;Comando de Ayuda];Inglés;Help command]]
$description[$replaceText[$replaceText[$getServerVar[language];Español;Hola esta es mi lista de ayuda, y mi prefix es $getServerVar[prefix]

**Moderación:**
mute | unmute | warn | warn-list | remove-warn | clear | kick | ban | unban | purge | tempban | tempmute | lock-channel | unlock-channel 

**Configuración:**
set-welcome | set-suggest | set-leave | set-msg-leave | set-confession | set-logs | setprefix | set-lang 

**Economía:**
work | daily | bal | remove-money | add-money | pay | crime | rob

**Diversión:**
meme | rps | among | 8ball | trump | waifu | say 

**Información:**
botinfo | serverinfo | covid | today |  support | cmdinfo | help | ping | profile | uptime | web | avatar | jumbo | premium | vote | invite 

**Animales:**
cat | dog | pand 

**Reacción & Interacción:**
love | trash | baka | bite | claps | dance | hug | kill | kiss | punch | run | sleep | angry | boom | confused | cry | dab | happy | shrug | sip | wanted

**Música:**
queue | play | stop | skipe | resume | lyrics

**Otros:**
translate | calc | snipe | edit-snipe 


⚠️ ¡¡ADVERTENCIA!! ⚠️
No todos los comandos fueron traducidos, aun está en proceso
];Inglés;Hi this is my help list, and my prefix is $getServerVar[prefix]

**Moderatión:**
mute | unmute | warn | warn-list | remove-warn | clear | kick | ban | unban | purge | tempban | tempmute | lock-channel | unlock-channel 

**Configuratión:**
set-welcome | set-suggest | set-leave | set-msg-leave | set-confession | set-logs | setprefix | set-lang

**Economy:**
work | daily | bal | remove-money | add-money | gift | crime | rob

**Fun:**
meme | rps | chiste | among | 8ball | trump | waifu | say 

**Informatión:**
botinfo | serverinfo | covid | today | support | cmdinfo | help | ping | profile | uptime | web | avatar | jumbo | premium | vote | invite 

**Animals:**
cat | dog | pand 

**Reactions & Interactións:**
love | trash | baka | bite | claps | dance | hug | kill | kiss | punch | run | sleep | angry | boom | confused | cry | dab | happy | shrug | sip | vomit | wanted 

**Músic:**
queue | play | reproduciendo |

**Other:**
traducir | calc | snipe | edit-snipe


⚠️ ¡¡WARNING!! ⚠️
No All commands are translated, they are still in process
]]
$color[06FF00]
$footer[$username#$discriminator;$authorAvatar]

$onlyForIDs[814010071939416074;717901806050738177;:x: no disponible aun]
$image[https://cdn.discordapp.com/attachments/827623804020588545/830633279564677120/DoorSky-aevoltuoo.png]
`
})