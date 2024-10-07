const parrafos = document.querySelectorAll(".parrafos");//document.querySelectorAll(".parrafos"): Esto selecciona todos los elementos con la clase parrafos y devuelve una lista de nodos.

const cambiarColorParrafos = () =>{
parrafos.forEach((p)=>{
    if(p.classList.contains("blueparrafo")){
        p.classList.remove("blueparrafo");
    } else {
        p.classList.add("blueparrafo");
    }
});
};

const button = document.getElementById("botonAzul");

button.addEventListener("click",()=>{
    console.log("El usuario hizo click");
    cambiarColorParrafos();
});