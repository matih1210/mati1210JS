
let persona = {
    nombre:"Ana",
    Edad: 30,
    ciudad: "Madrid",

    actualizarCiudad: function(nombreCiudad) {
        this.ciudad = nombreCiudad; //this.ciudad: En el método, uso this para referirme al propio objeto persona, de modo que this.ciudad se refiere a la propiedad ciudad del objeto.
    }
};

persona.actualizarCiudad("Bs As");
console.log(persona);
