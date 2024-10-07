let libro={
    titulo:"El Quijote",
    autor:"Miguel Cervantes",
    año: 1605,
    antiguedadLibro: function(){
        const añoActual = new Date().getFullYear();
        const diferencia = añoActual - this.año;

    if(diferencia>10){
        return true;
    } else {
        return false;
    }
    }
}

console.log("El libro",libro.titulo,"es antiguo:",libro.antiguedadLibro());
