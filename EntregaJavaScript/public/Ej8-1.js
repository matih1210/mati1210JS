
const listaItems = document.querySelectorAll("#milista li");//Se usa document.querySelectorAll('#miLista li') para seleccionar todos los elementos <li> dentro de la lista con el id miLista.

listaItems.forEach(item=>{//Se utiliza forEach para iterar sobre cada elemento de la lista.
    item.addEventListener("click", function(){
        console.log(this.textContent);//Obtiene el texto del elemento clicado usando this.textContent.
    });

});


