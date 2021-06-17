function zmianaTitle() {
    function title() {
        if (document.title === "👉Lore Brennej👈") {
            //console.log(document.title);
            document.title = "👇Lore Brennej👇" //&#x1F447;Lore Brennej&#x1F447;
            //console.log(document.title);
            return;
        }
        if (document.title === "👇Lore Brennej👇") {
            //console.log(document.title);
            document.title = "👉Lore Brennej👈" //&#x1F449;Lore Brennej&#x1F448;
            //console.log(document.title);
            return
        }
    }
setInterval(title, 1500);
}
document.title = "👉Lore Brennej👈";
zmianaTitle();

  /////////////////////////////////////
 ////////^Zmiana tytułu strony^///////
/////////////////////////////////////

const GeoDesktop = document.getElementById("GeoDesktop");
const GeoMobile = document.getElementById("GeoMobile");
const PartDesktop = document.getElementById("PartDesktop");
const PartMobile = document.getElementById("PartMobile");

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    GeoDesktop.style.display = "none";
    GeoMobile.style.display = "block";
    PartDesktop.style.display = "none";
    PartMobile.style.display = "block";
} else {
    GeoDesktop.style.display = "block";
    GeoMobile.style.display = "none";
    PartDesktop.style.display = "inline-block";
    PartMobile.style.display = "none";
}

  /////////////////////////////////////
 ////////^Responsywność strony^///////
/////////////////////////////////////

const todayDate = document.getElementById("date");
let year = new Date().getFullYear();
if (year !== 2021 && year > 2021) {
    todayDate.innerHTML = "-" + year;//jeśli bieżący rok = rok powstania czyli 2021, nie dodawaj myślnika i nowego roku
}

  /////////////////////////////////////
 //////////////^Rok^//////////////////
/////////////////////////////////////