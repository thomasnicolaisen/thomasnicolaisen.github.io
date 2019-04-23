//Referanse til HTML-elementet main
const main = document.querySelector("#produkter");
const sideBar = document.querySelector("#sideBar");


let url_string = window.location.href;
let url = new URL (url_string);
let id = url.searchParams.get("id");


//Referanse til databasen
const db = firebase.database();
const valgtProdukt = db.ref("Sko/Nike/"+id);
const valgtNikeSko = db.ref("sko/Nike/"+id);
const valgtAdidasSko = db.ref("sko/Adidas/"+id);
const valgtPumaSko = db.ref("sko/Puma/"+id);
const valgtEngDrakter = db.ref("drakter/Eng/"+id);
const valgtItaDrakter = db.ref("drakter/Ita/"+id);
const valgtFraDrakter = db.ref("drakter/Fra/"+id);
const valgtTysDrakter = db.ref("drakter/Tys/"+id);
const valgtSpaDrakter = db.ref("drakter/Spa/"+id);
const valgtNikeDrakter = db.ref("drakter/Merke/Nike/"+id);
const valgtAdidasDrakter = db.ref("drakter/Merke/Adidas/"+id);
const valgtPumaDrakter = db.ref("drakter/Merke/Puma/"+id);
const valgtNikeBaller = db.ref("fotballer/Nike/"+id);
const valgtAdidasBaller = db.ref("fotballer/Adidas/"+id);

//setup
visValgtProdukt();

//Funkjsonsdefinisjoner
function visValgtProdukt(){
  main.innerHTML =``;
  valgtProdukt.on("value", genererProduktHTML);
}

function genererProduktHTML(snapshot){
  let key = snapshot.key;
  let objekt = snapshot.val();
  console.log(key,objekt);

  main.innerHTML+=`
  <section class="valgtPokemon">
    <h1>${objekt.Navn}</h1>
    <img src="${objekt.ImageURL}"></img>
    <p>Navn: ${objekt.Navn}</p>
    <p>Pris: ${objekt.Pris}</p>
  </section>
  `;
}








/*

//Referanser til HTML-elementer


//Kode som henter ut info fra url
let url_string = window.location.href;
let url = new URL (url_string);
let id = url.searchParams.get("id");

console.log (id);

//Referanse til databasen
const db = firebase.database();
const produkt = db.ref("produkt");
const valgtProdukt = db.ref("sko/"+id)

//setup
visValgtProdukt();

//Funkjsonsdefinisjoner
function visValgtProdukt(){
  produkter.innerHTML =``;
  valgtProdukt.on("value", genererHTML);
  valgtNikeSko.on("value", genererHTML);
  valgtAdidasSko.on("value", genererHTML);
  valgtPumaSko.on("value", genererHTML);
  valgtEngDrakter.on("value", genererHTML);
  valgtItaDrakter.on("value", genererHTML);
  valgtFraDrakter.on("value", genererHTML);
  valgtTysDrakter.on("value", genererHTML);
  valgtSpaDrakter.on("value", genererHTML);
  valgtNikeDrakter.on("value", genererHTML);
  valgtAdidasDrakter.on("value", genererHTML);
  valgtPumaDrakter.on("value", genererHTML);
  valgtNikeBaller.on("value", genererHTML);
  valgtAdidasBaller.on("value", genererHTML);
}

function genererHTML(snapshot){
  let key = snapshot.key;
  let objekt = snapshot.val();

  console.log(key,objekt);

  main.innerHTML += `
    <section class="valgtProdukt">
    <h1>${objekt.Name}</h1>
    <img src="${objekt.ImageURL}"></img>
    <p>Navn: ${objekt.Navn}</p>
    <p>Merke: ${objekt.Merke}</p>
    <p>Farge1: ${objekt.Farge1}</p>
    <p>Farge2: ${objekt.Farge2}</p>
    <p>Pris: ${objekt.Pris}</p>
    </section>
  `;
}
*/