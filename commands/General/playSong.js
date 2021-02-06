module.exports = ({
 name: "play",
 description: "sirve para reproducir música",
 usage: "dr!play <url/name>",
 note: "usa dr!stop para quitar la música",
 code: `$color[5898F8] $author[$replaceText[$replaceText[$getServerVar[language];Español;Cancion Añadida ☑️];Inglés;Song Added ☑️]] $description[$replaceText[$replaceText[$getServerVar[language];Español;**La Canción  [$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;title]\\]($jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;url]) fue añadida a la cola.**

$addField[La Cancion dura:;$parseDate[$multi[$songInfo[duration];1000];time]
:music:▬▬▬▬▬▬▬▬▬▬▬
00:01 / 0$truncate[$divide[$songInfo[duration];60]]:$replaceText[$replaceText[$checkCondition[$round[$multi[$sub[$divide[$songInfo[duration];60];$truncate[$divide[$songInfo[duration];60]]];60]]<10];true;0$round[$multi[$sub[$divide[$songInfo[duration];60];$truncate[$divide[$songInfo[duration];60]]];60]];1];false;$round[$multi[$sub[$divide[$songInfo[duration];60];$truncate[$divide[$songInfo[duration];60]]];60]];1];no]
 $addField[Descripcion:;$songInfo[description];no]
 $addField[Reproduciendo:;[$songInfo[title]\\]($songInfo[url]);no]];Inglés;**the song [$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;title]\\]($jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;url]) was added to the queue.**

$addField[The Song lasts:;$parseDate[$multi[$songInfo[duration];1000];time]
:music:▬▬▬▬▬▬▬▬▬▬▬
00:01 / 0$truncate[$divide[$songInfo[duration];60]]:$replaceText[$replaceText[$checkCondition[$round[$multi[$sub[$divide[$songInfo[duration];60];$truncate[$divide[$songInfo[duration];60]]];60]]<10];true;0$round[$multi[$sub[$divide[$songInfo[duration];60];$truncate[$divide[$songInfo[duration];60]]];60]];1];false;$round[$multi[$sub[$divide[$songInfo[duration];60];$truncate[$divide[$songInfo[duration];60]]];60]];1];no]
 $addField[Song Description:;$songInfo[description];no]
 $addField[Currently Playing:;[$songInfo[title]\\]($songInfo[url]);no]]{}
] $footer[$replaceText[$replaceText[$getServerVar[language];Español;🎶 Sistema Músical ☺️];Inglés;🎶 Music Sistem ☺️]]

$replaceText[$replaceText[$getServerVar[language];Español;$playSong[$message;{author:Error}{description:Could not find a song named: \`$message \`. Make sure you enter the song name correctly.}{footer:Music:🎶 Sistema Musical ☺️}{color:FF0000}]];Inglés;$playSong[$message;{author:Error}{description:Could not find a song named: \`$message \`. Make sure you enter the song name correctly.}{footer:Music:🎶 Music Sistem ☺️}{color:FF0000}]]
`
})