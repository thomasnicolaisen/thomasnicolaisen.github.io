let url_string = window.location.href;
let url = new URL (url_string);
let id = url.searchParams.get("id");

console.log (id);

//Referanse til databasen
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
  valgtProdukt.on("value",genererHTML);
}

function genererHTML(snapshot){
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
