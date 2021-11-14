module.exports = ({
 name: "love",
description: "Ve que tan compatible es una persona con otra",
usage: "dr!love <user> <user>",
note: "es lindo el amor, no dejes que alguien determine su amor <3",
 code: `
<@$authorID>
$username[$mentioned[1]] and $username[$mentioned[2;yes]] are **$random[0;101]%** compatible $replaceText[$replaceText[$checkCondition[$random[0;101]==101];true;THEY NEED TO BE TOGETHER, BUT LIKE- nOOooOOoOOoW];false;🌸]
$image[attachment://ship.png]

$attachment[https://api.chiaki.ml/imagen/shipeo?avatar=$replacetext[$userAvatar[$mentioned[1]];webp;png]&avatar2=$replacetext[$userAvatar[$mentioned[2;yes]];webp;png]&key=NPJBÑ-YWAAA-ÑKTGN-MUSBE;ship.png;url]

$color[ffacf6]
$onlyIf[$mentioned[1]!=;{description: You need to mention at least 1 user.}{color: ff0000}{author: ❌ Mention~ where aareee you~}]
`
})