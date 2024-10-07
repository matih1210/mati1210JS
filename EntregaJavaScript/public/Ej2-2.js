let numeroIngresado = prompt("Ingrese un numero y te dire si es par o impar");

numeroIngresado = parseInt(numeroIngresado);

if(numeroIngresado % 2 == 0){
    console.log("El numero", numeroIngresado,"es par");
}else{
    console.log("El numero", numeroIngresado,"es impar");
}
