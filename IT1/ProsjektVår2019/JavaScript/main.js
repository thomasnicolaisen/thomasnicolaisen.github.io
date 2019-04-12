//Referanse til HTML-elementet main
const main = document.querySelector("#produkter");
const sideBar = document.querySelector("#sideBar");

//Referanser til databasen
const db = firebase.database();
const sko = db.ref("sko");
const nikeSko = db.ref("sko/Nike");
const adidasSko = db.ref("sko/Adidas");
const pumaSko = db.ref("sko/Puma");
const drakter = db.ref("drakter/");
const engDrakter = db.ref("drakter/Eng");
const itaDrakter = db.ref("drakter/Ita");
const fraDrakter = db.ref("drakter/Fra");
const tysDrakter = db.ref("drakter/Tys");
const spaDrakter = db.ref("drakter/Spa");
const nikeDrakter = db.ref("drakter/Merke/Nike");
const adidasDrakter = db.ref("drakter/Merke/Adidas");
const pumaDrakter = db.ref("drakter/Merke/Puma");
const fotballer = db.ref("fotballer");
const nikeBaller = db.ref("fotballer/Nike");
const adidasBaller = db.ref("fotballer/Adidas");

visAlleProdukter();

function genererHTML(snapshot){
  let key = snapshot.key;
  let produktSnap = snapshot.val();
  main.innerHTML += `
    <a href="produkt.html?id=${key}" class="produktBox">
      <h1>${produktSnap.Navn}</h1>
      <img src="${produktSnap.ImageURL}" width="100%"/>
      <div class="produktPris">${produktSnap.Pris} NOK</div>
    </a>
  `;
}

const visSkoKnapper = () => {
  sideBar.innerHTML = ``;
  main.innerHTML = ``;
  sideBar.innerHTML += `
    <h2>Merke</h2>
    <button class="SideBarBtn" onclick="visNikeSko()">Nike Sko</button>
    <button class="SideBarBtn" onclick="visAdidasSko()">Adidas Sko</button>
    <button class="SideBarBtn" onclick="visPumaSko()">Puma Sko</button>
    <h2>Pris</h2>
    <button class="SideBarBtn" onclick="visSkoPris()">Lav-Høy</button>
    <button class="SideBarBtn" onclick="visSkoPris2()">Høy-Lav</button>
    <h2>Type Sko</h2>
    <button class="SideBarBtn" onclick="visGressSko()">Gress Sko</button>
    <button class="SideBarBtn" onclick="visKunstGSko()">KunstG Sko</button>
    <button class="SideBarBtn" onclick="visFutsal()">Futsal Sko</button>
    <h2>Farger</h2>
    <section id="farger">
    <button class="BlåBtn" class="SideBarBtn" class="fargeKnapp" onclick="visSkoBlå()">Blå</button>
    <button class="RødBtn" class="SideBarBtn" class="fargeKnapp" onclick="visSkoRød()">Rød</button>
    <button class="HvitBtn" class="SideBarBtn" class="fargeKnapp" onclick="visSkoHvit()">Hvit</button>
    <button class="SvartBtn" class="SideBarBtn" class="fargeKnapp" onclick="visSkoSvart()">Svart</button>
    <button class="SideBarBtn" class="fargeKnapp" onclick="visSkoGrønn()">Grønn</button>
    <button class="GulBtn" class="SideBarBtn" class="fargeKnapp" onclick="visSkoGul()">Gul</button>
    <button class="GråBtn" class="SideBarBtn" class="fargeKnapp" onclick="visSkoGrå()">Grå</button>
    <button class="BronseBtn" class="SideBarBtn" class="fargeKnapp" onclick="visSkoBronse()">Bronse</button>
    </section>
  `;
  nikeSko.on("child_added", genererHTML);
  adidasSko.on("child_added", genererHTML);
  pumaSko.on("child_added", genererHTML);
}

const visDrakterKnapper = () => {
  sideBar.innerHTML = ``;
  main.innerHTML = ``;
  sideBar.innerHTML += `
    <h3>Merke</h3>
    <button class="SideBarBtn" onclick="visNikeDrakt()">Nike Drakter</button>
    <button class="SideBarBtn" onclick="visAdidasDrakt()">Adidas Drakter</button>
    <button class="SideBarBtn" onclick="visPumaDrakt()">Puma Drakter</button>
    <h3>Pris</h3>
    <button class="SideBarBtn" onclick="visSkoPris()">Lav-Høy</button>
    <button class="SideBarBtn" onclick="visSkoPris2()">Høy-Lav</button>
    <h3>Land</h3>
    <button class="SideBarBtn" onclick="visEngDrakter()">England</button>
    <button class="SideBarBtn" onclick="visItaDrakter()">Italia</button>
    <button class="SideBarBtn" onclick="visSpaDrakter()">Spania</button>
    <button class="SideBarBtn" onclick="visFraDrakter()">Frankrike</button>
    <button class="SideBarBtn" onclick="visTysDrakter()">Tyskland</button>

    <h3>Farger</h3>
    <section id="farger">
    <button class="BlåBtn" class="SideBarBtn" class="fargeKnapp" onclick="visSkoBlå()">Blå</button>
    <button class="RødBtn" class="SideBarBtn" class="fargeKnapp" onclick="visSkoRød()">Rød</button>
    <button class="HvitBtn" class="SideBarBtn" class="fargeKnapp" onclick="visSkoHvit()">Hvit</button>
    <button class="SvartBtn" class="SideBarBtn" class="fargeKnapp" onclick="visSkoSvart()">Svart</button>
    <button class="SideBarBtn" class="fargeKnapp" onclick="visSkoGrønn()">Grønn</button>
    <button class="GulBtn" class="SideBarBtn" class="fargeKnapp" onclick="visSkoGul()">Gul</button>
    <button class="GråBtn" class="SideBarBtn" class="fargeKnapp" onclick="visSkoGrå()">Grå</button>
    <button class="BronseBtn" class="SideBarBtn" class="fargeKnapp" onclick="visSkoBronse()">Bronse</button>
    </section>
  `;
  visDrakter();
}

const visFotBallerKnapper = () => {
  sideBar.innerHTML = ``;
  main.innerHTML = ``;
  sideBar.innerHTML += `
    <h3>Merke</h3>
    <button class="SideBarBtn" onclick="visNikeBaller()">Nike Baller</button>
    <button class="SideBarBtn" onclick="visAdidasBaller()">Adidas Baller</button>

function visAlleProdukter(){
  main.innerHTML = ``;
  nikeSko.on("child_added", genererHTML);
  adidasSko.on("child_added", genererHTML);
  pumaSko.on("child_added", genererHTML);
  engDrakter.on("child_added", genererHTML);
  itaDrakter.on("child_added", genererHTML);
  fraDrakter.on("child_added", genererHTML);
  tysDrakter.on("child_added", genererHTML);
  spaDrakter.on("child_added", genererHTML);
  nikeBaller.on("child_added",genererHTML);
  adidasBaller.on("child_added",genererHTML);
  //utstyr.on("child_added", genererHTML);
}

function visNikeSko(){
  main.innerHTML =``;
  nikeSko.on("child_added", genererHTML);
}

function visSkoPris(){
  main.innerHTML =``;
  nikeSko.orderByChild("Pris").limitToLast(10).on("child_added", genererHTML);
  adidasSko.orderByChild("Pris").limitToLast(10).on("child_added", genererHTML);
  pumaSko.orderByChild("Pris").limitToLast(10).on("child_added", genererHTML);
}

function visSkoPris2(){
  main.innerHTML =``;
  nikeSko.orderByChild("Pris").limitToFirst(10).on("child_added", genererHTML);
  adidasSko.orderByChild("Pris").limitToFirst(10).on("child_added", genererHTML);
  pumaSko.orderByChild("Pris").limitToFirst(10).on("child_added", genererHTML);
}

function visSkoBlå(){
  main.innerHTML =``;
  nikeSko.orderByChild("Farge1").equalTo("Blå").on("child_added", genererHTML);
  nikeSko.orderByChild("Farge2").equalTo("Blå").on("child_added", genererHTML);
  adidasSko.orderByChild("Farge1").equalTo("Blå").on("child_added", genererHTML);
  adidasSko.orderByChild("Farge2").equalTo("Blå").on("child_added", genererHTML);
  pumaSko.orderByChild("Farge1").equalTo("Blå").on("child_added", genererHTML);
  pumaSko.orderByChild("Farge2").equalTo("Blå").on("child_added", genererHTML);
}

function visSkoSvart(){
  main.innerHTML = ``;
  pumaSko.orderByChild("Farge1").equalTo("Svart").on("child_added", genererHTML);
  pumaSko.orderByChild("Farge2").equalTo("Svart").on("child_added", genererHTML);
  adidasSko.orderByChild("Farge1").equalTo("Svart").on("child_added", genererHTML);
  adidasSko.orderByChild("Farge2").equalTo("Svart").on("child_added", genererHTML);
  nikeSko.orderByChild("Farge1").equalTo("Svart").on("child_added", genererHTML);
  nikeSko.orderByChild("Farge2").equalTo("Svart").on("child_added", genererHTML);
}

function visSkoRød(){
  main.innerHTML = ``;
  pumaSko.orderByChild("Farge1").equalTo("Rød").on("child_added", genererHTML);
  pumaSko.orderByChild("Farge2").equalTo("Rød").on("child_added", genererHTML);
  adidasSko.orderByChild("Farge1").equalTo("Rød").on("child_added", genererHTML);
  adidasSko.orderByChild("Farge2").equalTo("Rød").on("child_added", genererHTML);
  nikeSko.orderByChild("Farge1").equalTo("Rød").on("child_added", genererHTML);
  nikeSko.orderByChild("Farge2").equalTo("Rød").on("child_added", genererHTML);
}

function visSkoHvit(){
  main.innerHTML =``;
  pumaSko.orderByChild("Farge1").equalTo("Hvit").on("child_added", genererHTML);
  pumaSko.orderByChild("Farge2").equalTo("Hvit").on("child_added", genererHTML);
  nikeSko.orderByChild("Farge1").equalTo("Hvit").on("child_added", genererHTML);
  nikeSko.orderByChild("Farge2").equalTo("Hvit").on("child_added", genererHTML);
}

function visSkoGul(){
  main.innerHTML =``;
  adidasSko.orderByChild("Farge1").equalTo("Gul").on("child_added", genererHTML);
  adidasSko.orderByChild("Farge2").equalTo("Gul").on("child_added", genererHTML);
  nikeSko.orderByChild("Farge1").equalTo("Gul").on("child_added", genererHTML);
  nikeSko.orderByChild("Farge2").equalTo("Gul").on("child_added", genererHTML);
}

function visSkoGrønn(){
  main.innerHTML =``;
  pumaSko.orderByChild("Farge1").equalTo("Grønn").on("child_added", genererHTML);
  pumaSko.orderByChild("Farge2").equalTo("Grønn").on("child_added", genererHTML);
  adidasSko.orderByChild("Farge1").equalTo("Grønn").on("child_added", genererHTML);
  adidasSko.orderByChild("Farge2").equalTo("Grønn").on("child_added", genererHTML);
  nikeSko.orderByChild("Farge1").equalTo("Grønn").on("child_added", genererHTML);
  nikeSko.orderByChild("Farge2").equalTo("Grønn").on("child_added", genererHTML);
}

function visSkoBronse(){
  main.innerHTML =``;
  nikeSko.orderByChild("Farge1").equalTo("Bronse").on("child_added", genererHTML);
  nikeSko.orderByChild("Farge2").equalTo("Bronse").on("child_added", genererHTML);
}

function visAdidasSko(){
  main.innerHTML =``;
  adidasSko.orderByChild("Adidas").on("child_added", genererHTML);
}

function visPumaSko(){
  main.innerHTML =``;
  pumaSko.on("child_added", genererHTML);
}

function visSkoGrå(){
  main.innerHTML =``;
  pumaSko.orderByChild("Farge1").equalTo("Grå").on("child_added", genererHTML);
  pumaSko.orderByChild("Farge2").equalTo("Grå").on("child_added", genererHTML);
}

function visDrakter(){
  main.innerHTML = ``;
  engDrakter.on("child_added", genererHTML);
  itaDrakter.on("child_added", genererHTML);
  fraDrakter.on("child_added", genererHTML);
  tysDrakter.on("child_added", genererHTML);
  spaDrakter.on("child_added", genererHTML);
}


function visItaDrakter(){
  main.innerHTML = ``;
  itaDrakter.on("child_added", genererHTML);
}

function visTysDrakter(){
  main.innerHTML = ``;
  tysDrakter.on("child_added", genererHTML);
}

function visFraDrakter(){
  main.innerHTML = ``;
  fraDrakter.on("child_added", genererHTML);
}

function visSpaDrakter(){
  main.innerHTML = ``;
  spaDrakter.on("child_added", genererHTML);
}

function visEngDrakter(){
  main.innerHTML = ``;
  engDrakter.on("child_added", genererHTML);
}

function visNikeDrakt(){
  main.innerHTML = ``;
  engDrakter.orderByChild("Merke").equalTo("Nike").on("child_added", genererHTML);
  itaDrakter.orderByChild("Merke").equalTo("Nike").on("child_added", genererHTML);
  fraDrakter.orderByChild("Merke").equalTo("Nike").on("child_added", genererHTML);
  tysDrakter.orderByChild("Merke").equalTo("Nike").on("child_added", genererHTML);
  spaDrakter.orderByChild("Merke").equalTo("Nike").on("child_added", genererHTML);
}

function visAdidasDrakt() {
  main.innerHTML = ``;
  engDrakter.orderByChild("Merke").equalTo("Adidas").on("child_added", genererHTML);
  itaDrakter.orderByChild("Merke").equalTo("Adidas").on("child_added", genererHTML);
  fraDrakter.orderByChild("Merke").equalTo("Adidas").on("child_added", genererHTML);
  tysDrakter.orderByChild("Merke").equalTo("Adidas").on("child_added", genererHTML);
  spaDrakter.orderByChild("Merke").equalTo("Adidas").on("child_added", genererHTML);
}

function visPumaDrakt() {
  main.innerHTML = ``;
  engDrakter.orderByChild("Merke").equalTo("Puma").on("child_added", genererHTML);
  itaDrakter.orderByChild("Merke").equalTo("Puma").on("child_added", genererHTML);
  fraDrakter.orderByChild("Merke").equalTo("Puma").on("child_added", genererHTML);
  tysDrakter.orderByChild("Merke").equalTo("Puma").on("child_added", genererHTML);
  spaDrakter.orderByChild("Merke").equalTo("Puma").on("child_added", genererHTML);
}

function visNikeBaller() {
  main.innerHTML = ``;
  nikeBaller.on("child_added", genererHTML);
}

function visAdidasBaller() {
  main.innerHTML = ``;
  adidasBaller.on("child_added", genererHTML);
}