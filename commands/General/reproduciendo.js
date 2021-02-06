module.exports = ({
 name: "reproduciendo",
 aliases: ['np'],
code: `
$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$advancedTextSplit[$songInfo[duration]; ;1];{description: 

▬:radio_button:▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 

\`0$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]:$replaceText[$replaceText[$checkCondition[$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]]<10];true;0$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1];false;$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1]/$replaceText[$replaceText[$splitText[3];(;];);]
$textSplit[$songInfo[duration]; ]\` 
Requested by <@$songInfo[userID]>}{color:00ffff}{footer:© FreshBot | Music}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now playing:$userAvatar[$clientID]}]
$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];2]];{description: 

▬:radio_button:▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 

\`0$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]:$replaceText[$replaceText[$checkCondition[$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]]<10];true;0$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1];false;$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1]/$replaceText[$replaceText[$splitText[3];(;];);]
$textSplit[$songInfo[duration]; ]\` 
Requested by <@$songInfo[userID]>}{color:00ffff}{footer:© FreshBot | Music}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now playing:$userAvatar[$clientID]}]
$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];3]];{description: 

▬▬:radio_button:▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 

\`0$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]:$replaceText[$replaceText[$checkCondition[$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]]<10];true;0$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1];false;$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1]/$replaceText[$replaceText[$splitText[3];(;];);]
$textSplit[$songInfo[duration]; ]\` 
Requested by <@$songInfo[userID]>}{color:00ffff}{footer:© FreshBot | Music}{thumbnail:$songInfo[thumbnail]}]
$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];4]];{description: 

▬▬▬:radio_button:▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 

\`0$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]:$replaceText[$replaceText[$checkCondition[$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]]<10];true;0$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1];false;$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1]/$replaceText[$replaceText[$splitText[3];(;];);]
$textSplit[$songInfo[duration]; ]\` 
Requested by <@$songInfo[userID]>}{color:00ffff}{footer:© FreshBot | Music}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now playing:$userAvatar[$clientID]}]
$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];5]];{description: 

▬▬▬▬:radio_button:▬▬▬▬▬▬▬▬▬▬▬▬▬ 

\`0$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]:$replaceText[$replaceText[$checkCondition[$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]]<10];true;0$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1];false;$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1]/$replaceText[$replaceText[$splitText[3];(;];);]
$textSplit[$songInfo[duration]; ]\` 
Requested by <@$songInfo[userID]>}{color:00ffff}{footer:© FreshBot | Music}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now playing:$userAvatar[$clientID]}]
$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];8];6]];{description: 

▬▬▬▬▬:radio_button:▬▬▬▬▬▬▬▬▬▬▬▬ 

\`0$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]:$replaceText[$replaceText[$checkCondition[$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]]<10];true;0$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1];false;$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1]/$replaceText[$replaceText[$splitText[3];(;];);]
$textSplit[$songInfo[duration]; ]\` 
Requested by <@$songInfo[userID]>}{color:00ffff}{footer:© FreshBot | Music}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now playing:$userAvatar[$clientID]}]
$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];7]];{description: 

▬▬▬▬▬▬:radio_button:▬▬▬▬▬▬▬▬▬▬▬ 

\`0$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]:$replaceText[$replaceText[$checkCondition[$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]]<10];true;0$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1];false;$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1]/$replaceText[$replaceText[$splitText[3];(;];);]
$textSplit[$songInfo[duration]; ]\` 
Requested by <@$songInfo[userID]>}{color:00ffff}{footer:© FreshBot | Music}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now playing:$userAvatar[$clientID]}]
$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];8]];{description: 

▬▬▬▬▬▬▬:radio_button:▬▬▬▬▬▬▬▬▬▬ 

\`0$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]:$replaceText[$replaceText[$checkCondition[$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]]<10];true;0$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1];false;$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1]/$replaceText[$replaceText[$splitText[3];(;];);]
$textSplit[$songInfo[duration]; ]\` 
Requested by <@$songInfo[userID]>}{color:00ffff}{footer:© FreshBot | Music}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now playing:$userAvatar[$clientID]}]
$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];9]];{description: 

▬▬▬▬▬▬▬▬:radio_button:▬▬▬▬▬▬▬▬▬ 

\`0$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]:$replaceText[$replaceText[$checkCondition[$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]]<10];true;0$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1];false;$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1]/$replaceText[$replaceText[$splitText[3];(;];);]
$textSplit[$songInfo[duration]; ]\` 
Requested by <@$songInfo[userID]>}{color:00ffff}{footer:© FreshBot | Music}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now playing:$userAvatar[$clientID]}]
$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];10]];{description: 

▬▬▬▬▬▬▬▬▬:radio_button:▬▬▬▬▬▬▬▬ 

\`0$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]:$replaceText[$replaceText[$checkCondition[$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]]<10];true;0$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1];false;$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1]/$replaceText[$replaceText[$splitText[3];(;];);]
$textSplit[$songInfo[duration]; ]\` 
Requested by <@$songInfo[userID]>}{color:00ffff}{footer:© FreshBot | Music}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now playing:$userAvatar[$clientID]}]
$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];11]];{description: 

▬▬▬▬▬▬▬▬▬▬:radio_button:▬▬▬▬▬▬▬ 

\`0$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]:$replaceText[$replaceText[$checkCondition[$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]]<10];true;0$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1];false;$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1]/$replaceText[$replaceText[$splitText[3];(;];);]
$textSplit[$songInfo[duration]; ]\` 
Requested by <@$songInfo[userID]>}{color:00ffff}{footer:© FreshBot | Music}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now playing:$userAvatar[$clientID]}]
$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];12]];{description: 

▬▬▬▬▬▬▬▬▬▬▬:radio_button:▬▬▬▬▬▬ 

\`0$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]:$replaceText[$replaceText[$checkCondition[$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]]<10];true;0$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1];false;$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1]/$replaceText[$replaceText[$splitText[3];(;];);]
$textSplit[$songInfo[duration]; ]\` 
Requested by <@$songInfo[userID]>}{color:00ffff}{footer:© FreshBot | Music}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now playing:$userAvatar[$clientID]}]
$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];13]];{description: 

▬▬▬▬▬▬▬▬▬▬▬▬:radio_button:▬▬▬▬▬ 

\`0$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]:$replaceText[$replaceText[$checkCondition[$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]]<10];true;0$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1];false;$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1]/$replaceText[$replaceText[$splitText[3];(;];);]
$textSplit[$songInfo[duration]; ]\` 
Requested by <@$songInfo[userID]>}{color:00ffff}{footer:© FreshBot | Music}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now playing:$userAvatar[$clientID]}]
$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];14]];{description: 

▬▬▬▬▬▬▬▬▬▬▬▬▬:radio_button:▬▬▬▬ 

\`0$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]:$replaceText[$replaceText[$checkCondition[$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]]<10];true;0$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1];false;$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1]/$replaceText[$replaceText[$splitText[3];(;];);]
$textSplit[$songInfo[duration]; ]\` 
Requested by <@$songInfo[userID]>}{color:00ffff}{footer:© FreshBot | Music}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now playing:$userAvatar[$clientID]}]
$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];15]];{description: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬:radio_button:▬▬▬ 

\`0$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]:$replaceText[$replaceText[$checkCondition[$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]]<10];true;0$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1];false;$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1]/$replaceText[$replaceText[$splitText[3];(;];);]
$textSplit[$songInfo[duration]; ]\` 
Requested by <@$songInfo[userID]>}{color:00ffff}{footer:© FreshBot | Music}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now playing:$userAvatar[$clientID]}]
$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];16]];{description: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬:radio_button:▬▬ 

\`0$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]:$replaceText[$replaceText[$checkCondition[$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]]<10];true;0$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1];false;$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1]/$replaceText[$replaceText[$splitText[3];(;];);]
$textSplit[$songInfo[duration]; ]\` 
Requested by <@$songInfo[userID]>}{color:00ffff}{footer:© FreshBot | Music}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now playing:$userAvatar[$clientID]}]
$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];17]];{description: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬:radio_button:▬ 

\`0$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]:$replaceText[$replaceText[$checkCondition[$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]]<10];true;0$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1];false;$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1]/$replaceText[$replaceText[$splitText[3];(;];);]
$textSplit[$songInfo[duration]; ]\` 
Requested by <@$songInfo[userID]>}{color:00ffff}{footer:© FreshBot | Music}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now playing:$userAvatar[$clientID]}]
$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];18]];{description: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬:radio_button: 

\`0$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]:$replaceText[$replaceText[$checkCondition[$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]]<10];true;0$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1];false;$round[$multi[$sub[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60];$truncate[$divide[$sub[$filterMessage[$advancedTextSplit[$songInfo[duration];(;2;);1];:];$filterMessage[$advancedTextSplit[$songInfo[duration_left];(;2;);1];:]]
;60]]];60]];1]/$replaceText[$replaceText[$splitText[3];(;];);]
$textSplit[$songInfo[duration]; ]\` 
Requested by <@$songInfo[userID]>}{color:00ffff}{footer:© FreshBot | Music}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now playing:$userAvatar[$clientID]}]
$onlyIf[$voiceID!=;{color:RED}{description: Please join a vc first}]
$onlyIf[$queueLength>0;{color:RED}{description: Queue is empty}]`
})