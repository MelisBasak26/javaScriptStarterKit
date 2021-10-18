console.log("Merhaba Kodlama.io")

//JS type safe değildir. (Tip güvenli değildir)
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun ="9.20"
{
    let dolarDun = 9.10
}
console.log(dolarDun)


const euroDun = 11.2
//euroDun = 11 // bunu yapma!

console.log(euroDun)

//array
//camelCasing
//PascalCasing
let KonutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredileri"]

console.log("<ul>")
for(let i = 0;i<KonutKredileri.length;i++){
    console.log("<li>"+KonutKredileri[i]+"</li>")
}
console.log("</ul>")

{/* <ul>
    <li>Konut Kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul>*/}


console.log(KonutKredileri)