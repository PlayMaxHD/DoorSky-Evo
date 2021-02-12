module.exports = {
  name: "userinfo",
  code: `$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**

dr!$commandName $message

**Usado por:**

$username#$discriminator

**Server**

$serverName[$guildID]

**ServerID:**

$guildID}]
$argsCheck[>1;❌ Menciona a alguien]
$title[User Info]
$color[ff6000]
$description[
**👤Avatar👤**: =======>

**🏷️Tag🏷️**:
 <@$mentioned[1]>

**📝Nombre📝**:
 $username[$mentioned[1]]#$discriminator[$mentioned[1]]

**🆔 ID del usuario🆔**:
 $mentioned[1]

**🔵 Actividad 🔵**
 $activity

**💬DM Status💬**:
 None 
 
🖥️**Plataforma**📱
$platform[$mentioned[1]]

**✅ Verificación✅**:
 True

**🤖Bot🤖**:
 $isBot[$mentioned[1]]

**📅Creation Date📅**
$creationDate[$mentioned[1]]

**🔶Rol más alto🔶**:
 <@&$highestRole[$mentioned[1]]>

**🎭Roles🎭**:
$userRoles[$mentioned[1]]

]
$footer[Ejecutado por: $username#$discriminator[$authorID]]
$thumbnail[$userAvatar[$mentioned[1]]]`
};
