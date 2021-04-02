module.exports = ({
name: "kiss",
description: "Sirve para darle un beso a la persona que mencionés",
usage: "dr!kiss <user>",
note: "Besa a la persona que ames, no a cualquiera <3",
code: `$title[Muchos Besos ❤️]
$desciption[**$username** acaba de darle un beso a **$username[$mentioned[1]]** 🌸]
$image[https://purrbot.site/img/sfw/kiss/gif/kiss_0$randomText[01;02;03;04;05;06;07;08;09;10;11;12;13;14;15;16;17;18;19;20;21;22;23;24;25;26;27;28;29;30;31;32;33;34;35;36;37;38;39;40;41;42;43;44;45;46;47;48;49;50].gif]
$color[PINK]
$onlyIf[$mentioned[1]==$clientID; Agradezco que quieras darme un beso pero es algo extraño O.o]
$onlyIf[$mentioned[1]==$authorID;Admiro que te quieras, pero no puedes darte un beso a ti mismo O.o]
$onlyIf[$mentioned[1]!=;:x: Lo siento pero debes mencionar a alguien primero]`
})
