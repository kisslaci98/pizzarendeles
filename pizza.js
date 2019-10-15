"use strict";

let payment = 0;
let order = document.getElementById("order");

function send() {
    
    let type = document.forms["urlap"]["type"].value;
    let writetype = "tt";
    switch (type) {
        case "marg":
            writetype = "Margaréta";
            break;
        case "haw":
            writetype = "Hawaii";
            break;
        case "magy":
            writetype = "Magyaros";
            break;
    }
    let size = document.forms["urlap"]["size"].value;
    let writesize = "rr";
    switch (size) {
        case "small":
            writesize = "Kicsi";
            break;
        case "medium":
            writesize = "Közepes";
            break;
        case "large":
            writesize = "Nagy";
            break;
    }
let text = `<p>Az Ön rendelése: 1 db ${writetype} ${writesize} pizza.</p>`;
text += `<p>Fizetendő összeg: ${payment}Ft </p>`;
order.innerHTML = text;
}

