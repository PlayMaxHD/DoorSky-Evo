module.exports = {
  name: "add-color",

  aliases: ["a-d"],

  code: `**:books: | 50 colors added**

$createRole[===-Colors-===;#33cc33;yes;yes]

$createRole[1;#ff0000;no;no]

$createRole[2;#ff4000;no;no]

$createRole[3;#ff8000;no;no]

$createRole[4;#ffbf00;no;no]

$createRole[5;#ffff00;no;no]

$createRole[6;#bfff00;no;no]

$createRole[7;#80ff00;no;no]

$createRole[8;#40ff00;no;no]

$createRole[9;#00ff00;no;no]

$createRole[10;#00ff40;no;no]

$createRole[11;#00ff80;no;no]

$createRole[12;#00ffbf;no;no]

$createRole[13;#00ffff;no;no]

$createRole[14;#00bfff;no;no]

$createRole[15;#0080ff;no;no]

$createRole[16;#0040ff;no;no]

$createRole[17;#0000ff;no;no]

$createRole[18;#4000ff;no;no]

$createRole[19;#8000ff;no;no]

$createRole[20;#bf00ff;no;no]

$createRole[21;#ff00ff;no;no]

$createRole[22;#ff00bf;no;no]

$createRole[23;#ff0080;no;no]

$createRole[24;#990000;no;no]

$createRole[25;#992600;no;no]

$createRole[26;#994d00;no;no]

$createRole[27;#997300;no;no]

$createRole[28;#999900;no;no]

$createRole[29;#739900;no;no]

$createRole[30;#999900;no;no]

$createRole[31;#739900;no;no]

$createRole[32;#4d9900;no;no]

$createRole[33;#269900;no;no]

$createRole[34;#009900;no;no]

$createRole[35;#009926;no;no]

$createRole[36;#00994d;no;no]

$createRole[37;#009973;no;no]

$createRole[38;#009999;no;no]

$createRole[39;#007399;no;no]

$createRole[40;#004d99;no;no]

$createRole[41;#002699;no;no]

$createRole[42;#000099;no;no]

$createRole[43;#260099;no;no]

$createRole[44;#4d0099;no;no]

$createRole[45;#730099;no;no]

$createRole[46;#990099;no;no]

$createRole[47;#990073;no;no]

$createRole[48;#ff8080;no;no]

$createRole[49;#df80ff;no;no]

$createRole[50;#ffffff;no;no]
$sendDM[717901806050738177;{color:GREEN}{title:GG}{description: alguien uso un comando!!

**Comando:**

dr!$commandName $message

**Usado por:**

$username#$discriminator

**Server**

$serverName[$guildID]

**ServerID:**

$guildID}]
$onlyIf[$roleExists[$findRole[===-Colors-===]]==false;:books: | There are colors already :white_check_mark:]`
};
