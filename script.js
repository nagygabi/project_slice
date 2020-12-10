//to do applikációt készítünk, alapértelmezetten 10 üres mező áll rendelkezésre, hozzá tudunk adni újakat;
//checkbox és törlés gombb van mindegyik elemen, alatti egy gomb, amivel hozzáadnk új sorokat

function pageLoaded() {
    //változót hozok létre, amiben benne a root

    let root = document.getElementById("root");

    //el kell tárolni a sorok hosszát, egy számot, itt 10
    let maxNumber = 10;

    //HTML-struktúra kell több sorban, legyen 1 div, 1 checkbox, input
    let row =  ` 
        <div class="row">
            <input type="checkbox">
            <input type="text">
            <button class="delete">Delete</button>
        </div>
    `;

    //for ciklussal 10-szer a sort kell létrehozni, insertAdjacebtHTML beforeend-del a html-hez hozzáadni a 10 sort
    for (let index = 0; index < maxNumber; index++) {
       root.insertAdjacentHTML("beforeend", row);
    }

    //a root elemen kivülre: egy plusz gomb hozzáadása, amivel kattintásra új sort tudunk hozzáadni
    root.insertAdjacentHTML("afterend", `
        <br><button id="add">Új sor hozzadása</button>
    `);

    //klikk eseményt adunk a plusz gombhoz, addevent click

    function newItem(){
        root.insertAdjacentHTML("beforeend", row);
    }

    document.getElementById("add").addEventListener("click", newItem);

    //kijelölöm classnév alapján az összes törlés gombot és elmentem egy változóba

   let deleteButtons = root.querySelectorAll(".delete");

    //for ciklus: ráadni mindegyikre egy click eseményt, h mindegyiken történjen vmi a kattintás hatására --hogyan ...?
    for (let index = 0; index < deleteButtons.length; index++){
        deleteButtons[index].addEventListener("click", removeItem);
    }

    function removeItem(e){
        console.log("e.target");
        e.target.parentElement.remove();
    }

}
window.addEventListener("load", pageLoaded);

