let numero = 8;

const esPar = (numero)=>{
    if(numero % 2 == 0){
        return true;
    } else{
        return false;
    }
}
let result = esPar(numero);

console.log("El número", numero, "es par:", result);