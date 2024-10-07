
const mostrarTexto = () =>{
    const valor = document.getElementById("mensaje").value;
    alert("Has ingresado " + valor);//Se muestra una alerta con el mensaje que incluye el valor ingresado.
}

const button = document.getElementById("botonAlerta");

button.addEventListener("click",()=>{
    console.log("El usuario hizo click");
    mostrarTexto();
});