zmianaTitle = function () {
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