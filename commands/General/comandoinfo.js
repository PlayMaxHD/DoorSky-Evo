module.exports = ({
name: "cmdinfo",
aliases: ["commandInfo","commandinfo","infocmd","cmdInfo"],
description: "sirve para ver la información de cada comando",
usage: "dr!cmdinfo <comando>",
note: "debes escribir el nombre exacto del comando si no, no funcionara",
code: `$color[GREEN]
$title[$replaceText[$replaceText[$getServerVar[language];Español;Información Comandos];Inglés;Information Commands]]
$description[$replaceText[$replaceText[$getServerVar[language];Español;
**Descripción:**
$commandInfo[$message;description]

**Uso Correcto:**
$commandInfo[$message;usage]

**Nota:**
$commandInfo[$message;note]];Inglés;
**Descriptión:**
$replaceText[$replaceText[$replaceText[$jsonRequest[https://api.playmax.repl.co/api/traducir?to=En?text=$replaceText[$replaceText[$replaceText[$replaceText[$commandInfo[$message;description];%;];C3;];A1;]; ;%20];res];%;];C3;];A1;]

**Correct usage:**
$commandInfo[$message;usage]

**Note:**
$replaceText[$replaceText[$replaceText[$jsonRequest[https://api.playmax.repl.co/api/traducir?to=en?text=$replaceText[$replaceText[$replaceText[$replaceText[$commandInfo[$message;note];%;];C3;];A1;]; ;%20];res];%;];A1;];C3;]]]
$replaceText[$replaceText[$getServerVar[language];Español;$argsCheck[>1;{color:RED}{title:Error :x:}{description:Debes proporcionar el nombre del comando 
  
  **USO CORRECTO:**
  dr!cmdinfo <comando>
  
  **Nota:**
  debes escribir el nombre del comando exactamente como esta 
}]];Inglés;$argsCheck[>1;{color:RED}{title:Error :x:}{description:You must provide the command name 
  
  **Correct Usage:**
  dr!cmdinfo <comando>
  
  **Note:**
  you must write the command name exactly like this 
}]]`
})