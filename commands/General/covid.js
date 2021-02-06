module.exports = ({
 name: "covid",
 code: `$title[$replaceText[$replaceText[$getServerVar[language];Español;Estadisticas Covid-19];Inglés;Covid-19 Stats]]
 $color[red]
 $description[$replaceText[$replaceText[$getServerVar[language];Español;**Casos** - $jsonRequest[https://disease.sh/v3/covid-19/countries/$replaceText[$message; ;%20;-1]?yesterday=false&twoDaysAgo=false&strict=false&allowNull=true;cases;Invalid Country Given.]
 
 **Muertes** - $jsonRequest[https://disease.sh/v3/covid-19/countries/$replaceText[$message; ;%20;-1]?yesterday=false&twoDaysAgo=false&strict=false&allowNull=true;deaths;Invalid Country Given.]
 
 **Recuperados** - $jsonRequest[https://disease.sh/v3/covid-19/countries/$replaceText[$message; ;%20;-1]?yesterday=false&twoDaysAgo=false&strict=false&allowNull=true;recovered;Invalid Country Given.]
 
 **Activos** - $jsonRequest[https://disease.sh/v3/covid-19/countries/$replaceText[$message; ;%20;-1]?yesterday=false&twoDaysAgo=false&strict=false&allowNull=true;active;Invalid Country Given.]

 **Casos Criticos** - $jsonRequest[https://disease.sh/v3/covid-19/countries/$replaceText[$message; ;%20;-1]?yesterday=false&twoDaysAgo=false&strict=false&allowNull=true;critical;Invalid Country Given.]];Inglés;**Cases** - $jsonRequest[https://disease.sh/v3/covid-19/countries/$replaceText[$message; ;%20;-1]?yesterday=false&twoDaysAgo=false&strict=false&allowNull=true;cases;Invalid Country Given.]
 
 **Deaths** - $jsonRequest[https://disease.sh/v3/covid-19/countries/$replaceText[$message; ;%20;-1]?yesterday=false&twoDaysAgo=false&strict=false&allowNull=true;deaths;Invalid Country Given.]
 
 **Recovered** - $jsonRequest[https://disease.sh/v3/covid-19/countries/$replaceText[$message; ;%20;-1]?yesterday=false&twoDaysAgo=false&strict=false&allowNull=true;recovered;Invalid Country Given.]
 
 **Active** - $jsonRequest[https://disease.sh/v3/covid-19/countries/$replaceText[$message; ;%20;-1]?yesterday=false&twoDaysAgo=false&strict=false&allowNull=true;active;Invalid Country Given.]

 **Critical Cases** - $jsonRequest[https://disease.sh/v3/covid-19/countries/$replaceText[$message; ;%20;-1]?yesterday=false&twoDaysAgo=false&strict=false&allowNull=true;critical;Invalid Country Given.]]
 ]`
})