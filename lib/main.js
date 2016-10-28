"use strict";

// Creates a new random rut in the format rut-dv
// Example: createRandom() // returns 1111111-1

function createRandomRut() {
    var min = 5000000;
    var max = 25000000;

    var randomNumber = Math.round(Math.random() * (max - min)) + min;

    var dv = getDv(randomNumber);

    return randomNumber + "-" + dv;
}

// Get de DV of a rut
// Example: getDV(16941476) // returns 9
function getDv(rut) {
    rut = rut.toString();

    // serie numerica
    var secuencia = [2, 3, 4, 5, 6, 7, 2, 3];
    var sum = 0;

    for (var i = rut.length - 1; i >= 0; i--) {
        var d = rut.charAt(i);
        sum += new Number(d) * secuencia[rut.length - (i + 1)];
    }

    // sum mod 11
    var rest = 11 - sum % 11;
    // si es 11, retorna 0, sino si es 10 retorna K,
    // en caso contrario retorna el numero
    return rest === 11 ? 0 : rest === 10 ? "K" : rest;
}

function escribeRut() {
    var rut = createRandomRut();

    var div = document.getElementById('rut');

    div.innerHTML = div.innerHTML + rut;
}

escribeRut();