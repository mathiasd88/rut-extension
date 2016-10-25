"use strict";

// Creates a new random rut in the format rut-dv
// Example: createRandom() // returns 1111111-1
function createRandomRut() {
    const min = 5000000
    const max = 25000000

    let randomNumber = Math.round(Math.random() * (max - min)) + min

    let dv = getDv(randomNumber)

    return `${randomNumber}-${dv}`
}

// Get de DV of a rut
// Example: getDV(16941476) // returns 9
function getDv(rut) {

    // Se utiliza un string para recorrerlo
    rut = rut.toString()

    // serie numerica
    let secuencia = [2,3,4,5,6,7,2,3];
    let sum = 0;

    for (let i = rut.length - 1; i >=0; i--) {
        let d = rut.charAt(i)
        sum += new Number(d)*secuencia[rut.length - (i + 1)];
    }

    // sum mod 11
    let rest = 11 - (sum % 11);
    // si es 11, retorna 0, sino si es 10 retorna K,
    // en caso contrario retorna el numero
    return rest === 11 ? 0 : rest === 10 ? "K" : rest;
}

function escribeRut()
{
    let rut = createRandomRut();

    let div = document.getElementById('rut')

    div.innerHTML = div.innerHTML + rut
}

escribeRut()