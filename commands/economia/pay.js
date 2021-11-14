module.exports = ({
 name: "pay", 
 description: "Pagale a un usuario",
 usage: "dr!pay <user> <cantidad>",
 note: "solo números!!",
 code: 
 `
 $reply[$messageID;
 {color:RANDOM}
 {thumbnail:$userAvatar[$findMember[$message[1]]]}
 {title:Paid}
 {description:You just gave <@$findMember[$message[1]]> $message[2] $getServerVar[currencyName]!}
 {footer:$getServerVar[currencyName] given by $userTag[$authorID];$authorAvatar}{timestamp:ms};no]

 $setUserVar[currency;$sum[$getUserVar[currency;$findMember[$message[1]]];$message[2]];$findMember[$message[1]]]
 $setUserVar[currency;$sub[$getUserVar[currency];$message[2]]]

 $cooldown[3s;You're on cooldown! You need to wait %time%.{delete:$getCooldownTime[user;pay;$authorID;yes]ms}]

 $onlyIf[$message[2]<=$getUserVar[currency;$authorID];You do not have enough $getServerVar[currencyName] to give!{delete:10s}]
 $onlyIf[$message[2]>0;You can't give less than 0 $getServerVar[currencyName]!{delete:10s}]
 $onlyIf[$isNumber[$message[2]]==true;Correct Usage: \`$getServerVar[prefix]pay $message[1] (Amount)\`{delete:10s}]
 $onlyIf[$findMember[$message[1]]!=$authorID;You can't pay yourself!{delete:10s}]
 $argsCheck[>1;Correct Usage: \`$getServerVar[prefix]pay (User) (Amount)\`{delete:10s}]
 ` 
})