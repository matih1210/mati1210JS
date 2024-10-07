
let numero;

do{
    numero = prompt("Ingrese un número mayor a 100");
    numero = parseInt(numero);
} while (numero<=100);

console.log("Ingresaste un número mayor a 100:", numero);
