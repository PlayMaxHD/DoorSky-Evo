module.exports = ({
name:"waifu",
code: `$title[Imagen de waifu Random]
$image[https://www.thiswaifudoesnotexist.net/example-$random[1;10000].jpg]
$color[RANDOM]
$cooldown[5s; wow tranquilo, espera $replaceText[%time%;s; Segundos] antes de volver a usar este comando]`
})