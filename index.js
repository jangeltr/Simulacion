"use strict";
let arreglo = [];
let n=0;
let m=0;
function generar() {
    n=parseInt(document.getElementById("n").value);
    let X0=parseInt(document.getElementById("X0").value);
    let a=parseInt(document.getElementById("a").value);
    let c=parseInt(document.getElementById("c").value);
    m=parseInt(document.getElementById("m").value);
    let lista=document.getElementById("lista");
    for(let i=0;i<n;i++){
        let Xi=(a*X0+c)%m/m;
        Xi=Math.trunc(Xi*100000)/100000;
        arreglo.push(Xi);
        let li=document.createElement("li");
        li.innerText=Xi;
        lista.appendChild(li);
        X0=Xi;
    }
}

function limpiar() {
    document.getElementById("lista").innerHTML="";
}

function consultarNumerosAleatorios() {
    console.log("Numeros Pseudoaleatorios Generados:", arreglo);
}

function pruebaUniformidad() {
    if (arreglo.length === 0) {
        alert("No hay numeros generados para probar la uniformidad.");
        return;
    }
    let FO = new Array(5).fill(0);
    let FE = arreglo.length / 5;
    //let i = 1/5
    for (let num of arreglo) {
        if (num > 0 && num < .20) FO[0]++;
        else if (num >= .20 && num < .40) FO[1]++;
        else if (num >= .40 && num < .60) FO[2]++;
        else if (num >= .60 && num < .80) FO[3]++;
        else if (num >= .80 && num < 1) FO[4]++;
    }
    console.log("Frecuencias Observadas:", FO);
    let sumatoria = 0;
    for (let j = 0; j < 5; j++) {
        let calculo = (FO[j] - FE) ** 2 / FE;
        sumatoria += calculo;
    }
    console.log("Sumatoria:", sumatoria);
    let chiCuadrada = 9.488;    
    if (sumatoria < chiCuadrada) {
        console.log("Se acepta la hipotesis nula, los numeros son uniformes");
    } else {
        console.log("Se rechaza la hipotesis nula, los numeros no son uniformes");
    }
}

function pruebaAleatoriedad() {
    if (arreglo.length === 0) {
        alert("No hay numeros generados para probar la aleatoriedad.");
        return;
    }
    let arreglo2 = []
    for (number of arreglo) {
        if (number >= 0.5) {
            arreglo2.push(1);
        } else {
            arreglo2.push(0);
        }
    }
    let logCorrida = [0,0,0,0,0]
    console.log("Arreglo binario:", arreglo2);
    for (let i = 0; i < arreglo2.length - 1; i++) {
        if (arreglo2[i] === arreglo2[i + 1]) {
            logCorrida[i]++;
    console.log("Sumatoria:", sumatoria);
    let chiCuadrada = 3.841;    
    if (sumatoria < chiCuadrada) {
        console.log("Se acepta la hipotesis nula, los numeros son aleatorios");
    } else {
        console.log("Se rechaza la hipotesis nula, los numeros no son aleatorios");
    }
}

function pruebaIndependencia() {
    if (arreglo.length === 0) {
        alert("No hay numeros generados para probar la independencia.");
        return;
    }
    let FO = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];
    let FE = (arreglo.length - 1) / 25;
    for (let i = 0; i < arreglo.length - 1; i++) {
        let fila = Math.floor(arreglo[i] * 5);
        let columna = Math.floor(arreglo[i + 1] * 5);
        FO[fila][columna]++;
    }
    console.log("Frecuencias Observadas:", FO);
    let sumatoria = 0;
    for (let j = 0; j < 5; j++) {
        for (let k = 0; k < 5; k++) {
            let calculo = (FO[j][k] - FE) ** 2 / FE;
            sumatoria += calculo;
        }
    }
    console.log("Sumatoria:", sumatoria);
    let chiCuadrada = 36.415;    
    if (sumatoria < chiCuadrada) {
        console.log("Se acepta la hipotesis nula, los numeros son independientes");
    } else {
        console.log("Se rechaza la hipotesis nula, los numeros no son independientes");
    }
}

function limpiarPruebas() {
    arreglo = [];
    n = 0;
    m = 0;
    document.getElementById("lista").innerHTML = "";
    console.clear();
}