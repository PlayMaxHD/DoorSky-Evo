module.exports = ({
  name: "trash",
  description: "Tira a la basura a alguien",
  usage: "dr!trash <user>",
  note: "Todo Bien",
  code: `$title[Basura 💫]
$description[Veo Mal O es...]
$image[attachment://trash.png]

$attachment[https://api.chiaki.ml/imagen/basura?avatar=$replacetext[$userAvatar[$mentioned[1;yes]];webp;png]&key=NPJBÑ-YWAAA-ÑKTGN-MUSBE;trash.png;url]
$footer[$userTag;$authorAvatar]
$color[RANDOM]
$onlyIf[$mentioned[1]!=;:x: menciona a alguien!!]`
})