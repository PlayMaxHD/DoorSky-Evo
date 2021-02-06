module.exports = ({
name: "cmdinfo",
aliases: ["commandInfo","commandinfo","infocmd","cmdInfo"],
description: "sirve para ver la información de cada comando",
usage: "dr!cmdinfo <comando>",
note: "debes escribir el nombre exacto del comando si no, no funcionara",
code: `$color[GREEN]
$title[$replaceText[$replaceText[$getServerVar[language];Español;Información Comandos];Inglés;Information Commands]]
$description[$replaceText[$replaceText[$getServerVar[language];Español;

$addField[Nota;$commandInfo[$message;note]]

$addField[Uso Correcto;$commandInfo[$message;usage]]


$addField[Descripción;$commandInfo[$message;description]]];Inglés;

$addField[Note;$commandInfo[$message;note]]

$addField[Correct Usage;$commandInfo[$message;usage]]


$addField[Description;$commandInfo[$message;description]]]
]
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