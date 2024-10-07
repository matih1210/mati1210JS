const buttonDeshabilitar = document.getElementById("botonDeshabilitar");
const buttonHabilitar = document.getElementById("botonHabilitar");
const campoTexto = document.getElementById("campoTexto");

buttonDeshabilitar.addEventListener("click",()=>{
    console.log("El usuario hizo click para deshabilitar");
    campoTexto.disabled = true;
});

buttonHabilitar.addEventListener("click",()=>{
    console.log("El usuario hizo click para habilitar");
    campoTexto.disabled = false;
});