const botonInputs = document.getElementById("botonInputs");
const botonEliminar =  document.getElementById("botonEliminar");
const mostrarCorreo = document.getElementById("mostrarCorreo");

const getDataInputs = ()=>{
    const email = document.getElementById("email").value;
    localStorage.setItem("correo",email);
    mostrarCorreoEnDOM(email);
};


const mostrarCorreoEnDOM = (email) =>{
    mostrarCorreo.innerHTML = `<p>Correo guardado: ${email}</p>`;//mostrarCorreo.innerHTML = ...: Inserta el correo electrónico en el div para mostrarlo en la página.
    botonEliminar.style.display = "inline"; //botonEliminar.style.display = "inline": Cambia el estilo del botón de eliminar para hacerlo visible. Al principio, este botón está oculto.
};

const eliminarCorreo = () =>{
    localStorage.removeItem("correo");
    mostrarCorreo.innerHTML = ""; // mostrarCorreo.innerHTML = "": Limpia el contenido del div, eliminando el correo de la pantalla.
    botonEliminar.style.display = "none"; //botonEliminar.style.display = "none": Oculta el botón de eliminar.
}

const correoGuardado = localStorage.getItem("correo"); // localStorage.getItem("correo"): Intenta obtener el correo almacenado en localStorage.

if (correoGuardado) {
    mostrarCorreoEnDOM(correoGuardado);
}

botonInputs.addEventListener("click",()=>{
    getDataInputs();
});

botonEliminar.addEventListener("click", eliminarCorreo);

