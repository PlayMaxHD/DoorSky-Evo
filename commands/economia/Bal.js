module.exports = ({
  name: "newbal",
  description: "con esto podras ver tu balance de dinero",
  usage: "dr!bal <user (optional)>",
  note: "puede experimentar fallas",
  code: `$title[Dinero de $username[$findMember[$mentioned[1]]]]
  $description[
**💵 Billetera:**
\`$$getGlobalUserVar[money;$findMember[$mentioned[1]]]\`

**🏛️ Banco:**
\`$$getGlobalUserVar[bank;$findMember[$mentioned[1]]]\`

**💰 Total:**
\`$$sum[$getGlobalUserVar[money;$findMember[$mentioned[1]]];$getGlobalUserVar[bank;$findMember[$mentioned[1]]]]\`]
$footer[Pedido Por: $username;$authorAvatar]
$color[RANDOM]`
})